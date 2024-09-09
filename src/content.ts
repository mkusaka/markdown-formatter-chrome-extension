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
      console.time("Total Time"); // Start measuring total time

      // Measure Prettier formatting time
      console.time("Prettier Formatting");
      const start = activeElement.selectionStart ?? 0;
      const formattedText = prettier.format(activeElement.value, {
        parser: "markdown",
        plugins: [markdownParser],
      });
      console.timeEnd("Prettier Formatting"); // End measuring Prettier formatting time

      // Measure time taken to simulate user interaction
      console.time("Simulate User Replace");
      simulateUserReplace(activeElement, formattedText, start);
      console.timeEnd("Simulate User Replace"); // End measuring user interaction simulation

      console.timeEnd("Total Time"); // End measuring total time
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
