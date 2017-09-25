import createUndoPlugin from "draft-js-undo-plugin"
import buttonStyles from "./Button.css"

export const undoPlugin = createUndoPlugin({
  theme: { undo: buttonStyles.button, redo: buttonStyles.button }
})

export const { UndoButton, RedoButton } = undoPlugin
