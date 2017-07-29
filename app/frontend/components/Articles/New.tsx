import * as React from "react"
import { Redirect } from "react-router-dom"

export class NewArticle extends React.Component<any, any> {
  componentWillReceiveProps(nextProps) {
    if (nextProps.id != undefined) {
      // idがpropsとして取得できれば、DBにレコードが保存されているとみなす
      this.setState({ isCreated: true })
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      content: this.props.content,
      isCreated: false
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

        { /* レコードが作成されていれば、そのレコードの詳細にリダイレクト */}
        { this.state.isCreated ? <Redirect to={ `/articles/${this.props.id}` } /> : null }
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
