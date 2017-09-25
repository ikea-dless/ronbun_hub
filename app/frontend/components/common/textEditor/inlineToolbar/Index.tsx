import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin"
import { HighlightButton } from "components/common/textEditor/HighlightButton"

import buttonStyles from "./Button.css"
import toolbarStyles from "./InlineToolbar.css"

export const inlineToolbarPlugins = createInlineToolbarPlugin({
  theme: { buttonStyles, toolbarStyles },
  structure: [HighlightButton]
})

export const { InlineToolbar } = inlineToolbarPlugins
