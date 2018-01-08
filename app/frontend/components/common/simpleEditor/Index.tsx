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
    history: [],
    x: null,
    y: null,
    staticX: null,
    staticY: null
  }

  componentDidMount() {
    // this.textarea.addEventListener("selectionchange", () => {
    //   this.onSelectionChange()
    // })
    document.addEventListener("selectionchange", this.onSelectionChange)
    document.addEventListener("mousemove", (e) => {
      this.setState({ x: e.pageX })
      this.setState({ y: e.pageY })
    })
  }

  onSelectionChange = (e) => {
    const selectionString = window.getSelection().toString()
    // this.setState({ selection: selectionString })
    this.setState({ staticX: this.state.x })
    this.setState({ staticY: this.state.y })
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
        <div
          className={ styles.toolbar }
          style={ { left: this.state.staticX, top: this.state.staticY } }
        >
          hoge
        </div>
      </div>
    )
  }
}
