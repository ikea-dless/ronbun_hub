import * as React from "react"
import { values } from "lodash"

const ErrorMessages: React.SFC<any> = (errors) => (
  <div>
    { values(errors).map((error: any, index) => (
      <div key={ index }>
        { error.sentence }
        <ul>
          { values(error.errors).map((errorDetail: any, index) => (
            <li key={ index }>{ errorDetail.message }</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)

export const ValidateErrors: React.SFC<any> = ({ errors }) => {
  const errorsLength = values(errors).length
  if (errorsLength === 0) {
    return <noscript />
  }
  return (
    <div>
      <p>{ `${errorsLength}箇所の問題を検出しました。修正してもう一度送信してください。` }</p>
      <ErrorMessages { ...errors } />
    </div>
  )
}
