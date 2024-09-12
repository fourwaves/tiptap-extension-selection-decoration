'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@tiptap/core');
var prosemirrorState = require('prosemirror-state');
var prosemirrorView = require('prosemirror-view');

const SelectionDecoration = core.Extension.create({
    name: 'selectionDecoration',
    addOptions() {
        return {
            className: 'selection',
        };
    },
    addProseMirrorPlugins() {
        return [
            new prosemirrorState.Plugin({
                key: new prosemirrorState.PluginKey('selection'),
                props: {
                    decorations: (state) => {
                        const { selection } = state;
                        if (selection.empty) {
                            return null;
                        }
                        return prosemirrorView.DecorationSet.create(state.doc, [
                            prosemirrorView.Decoration.inline(selection.from, selection.to, {
                                class: this.options.className,
                            }),
                        ]);
                    },
                },
            }),
        ];
    },
});

exports.SelectionDecoration = SelectionDecoration;
exports.default = SelectionDecoration;
//# sourceMappingURL=index.cjs.js.map
