
import { CommentActionType } from "constants/ActionTypes/comment"
import { CommentEntity, CommentsEntity } from "constants/StateTypes/comments"

interface AddComment {
  type: CommentActionType
  payload: CommentEntity
}

export const addComment = (articleId: number, body: string): AddComment => (
  {
    type: "POST_COMMENT",
    payload: { articleId, body }
  }
)

interface FullfilledComments {
  type: CommentActionType
  payload: CommentsEntity
}

export const fullfilledComments = (comments: CommentsEntity): FullfilledComments => (
  {
    type: "FULLFILLED_COMMENTS",
    payload: comments
  }
)

interface FetchComments {
  type: CommentActionType
  payload: { articleId: string }
}

export const fetchComments = (articleId: string) => (
  {
    type: "FETCH_COMMENTS",
    payload: { articleId }
  }
)

export default {
  addComment,
  fullfilledComments,
  fetchComments
}
