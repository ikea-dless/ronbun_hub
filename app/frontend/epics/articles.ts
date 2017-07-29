import { combineEpics, ActionsObservable } from "redux-observable"
import { Observable } from "rxjs/Observable"
import * as api from "api-utils/requests"
import "rxjs/add/operator/mergeMap"

import "rxjs/add/operator/do"
import "rxjs/add/operator/ignoreElements"

const postArticleEpic = (action$, _store, { postArticle } = api) => {
  return action$.ofType("POST_ARTICLE")
    .mergeMap(action$ =>
      postArticle(action$.payload)
    )
    .do(action => { console.log(action) })
    .ignoreElements()
}

export const articleEpics = combineEpics(
  postArticleEpic
)
