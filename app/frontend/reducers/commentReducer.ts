import { CommentsEntity } from "constants/StateTypes/comments";

const initialState: CommentsEntity = {}

// TODO: 型付け
export const commentReducer = (state: CommentsEntity = initialState, { type, payload }: any) => {
  switch(type) {
    case "ADD_COMMENT": {
      const newComment = {
        id: payload.id,
        body: payload.body,
        articleId: payload.articleId
      }
      return { ...state, [payload.id]: newComment }
    }
    default:
      return state
  }
}
