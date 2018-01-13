import { ArticleEntities } from "constants/StateTypes/article"

const initialState: ArticleEntities = []

// TODO: 型付け
export const articlesReducer = (state: ArticleEntities = initialState, { type, payload }: any) => {
  switch(type) {
    case "FULLFILLED_ARTICLES": {
      return { ...state, ...payload }
    }
    case "FETCH_ARTICLES": {
      // return { ...state, ...payload }
      return { ...state }
    }
    default:
      return state
  }
}
