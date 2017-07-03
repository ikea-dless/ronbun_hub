import * as React from "react"

export const NewArticle: React.SFC<any> = (props) => (
  <div>
    <textarea defaultValue={ props.content } onChange={ (e: any) => { props.actions.postArticle(e.target.value) } } />
  </div>
)
