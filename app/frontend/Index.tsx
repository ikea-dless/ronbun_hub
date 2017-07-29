import * as React from "react"
import * as ReactDOM from "react-dom"
import docReady from "doc-ready"
import { Provider } from "react-redux"
import { configureStore } from "store"
import { BrowserRouter } from "react-router-dom"
import { MainRouting } from "App"


docReady(() => {
  ReactDOM.render(
    <Provider store={ configureStore() } >
      <BrowserRouter basename="/client">
        <MainRouting { ...this.props } />
      </BrowserRouter>
    </Provider>,
    document.getElementById("container"))
  }
)
