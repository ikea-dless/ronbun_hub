export interface CommentEntity {
  body: string
  articleId: number
  target?: string
  user?: {
    username: string
  }
}

export interface CommentsEntity {
  [key: number]: CommentEntity
}
