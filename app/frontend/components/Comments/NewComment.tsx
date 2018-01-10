import * as React from "react"
import Input from "material-ui/Input"
import Button from "material-ui/Button"

interface PropTypes {
  articleSelection: string
  actions: any
  articleId: string
}

export class NewComment extends React.PureComponent<PropTypes> {
  state = {
    body: ""
  }

  handleOnClick = () => {
    this.setState({ body: "" })
    this.props.actions.addComment(this.props.articleId, this.state.body)
  }

  render() {
    const selection = this.props.articleSelection
    return (
      <div>
        <Input
          type="text"
          // placeholder={ selection ? `${selection}についてのコメント` : null }
          value={ this.state.body }
          onChange={ (e) => { this.setState({ body: e.target.value }) } }
        />
        <Button
          raised
          color="primary"
          onClick={ this.handleOnClick }
        >
          コメントする
        </Button>
      </div>
    )
  }
}
