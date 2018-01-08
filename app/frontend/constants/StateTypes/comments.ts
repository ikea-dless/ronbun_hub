export interface CommentEntity {
  body: string
  articleId: number
  target?: string
}

export interface CommentsEntity {
  [key: number]: CommentEntity
}
