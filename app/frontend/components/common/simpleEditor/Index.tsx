import * as React from "react"

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
          // ref={ (elm) => { this.textarea = elm }}
          value={ this.props.content }
          onChange={ (e) => { this.onChange(e.target.value) } }
        />
      </div>
    )
  }
}