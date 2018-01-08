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
    this.props.actions.fetchComments(this.props.articleId)
    articleCommentSubscriptions(this.props.articleId, this.props.actions)
  }

  render() {
    return (
      <div>
        { values(this.props.comments).map((comment: CommentEntity, index) => (
          <div key={ index }>
            <p>{ comment.body }</p>
          </div>
        ))}
      </div>
    )
  }
}
