import * as React from "react"
import { Switch, Route } from "react-router-dom"
import { ArticleContainer } from "containers/ArticleContainer"
import { NewArticleContainer } from "containers/NewArticleContainer"

export const MainRouting = () => (
  <div>
    <Switch>
      <Route path="/articles/new" component={ NewArticleContainer } />
      <Route path="/articles/:id(\\d+)" component={ ArticleContainer } />
    </Switch>
  </div>
)
