import * as React from "react"
import { values } from "lodash"
import { CommentEntity } from "constants/StateTypes/comments"
import * as uuid from "uuid/v4"

// TODO: 型付け
interface PropTypes {
  comments: CommentEntity[]
  // actions: { [key: number]: Function }
  actions: any
  articleSelection?: string
}

export const Comments: React.SFC<PropTypes> = (props) => (
  <div>
    { values(props.comments).map((comment: CommentEntity, index) => (
      <div key={ index }>
        <textarea defaultValue={ comment.body } />
      </div>
    ))}
    <button onClick={ () => props.actions.addComment(uuid(), 1) }>
      { props.articleSelection ? `${ props.articleSelection }について` : null }
      コメント追加
    </button>
  </div>
)
