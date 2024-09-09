import prettier from "prettier";
import markdownParser from "prettier/parser-markdown";

document.addEventListener("keydown", (event) => {
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
      // Save the cursor position
      const start = activeElement.selectionStart ?? 0;
      const end = activeElement.selectionEnd ?? 0;
      const formattedText = prettier.format(activeElement.value, {
        parser: "markdown",
        plugins: [markdownParser],
      });

      // Use execCommand to insert text and preserve undo history
      insertFormattedTextWithUndo(activeElement, formattedText, start, end);
    }
  }
});

function insertFormattedTextWithUndo(
  element: HTMLTextAreaElement | HTMLInputElement,
  formattedText: string,
  start: number,
  end: number
) {
  // Focus the element first
  element.focus();

  // Select the current range
  element.setSelectionRange(start, end);

  // Use document.execCommand to insert the formatted text
  // This may preserve undo history in certain browsers
  document.execCommand("insertText", false, formattedText);

  // Restore the cursor position after the insertion
  element.setSelectionRange(start, start + formattedText.length);
}
