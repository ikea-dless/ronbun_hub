import * as React from "react"
import * as ReactDOM from "react-dom"
import * as docReady from "doc-ready"
import { Provider } from "react-redux"
import { configureStore } from "store"
import { ArticleContainer } from "containers/ArticleContainer"

docReady(() => {
  ReactDOM.render(
    <Provider store={ configureStore() } >
      <ArticleContainer { ...this.props } />
    </Provider>,
    document.getElementById("container"))
  }
)
