import * as React from "react"
import * as ReactDOM from "react-dom"
// import docReady from "doc-ready"
import { Provider } from "react-redux"
import { configureStore } from "store"
import { BrowserRouter } from "react-router-dom"
import { MainRouting } from "App"
import { ConnectionContainer } from "containers/ConnectionContainer"
import Reboot from "material-ui/Reboot"
import { Header } from "components/common/Header"

export const startApp = () => {
  ReactDOM.render(
    <Provider store={ configureStore() } >
      <BrowserRouter basename="/client">
        <div>
          <Reboot />
          <Header />
          <div style={ { padding: 40 } }>
            <ConnectionContainer>
              <MainRouting { ...this.props } />
            </ConnectionContainer>
          </div>
        </div>
      </BrowserRouter>
    </Provider>,
    document.getElementById("container")
  )
}
