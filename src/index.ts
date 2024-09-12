import { Extension } from '@tiptap/core';
import { Plugin, PluginKey } from 'prosemirror-state';
import { Decoration, DecorationSet } from 'prosemirror-view';

export interface SelectionDecorationOptions {
  className: string;
}

const SelectionDecoration = Extension.create<SelectionDecorationOptions>({
  name: 'selectionDecoration',

  addOptions() {
    return {
      className: 'selection',
    };
  },

  addProseMirrorPlugins() {
    const { editor } = this;

    return [
      new Plugin({
        key: new PluginKey('selection'),
        props: {
          decorations: (state) => {
            const { selection } = state;

            if (selection.empty) {
              return null;
            }

            return DecorationSet.create(state.doc, [
              Decoration.inline(selection.from, selection.to, {
                class: this.options.className,
              }),
            ]);
          },
        },
      }),
    ];
  },
});

export { SelectionDecoration };

export default SelectionDecoration;
