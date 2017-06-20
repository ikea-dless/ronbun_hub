import * as React from "react"
import { Switch, Route } from "react-router-dom"
import { ArticleContainer } from "containers/ArticleContainer"

export const MainRouting = () => (
  <Switch>
    <Route exact path="/articles/:id(\\d+)" component={ ArticleContainer } />
  </Switch>
)
