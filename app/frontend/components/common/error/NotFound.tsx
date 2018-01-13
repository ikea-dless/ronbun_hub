import * as React from "react"
import Typography from "material-ui/Typography"

export const NotFound: React.SFC = () => (
  <div>
    <Typography type="headline" component="h3">
      404 NotFound
    </Typography>
    <Typography component="p">
      お探しのページは見つかりませんでした
    </Typography>
  </div>
)
