import * as React from "react"
import { values } from "lodash"
import Paper from "material-ui/Paper"
import Typography from "material-ui/Typography"

const ErrorMessages: React.SFC<any> = (props) => (
  <div>
    <Paper>
      <Typography type="headline" component="h4">
        { `${ props.errorsCount }箇所の問題を検出しました。修正してもう一度送信してください。` }
      </Typography>
      <Typography type="body2">
        { values(props.errors).map((error: any, index) => (
          <div key={ index }>
            <p>{ error.sentence }</p>
            <Typography type="body1">
              <ul>
                { values(error.errors).map((errorDetail: any, index) => (
                  <li key={ index }>{ errorDetail.message }</li>
                ))}
              </ul>
            </Typography>
          </div>
        ))}
      </Typography>
    </Paper>
  </div>
)

export const ValidateErrors: React.SFC<any> = ({ errors }) => {
  const errorsCount = values(errors).length
  if (errorsCount === 0) return <noscript />
  return (
    <div>
      {/* <p>{ `${errorsLength}箇所の問題を検出しました。修正してもう一度送信してください。` }</p> */}
      <ErrorMessages errors={ errors } errorsCount={ errorsCount } />
    </div>
  )
}
