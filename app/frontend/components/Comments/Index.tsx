import * as React from "react"
import { values } from "lodash"
import { CommentEntity } from "constants/StateTypes/comments"
import { articleCommentSubscriptions } from "websocket-utils/cable/subscriptions/comment"

// TODO: 型付け
interface PropTypes {
  comments: CommentEntity[]
  // actions: { [key: number]: Function }
  actions: any
  articleSelection?: string
  articleId: string
}



export class Comments extends React.PureComponent<PropTypes> {
  componentWillMount() {
    articleCommentSubscriptions(this.props.articleId, this.props.actions)
  }

  render() {
    return (
      <div>
        { values(this.props.comments).map((comment: CommentEntity, index) => (
          <div key={ index }>
            <textarea defaultValue={ comment.body } />
          </div>
        ))}
        <NewComment
          articleSelection={ this.props.articleSelection }
          addComment={ this.props.actions.addComment }
          articleId={ this.props.articleId }
        />
      </div>
    )
  }
}

class NewComment extends React.PureComponent<{ articleSelection: string, addComment: Function, articleId: number | string }> {
  state = {
    body: ""
  }

  handleOnClick = () => {
    this.setState({ body: "" })
    this.props.addComment(this.props.articleId, this.state.body)
  }

  render() {
    const target = this.props.articleSelection
    return (
      <div>
        { target ? `${ target }についてコメントする` : null }
        <input
          type="text"
          value={ this.state.body }
          onChange={ (e) => { this.setState({ body: e.target.value }) } }
        />
        <button
          onClick={ this.handleOnClick }
        >post</button>
      </div>
    )
  }
}
