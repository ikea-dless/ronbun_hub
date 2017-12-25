import * as React from "react"
import { EditorState, ContentState, convertToRaw, convertFromRaw } from "draft-js"
import Editor from "draft-js-plugins-editor"
import styles from "./Index.css"
import { customHighlightColorMap } from "./HighlightButton"
import { InlineToolbar, inlineToolbarPlugins } from "./inlineToolbar"
import { UndoButton, RedoButton, undoPlugin } from "./undoButton"

interface PropsType {
  contentState: any //TODO: type
  onChange: Function
}

export class TextEditor extends React.Component<PropsType, {editorState: EditorState | null}> {
  private editor: HTMLElement

  constructor(props) {
    super(props)

    if (props.contentState !== undefined) {
      const contentState = convertFromRaw(props.contentState)
      const editorState = EditorState.createWithContent(contentState)
      this.state = { editorState }
    } else {
      this.state = { editorState: null }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.contentState !== undefined) {
      const contentState = convertFromRaw(nextProps.contentState)
      const editorState = EditorState.createWithContent(contentState)
      if (this.state.editorState !== null) {
        // const editorStateWithSelection = EditorState.push(this.state.editorState, contentState, "adjust-depth")
        // console.log(editorStateWithSelection.getCurrentContent().getPlainText())
        // this.setState({ editorState })
        const newState = EditorState.create({
          currentContent: contentState,
          selection: this.state.editorState.getSelection()
        })
        console.log(newState.getCurrentContent().getPlainText())
        this.setState({ editorState: newState })
      } else {
        this.setState({ editorState })
      }
    }
  }
  
  onChange = (editorState: EditorState) => {
    this.setState({ editorState })
    const contentState = editorState.getCurrentContent()
    const rawContentState = convertToRaw(contentState)
    this.props.onChange(rawContentState)
  }

  focus = () => {
    this.editor.focus()
  }

  render() {
    if (this.state.editorState === null) return <noscript />
    return (
      <div>
        <div className={ styles.editor } onClick={ this.focus }>
          <Editor
            editorState={ this.state.editorState }
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
