import * as React from "react"
import { connect } from "react-redux"
import ConnectionActions from "actions/ConnectionAction"
import { NotFound } from "components/common/error/NotFound"

const mapStateProps = (state) => {
  return {
    status: state.connection.status
  }
}

class BaseComponent extends React.PureComponent<{ status: number }> {
  isNotFound = () => (
    this.props.status === 404
  )

  render() {
    if (this.isNotFound()) return <NotFound />
    return this.props.children
  }
}

export const ConnectionContainer = connect(mapStateProps, {})(BaseComponent)
