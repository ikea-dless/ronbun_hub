import { ArticleErrorActionTypes } from "constants/ActionTypes/ArticleError"

interface FullfilledArticleError {
  type: ArticleErrorActionTypes
  payload: any
}

export const fullfilledArticleError = (errors): FullfilledArticleError => (
  {
    type: "FULLFILLED_ARTICLE_ERROR",
    payload: errors
  }
)

export default {
  fullfilledArticleError
}
