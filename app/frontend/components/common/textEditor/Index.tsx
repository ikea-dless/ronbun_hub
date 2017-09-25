import * as React from "react"
import { EditorState } from "draft-js"
import Editor from "draft-js-plugins-editor"
import styles from "./Index.css"
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin"
import { HighlightButton, customHighlightColorMap } from "./HighlightButton"
import createUndoPlugin from "draft-js-undo-plugin"

const inlineToolbarPlugins = createInlineToolbarPlugin({
  structure: [HighlightButton]
})
const { InlineToolbar } = inlineToolbarPlugins

const undoPlugin = createUndoPlugin()
const { UndoButton, RedoButton } = undoPlugin

interface PropsType {
  content: string
}

export class TextEditor extends React.Component<PropsType> {
  private editor: HTMLElement

  state = { editorState: EditorState.createEmpty() }
  
  onChange = (editorState: EditorState) => {
    this.setState({ editorState })
  }

  focus = () => {
    this.editor.focus()
  }

  render() {
    return (
      <div>
        <div className={ styles.editor } onClick={ this.focus }>
          <Editor { ...this.state }
            customStyleMap={ customHighlightColorMap }
            onChange={ this.onChange }
            plugins={ [inlineToolbarPlugins, undoPlugin] }
            ref={ (element: HTMLElement) => { this.editor = element } }
          />
          <InlineToolbar />
        </div>
        <div className={ styles.options }>
          <UndoButton />
          <RedoButton />
        </div>
      </div>
    )
  }
}
