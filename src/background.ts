chrome.commands.onCommand.addListener((command) => {
    if (command === "format-markdown") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tabId = tabs[0].id;
            if (tabId) {
                chrome.scripting.executeScript({
                    target: { tabId: tabId, allFrames: true },
                    func: formatMarkdownOnActiveElement, // Use 'func' instead of 'function'
                });
            }
        });
    }
});

function formatMarkdownOnActiveElement() {
    const activeElement = document.activeElement as HTMLTextAreaElement | HTMLInputElement | null;
    if (activeElement && (activeElement.tagName === "TEXTAREA" || activeElement.tagName === "INPUT")) {
        chrome.runtime.sendMessage({ action: "format", content: activeElement.value }, (response) => {
            if (response) {
                activeElement.value = response;
            }
        });
    }
}
