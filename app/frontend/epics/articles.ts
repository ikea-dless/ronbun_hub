import { combineEpics, ActionsObservable } from "redux-observable"
import { Observable } from "rxjs/Observable"
import * as api from "api-utils/requests"
import "rxjs/add/operator/mergeMap"
import "rxjs/add/operator/switchMap"
import "rxjs/add/operator/map"
import "rxjs/add/operator/debounceTime"
import "rxjs/add/operator/distinctUntilChanged"
import * as actions from "actions/ArticleActions"
import { articleSubscriptions } from "websocket-utils/cable/subscriptions/article"

import "rxjs/add/operator/do"
import "rxjs/add/operator/ignoreElements"

const validateArticleEpic = (action$, _store, { validateArticle } = api) => {
  return action$.ofType("VALIDATE_ARTICLE")
    .mergeMap(action$ =>
      validateArticle(action$.payload.content)
    )
    .map(response => {
      if (response.data.errors.length === 0) {
        const content: string = JSON.parse(response.config.data).document
        return actions.postArticle(content)
      } else {
        // error fulfilled
      }
    })
}

const postArticleEpic = (action$, _store, { postArticle } = api) => {
  return action$.ofType("POST_ARTICLE")
    .mergeMap(action$ =>
      postArticle(action$.payload)
    )
    .map((article) => actions.fullfilledArticle(article.data))
}

const fetchArticleEpic = (action$, _store, { fetchArticle } = api) => {
  return action$.ofType("FETCH_ARTICLE")
    .mergeMap(action$ =>
      fetchArticle(action$.payload.id)
    )
    .map((article) => actions.fullfilledArticle(article.data))
}

const updateArticleContent = (action$, _store, { patchArticle } = api) => {
  return action$.ofType("CHANGE_ARTICLE_CONTENT")
    .debounceTime(500)
    .distinctUntilChanged((p, n) => p.payload.content === n.payload.content)
    .mergeMap(action$ =>
      patchArticle(action$.payload.id, action$.payload.content)
    )
    .map((article) => actions.fullfilledArticle(article.data))
}

export const articleEpics = combineEpics(
  postArticleEpic,
  fetchArticleEpic,
  updateArticleContent,
  validateArticleEpic
)
