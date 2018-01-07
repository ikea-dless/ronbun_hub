export interface CommentEntity {
  body?: string
  articleId: number
}

export interface CommentsEntity {
  [key: number]: CommentEntity
}
