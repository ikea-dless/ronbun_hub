import axios from "axios"
import * as Axios from "axios" // 型定義
import * as humps from "humps"
import { snakeCase } from "lodash"

const patchedDecamelizeKeys = (data) => {
  return humps.decamelizeKeys(data)
}

const responseCamelize = (data) : any => humps.camelizeKeys(data)
const requestDecamelize = (config) => {
  config.data = patchedDecamelizeKeys(config.data)
  return config
}

export const create = (params?: Axios.AxiosRequestConfig | undefined): Axios.AxiosInstance => {
  const instance = axios.create(params)

  instance.interceptors.response.use( responseCamelize )
  instance.interceptors.request.use( requestDecamelize )

  return instance
}
