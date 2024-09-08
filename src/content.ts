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
      const formattedText = prettier.format(activeElement.value, {
        parser: "markdown",
        plugins: [markdownParser],
      });
      activeElement.value = formattedText;
    }
  }
});
