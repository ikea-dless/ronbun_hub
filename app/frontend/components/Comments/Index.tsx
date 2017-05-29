import * as React from "react"
import { values } from "lodash"
import { CommentEntity } from "constants/StateTypes/comments"
import * as uuid from "uuid"

// TODO: 型付け
interface PropTypes {
  comments: CommentEntity[]
  // actions: { [key: number]: Function }
  actions: any
}

export const Comments: React.SFC<PropTypes> = (props) => (
  <div>
    { values(props.comments).map((comment: CommentEntity, index) => (
      <div key={ index }>
        <textarea defaultValue={ comment.body } />
      </div>
    ))}
    <button onClick={ () => props.actions.addComment(uuid(), 1) }>コメント追加</button>
  </div>
)
