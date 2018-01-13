import * as React from "react"
import styles from "./NewComment.css"
import { isEmpty } from "lodash"
import TextField from "material-ui/TextField"
import Button from "material-ui/Button"
import Grid from "material-ui/Grid"
import { red } from "material-ui/colors"
import { FormControl, FormHelperText } from "material-ui/Form"

interface PropTypes {
  articleSelection: string
  actions: any
  articleId: string
}

export class NewComment extends React.PureComponent<PropTypes> {
  state = {
    body: "",
    isError: false
  }

  handleOnClick = () => {
    if (isEmpty(this.state.body)) return
    this.setState({ body: "" })
    this.props.actions.addComment(this.props.articleId, this.state.body)
  }

  handleOnChange = (e) => {
    this.setState({ body: e.target.value }, () => {
      this.setState({ isError: isEmpty(this.state.body) })
    })
  }

  render() {
    const selection = this.props.articleSelection
    return (
      <Grid container>
        <Grid item xs={ 9 }>
          <TextField
            placeholder="コメントを入力してください"
            className={ styles.editor }
            multiline={ true }
            rows={ 2 }
            InputProps={{
              disableUnderline: true
            }}
            style={{
              borderColor: this.state.isError ? red.A400 : null
            }}
            value={ this.state.body }
            onChange={ this.handleOnChange }
          />
          { this.state.isError ?
            <FormControl error>
              <FormHelperText>コメントを入力してください</FormHelperText>
            </FormControl>
            :
            <noscript />
          }
        </Grid>
        <Grid item xs={ 3 }>
          <Button
            raised
            color="primary"
            onClick={ this.handleOnClick }
          >
            コメントする
          </Button>
        </Grid>
      </Grid>
    )
  }
}
