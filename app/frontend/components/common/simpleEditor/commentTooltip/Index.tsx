import * as React from "react"
import styles from "./Index.css"
import { isEmpty } from "lodash"

interface PropTypes {
  positionX: number
  positionY: number
  target: string
  addCommentF: Function
}

export class CommentTooltip extends React.PureComponent<PropTypes> {
  state = {
    body: "",
    isUnVisible: true
  }

  componentWillReceiveProps(nextProps) {
    if (isEmpty(nextProps.target) ||nextProps.target === null) {
      this.setState({ isUnVisible: true} )
    } else {
      this.setState({ isUnVisible: false })
    }
  }

  handleOnClick = () => {
    this.setState({ body: "" })
    this.setState({ isUnVisible: true })
    this.props.addCommentF(this.state.body, this.props.target)
  }

  render() {
    if (this.state.isUnVisible) return <noscript />
    return (
      <div className={ styles.tooltip } style={ { left: this.props.positionX, top: this.props.positionY } }>
        { this.props.target }についてのコメント
        <br />
        <textarea
          onChange={ (e) => { this.setState({ body: e.target.value }) } }
          value={ this.state.body }
        />
        <button onClick={ this.handleOnClick }>post</button>
      </div>
    )
  }
}
