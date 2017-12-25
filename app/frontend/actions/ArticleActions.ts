import { ArticleActionType } from "constants/ActionTypes/article"
import { ArticleEntity } from "constants/StateTypes/article"
import { Article } from "components/Articles";

interface ChangeArticleContent {
  type: ArticleActionType
  payload: { id: string, content: string }
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

interface ValidateArticle {
  type: ArticleActionType
  payload: ArticleEntity
}

export const validateArticle = (content: string): ValidateArticle => (
  {
    type: "VALIDATE_ARTICLE",
    payload: { content }
  }
)

interface ChangeArticleSelection {
  type: ArticleActionType
  payload: { selection: string }
}

export const changeArticleSelection = (selection: string): ChangeArticleSelection => (
  {
    type: "CHANGE_ARTICLE_SELECTION",
    payload: { selection }
  }
)

export default {
  changeArticleContent,
  postArticle,
  fetchArticle,
  fullfilledArticle,
  validateArticle,
  changeArticleSelection
}
