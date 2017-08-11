import { ArticleErrorActionTypes } from "constants/ActionTypes/ArticleError"
import ArticleErrorActions from "actions/articleErrorActions"

export const articleErrorReducer = (state = {}, { type, payload }: { type: ArticleErrorActionTypes, payload: any}) => {
  switch(type) {
    case "FULLFILLED_ARTICLE_ERROR": {
      return payload
    }
    default: {
      return state
    }
  }
}
