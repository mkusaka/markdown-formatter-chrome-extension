import prettier from "prettier";
import markdownParser from "prettier/parser-markdown";

// Get the DOM elements
const markdownInput = document.getElementById("markdownInput");
const previewDiv = document.getElementById("preview");
const copyMessage = document.getElementById("copyMessage");
const formatButton = document.getElementById("formatButton");

// Listen for button click
formatButton?.addEventListener("click", () => {
  const markdownText = (markdownInput as HTMLInputElement).value;

  // Format the markdown using Prettier
  const formattedText = prettier.format(markdownText, {
    parser: "markdown",
    plugins: [markdownParser],
  });

  // Update the preview area with the formatted text
  if (previewDiv) {
    previewDiv.textContent = formattedText;
  }

  // Copy the formatted text to the clipboard
  navigator.clipboard
    .writeText(formattedText)
    .then(() => {
      if (!copyMessage) {
        return;
      }
      copyMessage.textContent = "Formatted text copied to clipboard!";
      setTimeout(() => {
        copyMessage.textContent = "";
      }, 2000); // Clear the message after 2 seconds
    })
    .catch((err) => {
      if (!copyMessage) {
        return;
      }
      copyMessage.textContent = "Failed to copy to clipboard.";
      console.error("Clipboard error:", err);
    });
});
