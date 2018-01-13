import * as React from "react"
import { Switch, Route } from "react-router-dom"
import { EditArticleContainer } from "containers/EditArticleContainer"
import { NewArticleContainer } from "containers/NewArticleContainer"
import { ArticleContainer } from "containers/ArticleContainer"

export const MainRouting = () => {
  return <Switch>
    <Route path="/articles" component={ ArticleRouting } />
  </Switch>
}

const ArticleRouting = ({ match }) => (
  <Switch>
    <Route path={ `${ match.path }/new` } component={ NewArticleContainer } />
    <Route path={ `${ match.path }/:id(\\d+)` } component={ EditArticleContainer } />
    <Route path={ `${ match.path }` } component={ ArticleContainer } />
  </Switch>
)
