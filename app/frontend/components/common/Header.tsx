import * as React from "react"
import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import Typography from "material-ui/Typography"
import Button from "material-ui/Button"

export const Header: React.SFC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography type="title" color="inherit">RonbunHub</Typography>
      <Button color="contrast" href="/client/articles" style={{ marginLeft: "1%" }}>文章一覧</Button>
      <Button color="contrast" href="/client/articles/new" style={{ marginLeft: "1%" }}>文章新規作成</Button>
    </Toolbar>
  </AppBar>
)
