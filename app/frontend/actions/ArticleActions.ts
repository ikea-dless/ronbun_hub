import { ArticleActionType } from "constants/ActionTypes/article"
import { ArticleEntity } from "constants/StateTypes/article"

interface ChangeArticleContent {
  type: ArticleActionType
  payload: ArticleEntity
}

export const changeArticleContent = (id: string, content: string): ChangeArticleContent => (
  {
    type: "CHANGE_ARTICLE_CONTENT",
    payload: { id, content }
  }
)

interface PostArticle {
  type: ArticleActionType
  payload: ArticleEntity
}

export const postArticle = (content: string): PostArticle => (
  {
    type: "POST_ARTICLE",
    payload: { content }
  }
)

interface FetchArticle {
  type: ArticleActionType
  payload: ArticleEntity
}

export const fetchArticle = (id: string): FetchArticle => (
  {
    type: "FETCH_ARTICLE",
    payload: { id }
  }
)

interface FullfilledArticle {
  type: ArticleActionType
  payload: ArticleEntity
}

export const fullfilledArticle = (article: ArticleEntity): FullfilledArticle => (
  {
    type: "FULLFILLED_ARTICLE",
    payload: { ...article }
  }
)

export default {
  changeArticleContent,
  postArticle,
  fetchArticle,
  fullfilledArticle
}
