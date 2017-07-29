import * as React from "react"

export class NewArticle extends React.Component<any, any> {
  constructor (props) {
    super(props)
    this.state = {
      content: this.props.content
    }
  }

  render () {
    return (
      <div>
        <textarea
          value={ this.state.content }
          onChange={ this.updateLocalContent }
        />
        <input type="submit" value="作成" onClick={ this.postLocalContent } />
      </div>
    )
  }

  private updateLocalContent = (e): void => {
    this.setState({content: e.target.value})
  }

  private postLocalContent = (): void => {
    this.props.actions.postArticle(this.state.content)
  }
}
