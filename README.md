# Markdown Formatter Chrome Extension

A Chrome extension that formats the content of text input fields and text areas as Markdown using Prettier when the `Alt+L` (or `Cmd+Opt+L` on macOS) keyboard shortcut is pressed.

## Features

- Formats the text inside text input fields or text areas using Prettier's Markdown formatting.
- Works on all websites.
- Supports platform-specific keybindings:
    - **macOS**: `Cmd + Option + Semi-colon`
    - **Windows/Linux**: `Ctrl + Alt + Semi-colon`

## Installation

1. Clone or download this repository.

    ```bash
    bash
    Copy code
    git clone https://github.com/mkusaka/markdown-formatter-chrome-extension.git
    cd text-format-prettier-extension
    
    ```

2. Install dependencies using `pnpm`:

    ```bash
    pnpm install
    
    ```

3. Build the extension:

    ```bash
    pnpm run build
    
    ```

4. Open Chrome and go to `chrome://extensions/`.
5. Enable **Developer mode** (toggle in the top-right corner).
6. Click **Load unpacked** and select the `dist` folder from the project.

## Usage

1. Focus on a text input field or textarea in your browser.
2. Press the key combination:
    - **macOS**: `Cmd + Option + Semi-colon`
    - **Windows/Linux**: `Ctrl + Alt + Semi-colon`
3. The content will be automatically formatted as Markdown using Prettier.

## Development

To make changes or develop further, follow these steps:

1. Make your changes to the source code in the `src/` directory.
2. Rebuild the extension:

    ```bash
    pnpm run build
    
    ```

3. Reload the extension in Chrome via the `chrome://extensions/` page by clicking the **Reload** button.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
