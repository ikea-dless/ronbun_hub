import { ArticleEntity } from "constants/StateTypes/article"
import { ArticleActionType } from "constants/ActionTypes/article"
import ArticleActions from "actions/ArticleActions"

const initialState: ArticleEntity = {
  content: "未入力"
}

export const articleReducer = (state: ArticleEntity = initialState, { type, payload }: { type: ArticleActionType, payload: any }) => {
  switch(type) {
    case "CHANGE_ARTICLE_CONTENT": {
      const newState = { content: payload.content }
      return { ...state, ...newState }
    }
    case "POST_ARTICLE": {
      const newState = { content: payload.content }
      return { ...state, ...newState }
    }
    case "FETCH_ARTICLE": {
      const newState = { content: payload.contnt }
      return { ...state, ...newState }
    }
    case "FULLFILLED_ARTICLE": {
      return { ...state, ...payload }
    }

    default: {
      return state
    }
  }
}
