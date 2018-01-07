import { combineEpics, ActionsObservable } from "redux-observable"
import { Observable } from "rxjs/Observable"
import * as api from "api-utils/requests"
import * as actions from "actions/CommentActions"

import "rxjs/add/operator/do"
import "rxjs/add/operator/ignoreElements"

const postCommentEpic = (action$, _store, { postComment } = api) => {
  return action$.ofType("POST_COMMENT")
    .mergeMap((action$) => {
      return postComment(action$.payload.articleId, action$.payload.body)
    })
    .map((comment) => {
      console.log(comment.data)
      return actions.fullfilledComments(comment.data)
    })
}

export const commentEpics = combineEpics(
  postCommentEpic
)
