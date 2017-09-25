import * as React from "react"
import { RichUtils } from "draft-js"
import { BrushIcon } from "components/common/icon/BrushIcon"

export const customHighlightColorMap = {
  highLight: {
    color: "rgba(255, 0, 0, 1.0)"
  }
}

export class HighlightButton extends React.Component<any> {
  toggleStyle = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    this.props.setEditorState(
      RichUtils.toggleInlineStyle(
        this.props.getEditorState(),
        "highLight"
      )
    )
  }

  styleIsActive = () => this.props.getEditorState && this.props.getEditorState().getCurrentInlineStyle().has("highLight")

  render() {
    const { theme } = this.props
    const className = this.styleIsActive() ? `${theme.button} ${theme.active}` : theme.button
    return (
      <div className={ theme.buttonWrapper } onMouseDown={ (evt) => { evt.preventDefault() } }>
        <button className={ className } onClick={ (evt) => { this.toggleStyle(evt) } }>
          <BrushIcon />
        </button>
      </div>
    )
  }
}
