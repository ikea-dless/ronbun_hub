import * as React from "react"
import { EditorState, RichUtils } from "draft-js"
import Editor from "draft-js-plugins-editor"
import styles from "./Index.css"
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin"
import { BoldButton, ItalicButton, UnderlineButton } from "draft-js-buttons"
import { HighlightButton, customHighlightColorMap } from "./HighlightButton"

const inlineToolbarPlugins = createInlineToolbarPlugin({
  structure: [
    BoldButton,
    ItalicButton,
    UnderlineButton,
    HighlightButton
  ]
})
const { InlineToolbar } = inlineToolbarPlugins

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
      <div className={ styles.editor } onClick={ this.focus }>
        <Editor { ...this.state }
          customStyleMap={ customHighlightColorMap }
          onChange={ this.onChange }
          plugins={ [inlineToolbarPlugins] }
          ref={ (element: HTMLElement) => { this.editor = element } }
        />
        <InlineToolbar />
      </div>
    )
  }
}
