import * as React from "react"
import { values } from "lodash"
import { CommentEntity } from "constants/StateTypes/comments"

// TODO: 型付け
interface PropTypes {
  comments: CommentEntity[]
  // actions: { [key: number]: Function }
  actions: any
  articleSelection?: string
  articleId: number
}

export const Comments: React.SFC<PropTypes> = (props) => (
  <div>
    { values(props.comments).map((comment: CommentEntity, index) => (
      <div key={ index }>
        <textarea defaultValue={ comment.body } />
      </div>
    ))}
    {/* <button onClick={ () => props.actions.addComment(uuid(), props.articleId) }>
      { props.articleSelection ? `${ props.articleSelection }について` : null }
      コメント追加
    </button> */}
    <NewComment
      articleSelection={ props.articleSelection }
      addComment={ props.actions.addComment }
      articleId={ props.articleId }
    />
  </div>
)

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
