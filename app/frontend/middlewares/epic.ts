import { combineEpics, createEpicMiddleware } from "redux-observable"
import { articleEpics } from "epics/articles"

// TODO: 型エラー出るのでいったんany
const rootEpic: any = combineEpics(
  articleEpics
)

export const epicMiddleware = createEpicMiddleware(rootEpic)
