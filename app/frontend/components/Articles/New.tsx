import * as React from "react"
import { Redirect } from "react-router-dom"
import { ValidateErrors } from "components/Articles/ValidateErrors"
import { Note } from "components/common/Note"
import Button from "material-ui/Button"

export class NewArticle extends React.Component<any, any> {
  componentWillReceiveProps(nextProps) {
    // epicでセットしたnextLocationが存在すれば、POSTは成功したということなので、isCreatedをtrueにセットする
    if (nextProps.nextLocation !== undefined) this.setState({ isCreated: true })
  }

  constructor (props) {
    super(props)
    this.state = {
      content: this.props.content,
      isCreated: false
    }
  }

  render () {
    // レコードが作成されていれば、そのレコードの詳細にリダイレクト
    if (this.state.isCreated) return <Redirect to={ this.props.nextLocation } />
    return (
      <div>
        <ValidateErrors { ...this.props } />
        <Note
          content={ this.state.content }
          onChange={ this.updateLocalContent }
        />
        <Button raised color="primary" onClick={ this.validateLocalContent }>送信する</Button>
      </div>
    )
  }

  private updateLocalContent = (e): void => {
    this.setState({content: e.target.value})
  }

  private validateLocalContent = (): void => {
    this.props.actions.validateArticle(this.state.content)
  }
}
