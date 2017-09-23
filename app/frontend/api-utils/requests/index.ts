import { create } from "api-utils/requests/base"
import * as Axios from "axios"
import { requestBody } from "api-utils/redpen/requestConfig"

const api: Axios.AxiosInstance = create()

const articles = (articleId = "") => `/api/articles/${articleId}`

export const postArticle = (newArticle) => (
  api.post(articles(), newArticle)
)

export const fetchArticle = (articleId: string) => (
  api.get(articles(articleId))
)

export const patchArticle = (id: string, content: string) => (
  api.patch(articles(id), { article: { content } })
)

// const redpenHost = "https://ronbun-hub-redpen.herokuapp.com"
const redpenHost = "http://localhost:8000"

export const validateArticle = (content: string) => {
  const raw = requestBody(content)
  return api.post(`${redpenHost}/rest/document/validate/json`, raw, {
    headers: { "Content-Type": "application/json" }
  })
}
