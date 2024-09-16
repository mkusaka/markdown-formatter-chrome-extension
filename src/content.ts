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
      const formattedText = prettier.format(activeElement.value, {
        parser: "markdown",
        plugins: [markdownParser],
      });
      simulateUserReplace(activeElement, formattedText, start);
    }
  }
});

function simulateUserReplace(
  element: HTMLTextAreaElement | HTMLInputElement,
  formattedText: string,
  start: number
) {
  element.focus();

  // Measure time taken to select all text
  console.time("Text Selection");
  element.setSelectionRange(0, element.value.length);
  console.timeEnd("Text Selection");

  // Measure time for delete operation
  console.time("Delete Operation");
  document.execCommand("delete", false);
  console.timeEnd("Delete Operation");

  
  // Measure time for insert operation
  console.time("Insert Operation");
  document.execCommand("insertText", false, formattedText);
  console.timeEnd("Insert Operation");

  // Restore the cursor position
  element.setSelectionRange(start, start);
}
