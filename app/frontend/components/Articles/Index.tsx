import * as React from "react"
import { ArticleEntity } from "constants/StateTypes/article"

interface PropsType extends ArticleEntity {
  actions: { [key: string]: Function }
}

export const Article: React.SFC<PropsType> = (props) => {
  return (
    <div>
      <textarea
        defaultValue={ props.content }
        onChange={ (e) => props.actions.changeArticleContent(e.target.value) } />
    </div>
  )
}
