import prettier from "prettier";
import markdownParser from "prettier/parser-markdown";

document.addEventListener("keydown", async (event) => {
  const activeElement = document.activeElement as
    | HTMLTextAreaElement
    | HTMLInputElement
    | null;

  if (
    event.metaKey &&
    event.altKey &&
    event.code === "Semicolon" &&
    activeElement
  ) {
    if (
      activeElement.tagName === "TEXTAREA" ||
      activeElement.tagName === "INPUT"
    ) {
      const start = activeElement.selectionStart ?? 0;
      // current value of this element
      const currentValue = activeElement.value;
      const formattedText = prettier.format(activeElement.value, {
        parser: "markdown",
        plugins: [markdownParser],
      });
      // if not changed, then return
      if (currentValue === formattedText) {
        return;
      }
      simulateUserReplace(activeElement, formattedText, start);
    }
  }
});

function simulateUserReplace(
  element: HTMLTextAreaElement | HTMLInputElement,
  formattedText: string,
  start: number,
) {
  element.focus();

  element.setSelectionRange(0, element.value.length);

  document.execCommand("delete", false);

  document.execCommand("insertText", false, formattedText);

  // Restore the cursor position
  element.setSelectionRange(start, start);
}
