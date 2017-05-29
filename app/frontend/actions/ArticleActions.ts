import { ArticleActionType } from "constants/ActionTypes/article"
import { ArticleEntity } from "constants/StateTypes/article"

interface ChangeArticleContent {
  type: ArticleActionType
  payload: ArticleEntity
}

export const changeArticleContent = (content: string): ChangeArticleContent => (
  {
    type: "CHANGE_ARTICLE_CONTENT",
    payload: { content }
  }
)

export default {
  changeArticleContent
}
