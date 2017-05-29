
import { CommentActionType } from "constants/ActionTypes/comment"
import { CommentEntity } from "constants/StateTypes/comments"

interface AddComment {
  type: CommentActionType
  payload: CommentEntity
}

export const addComment = (id: string, articleId: number): AddComment => (
  {
    type: "ADD_COMMENT",
    payload: { id, articleId }
  }
)

export default {
  addComment
}
