import { create } from "api-utils/requests/base"
import * as Axios from "axios"

const api: Axios.AxiosInstance = create()

export const postArticle = (newArticle) => (
  api.post("/api/articles", newArticle)
)
