import { create } from "api-utils/requests/base"
import * as Axios from "axios"

const api: Axios.AxiosInstance = create()

const articles = (articleId = "") => `/api/articles/${articleId}`

export const postArticle = (newArticle) => (
  api.post(articles(), newArticle)
)

export const fetchArticle = (articleId: string) => (
  api.get(articles(articleId))
)
