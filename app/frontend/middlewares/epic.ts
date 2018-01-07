import { combineEpics, createEpicMiddleware } from "redux-observable"
import { articleEpics } from "epics/articles"
import { commentEpics } from "epics/comments"

// TODO: 型エラー出るのでいったんany
const rootEpic: any = combineEpics(
  articleEpics,
  commentEpics
)

export const epicMiddleware = createEpicMiddleware(rootEpic)
