import { combineEpics, ActionsObservable } from "redux-observable"
import { Observable } from "rxjs"
import * as api from "api-utils/requests"
import "rxjs/add/operator/mergeMap"
import "rxjs/add/operator/switchMap"
import "rxjs/add/operator/map"
import "rxjs/add/operator/debounceTime"
import "rxjs/add/operator/distinctUntilChanged"
import "rxjs/add/operator/catch"
import * as actions from "actions/ArticleActions"
import { fullfilledArticleError } from "actions/ArticleErrorActions"

import "rxjs/add/operator/do"
import "rxjs/add/operator/ignoreElements"

const validateArticleEpic = (action$, _store, { validateArticle } = api) => {
  return action$.ofType("VALIDATE_ARTICLE")
    .mergeMap(action$ =>
      validateArticle(action$.payload.content)
    )
    .map(response => {
      const errors: Array<any> = response.data.errors
      if (errors.length === 0) {
        const content: string = JSON.parse(response.config.data).document
        return actions.postArticle(content)
      } else {
        return fullfilledArticleError(errors)
      }
    })
}

const postArticleEpic = (action$, _store, { postArticle } = api) => {
  return action$.ofType("POST_ARTICLE")
    .mergeMap(action$ => {
      return postArticle(action$.payload.content)
    })
    .map((article) => {
      // payloadにlocationを追加している
      article.data.nextLocation = `/articles/${article.data.id}`
      return article
    })
    .map((article) => actions.fullfilledArticle(article.data))
}

const fetchArticleEpic = (action$, _store, { fetchArticle } = api) => {
  return action$.ofType("FETCH_ARTICLE")
    .mergeMap(action$ =>
      fetchArticle(action$.payload.id)
    )
    .map((article) => {
      return actions.fullfilledArticle(article.data)
    })
    .catch((error) => {
      return Observable.of({
        type: "FETCH_ERROR",
        payload: { status: error.response.status },
        error: true
      })
    })
}

const updateArticleContent = (action$, _store, { patchArticle } = api) => {
  return action$.ofType("CHANGE_ARTICLE_CONTENT")
    .debounceTime(500)
    .distinctUntilChanged((p, n) => p.payload.content === n.payload.content)
    .mergeMap(action$ => {
      return patchArticle(action$.payload.id, action$.payload.content)
    })
    .map((article) => {
      return actions.fullfilledArticle(article.data)
    })
}

const fetchArticlesEpic = (action$, _store, { fetchArticles } = api) => {
  return action$.ofType("FETCH_ARTICLES")
    .mergeMap((action$) => {
      return fetchArticles()
    })
    .map((response) => {
      return actions.fullfilledArticles(response.data)
    })
}

export const articleEpics = combineEpics(
  postArticleEpic,
  fetchArticleEpic,
  updateArticleContent,
  validateArticleEpic,
  fetchArticlesEpic
)
