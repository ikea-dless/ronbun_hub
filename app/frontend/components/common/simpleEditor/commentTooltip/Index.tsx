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
    body: ""
  }

  render() {
    if (isEmpty(this.props.target) || this.props.target === null) return <noscript />
    return (
      <div className={ styles.tooltip } style={ { left: this.props.positionX, top: this.props.positionY } }>
        { this.props.target }についてのコメント
        <br />
        <textarea
          onChange={ (e) => { this.setState({ body: e.target.value }) } }
          value={ this.state.body }
        />
        <button onClick={ () => { this.props.addCommentF(this.state.body, this.props.target) } }>post</button>
      </div>
    )
  }
}
