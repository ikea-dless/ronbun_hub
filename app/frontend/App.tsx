import * as React from "react"
import { Switch, Route } from "react-router-dom"
import { ArticleContainer } from "containers/ArticleContainer"
import { NewArticleContainer } from "containers/NewArticleContainer"
import Reboot from 'material-ui/Reboot'

export const MainRouting = () => (
  <div>
    <Reboot />
    <Switch>
      <Route path="/articles/new" component={ NewArticleContainer } />
      <Route path="/articles/:id(\\d+)" component={ ArticleContainer } />
    </Switch>
  </div>
)
