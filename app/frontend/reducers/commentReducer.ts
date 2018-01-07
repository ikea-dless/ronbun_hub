import { CommentsEntity } from "constants/StateTypes/comments";

const initialState: CommentsEntity = {}

// TODO: 型付け
export const commentReducer = (state: CommentsEntity = initialState, { type, payload }: any) => {
  switch(type) {
    case "POST_COMMENT": {
      // const newComment = {
      //   id: payload.id,
      //   body: payload.body,
      //   articleId: payload.articleId
      // }
      // return { ...state, [payload.id]: newComment }
      return state
    }
    case "FULLFILLED_COMMENTS": {
      return { ...state, ...payload }
    }
    default:
      return state
  }
}
