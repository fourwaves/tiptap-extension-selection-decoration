# @fourwaves/tiptap-extension-selection-decoration

## Introduction

`@fourwaves/tiptap-extension-selection-decoration` is a selection decoration extension for Tiptap. It allows text to remain visibly selected, even when you focus out of the editor, offering a more flexible and customizable selection behavior.

This is especially useful in cases where native selections disappear when the editor loses focus, such as when interacting with other elements (e.g., dropdowns) in the editor interface.

## Features

- Customizable selection styling using the provided class name.
- Selection remains visible even when the editor loses focus.
- Seamlessly integrates with Tiptap's rich text editing features.

## Installation

```bash
npm install @fourwaves/tiptap-extension-selection-decoration
```

## Usage

To use this extension in your Tiptap editor, you can include it like so:

```typescript
import { Editor } from '@tiptap/core';
import SelectionDecoration from '@fourwaves/tiptap-extension-selection-decoration';

const editor = new Editor({
  extensions: [
    SelectionDecoration.configure({
      className: 'custom-selection', // Optional: Customize your selection class
    }),
  ],
});
```

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
