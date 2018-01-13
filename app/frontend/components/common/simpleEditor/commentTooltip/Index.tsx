import * as React from "react"
import styles from "./Index.css"
import { isEmpty } from "lodash"
import TextField from "material-ui/TextField"
import Card, { CardActions, CardContent } from "material-ui/Card"
import Typography from "material-ui/Typography"
import Button from "material-ui/Button"
import { red } from "material-ui/colors"
import { FormControl, FormHelperText } from "material-ui/Form"

interface PropTypes {
  positionX: number
  positionY: number
  target: string
  addCommentF: Function
}

export class CommentTooltip extends React.PureComponent<PropTypes> {
  state = {
    body: "",
    isUnVisible: true,
    isError: false
  }

  componentWillReceiveProps(nextProps) {
    if (isEmpty(nextProps.target) || nextProps.target === null) {
      this.setState({ isUnVisible: true} )
    } else {
      this.setState({ isUnVisible: false })
    }
  }

  handleOnClick = () => {
    if (isEmpty(this.state.body)) return
    this.setState({ body: "" })
    this.setState({ isUnVisible: true })
    this.props.addCommentF(this.state.body, this.props.target)
  }

  handleOnChange = (e) => {
    this.setState({ body: e.target.value }, () => {
      this.setState({ isError: isEmpty(this.state.body) })
    })
  }

  render() {
    if (this.state.isUnVisible) return <noscript />
    return (
      <div className={ styles.tooltip } style={ { left: this.props.positionX, top: this.props.positionY } }>
        <Card>
          <CardContent>
            <Typography type="subheading">「{ this.props.target }」についてのコメント</Typography>
            <TextField
              className={ styles.editor }
              placeholder="コメントを入力してください"
              multiline={ true }
              required={ true }
              InputProps={{
                disableUnderline: true
              }}
              style={{
                borderColor: this.state.isError ? red.A400 : null
              }}
              rows={ 2 }
              onChange={ this.handleOnChange }
              value={ this.state.body }
            />
            { this.state.isError ?
              <FormControl error>
                <FormHelperText>コメントを入力してください</FormHelperText>
              </FormControl>
              :
              <noscript />
            }
          </CardContent>
          <CardActions>
            <Button raised color="primary" onClick={ this.handleOnClick }>コメントする</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}
