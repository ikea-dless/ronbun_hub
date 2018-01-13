import { RawDraftContentState } from "draft-js"

export interface ArticleEntity {
  id?: string
  content?: string
  createdAt?: string
  selection?: string
}

export interface ArticleEntities {
  [key: number]: ArticleEntity
}
