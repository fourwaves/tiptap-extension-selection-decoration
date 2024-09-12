import { Extension } from '@tiptap/core';
import { Plugin, PluginKey } from 'prosemirror-state';
import { DecorationSet, Decoration } from 'prosemirror-view';

const SelectionDecoration = Extension.create({
    name: 'selectionDecoration',
    addOptions() {
        return {
            className: 'selection',
        };
    },
    addProseMirrorPlugins() {
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

export { SelectionDecoration, SelectionDecoration as default };
//# sourceMappingURL=index.js.map
