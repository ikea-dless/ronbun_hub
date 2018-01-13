import * as React from "react"
import * as ReactDOM from "react-dom"
// import docReady from "doc-ready"
import { Provider } from "react-redux"
import { configureStore } from "store"
import { BrowserRouter } from "react-router-dom"
import { MainRouting } from "App"
import { ConnectionContainer } from "containers/ConnectionContainer"
import Reboot from "material-ui/Reboot"

export const startApp = () => {
  ReactDOM.render(
    <Provider store={ configureStore() } >
      <BrowserRouter basename="/client">
        <div style={ { padding: 20 } }>
          <Reboot />
          <ConnectionContainer>
            <MainRouting { ...this.props } />
          </ConnectionContainer>
        </div>
      </BrowserRouter>
    </Provider>,
    document.getElementById("container")
  )
}
