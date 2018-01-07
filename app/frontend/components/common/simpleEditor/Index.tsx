import * as React from "react"
import styles from "./Index.css"

interface PropsType {
  content: string
  onChange: Function
  onSelectionChange: Function
}

export class SimpleEditor extends React.Component<PropsType> {
  textarea: HTMLTextAreaElement

  state = {
    history: []
  }

  componentDidMount() {
    // this.textarea.addEventListener("selectionchange", () => {
    //   this.onSelectionChange()
    // })
    document.addEventListener("selectionchange", this.onSelectionChange)
  }

  onSelectionChange = () => {
    const selectionString = window.getSelection().toString()
    // this.setState({ selection: selectionString })
    this.props.onSelectionChange(selectionString)
  }

  onChange = (newContent: string) => {
    this.props.onChange(newContent)
  }

  render() {
    return (
      <div>
        <textarea
          className={ styles.editor }
          cols={ 100 }
          rows={ 50 }
          // ref={ (elm) => { this.textarea = elm }}
          value={ this.props.content }
          onChange={ (e) => { this.onChange(e.target.value) } }
        />
      </div>
    )
  }
}
