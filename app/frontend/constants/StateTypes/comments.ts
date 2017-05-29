export interface CommentEntity {
  id: number | string
  body?: string
  articleId: number
}

export interface CommentsEntity {
  [key: number]: CommentEntity
}
