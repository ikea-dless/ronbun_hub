import * as React from "react"
import styles from "./Index.css"
import { CommentTooltip } from "components/common/simpleEditor/commentTooltip"
import TextField from "material-ui/TextField"

interface PropsType {
  content: string
  onChange: Function
  onSelectionChange: Function
  addComment: Function
}

export class SimpleEditor extends React.Component<PropsType> {
  textarea: HTMLTextAreaElement

  state = {
    history: [],
    positionX: null,
    positionY: null,
    selectionString: null
  }

  // onSelectionChange = (e) => {
  //   const selectionString = window.getSelection().toString()
  //   this.setState({ selectionString })
  //   this.props.onSelectionChange(selectionString)
  // }

  setMousePosition = (e) => {
    this.setState({ positionX: e.pageX })
    this.setState({ positionY: e.pageY })
    // mouseUpイベントだと直前のselectionも取得してしまうので暫定処理
    const selectionString = window.getSelection().toString()
    if (this.state.selectionString === selectionString) {
      this.setState({ selectionString: null })
    } else {
      this.setState({ selectionString })
    }
  }

  onChange = (newContent: string) => {
    this.props.onChange(newContent)
  }

  render() {
    return (
      <div>
        <TextField
          className={ styles.editor }
          // cols={ 100 }
          rows={ 45 }
          rowsMax={ 45 }
          multiline={ true }
          InputProps={{
            disableUnderline: true
          }}
          // ref={ (elm) => { this.textarea = elm }}
          value={ this.props.content }
          onChange={ (e) => { this.onChange(e.target.value) } }
          onMouseUp={ this.setMousePosition }
        />
        <CommentTooltip
          positionY={ this.state.positionY }
          positionX={ this.state.positionX }
          target={ this.state.selectionString }
          addCommentF={ this.props.addComment }
        />
      </div>
    )
  }
}
