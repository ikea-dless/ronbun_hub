import * as React from "react"
import { ArticleEntity } from "constants/StateTypes/article"
import { articleSubscriptions } from "websocket-utils/cable/subscriptions/article"

interface PropsType extends ArticleEntity {
  actions: { [key: string]: Function }
}

// TODO: 型付け
export class Article extends React.PureComponent<any, any> {
  componentWillMount() {
    this.props.actions.fetchArticle(this.props.articleId)
  }

  render () {
    return (
      <div>
        <textarea
          value={ this.props.content }
          onChange={ (e) => this.props.actions.changeArticleContent(this.props.articleId, e.target.value) }
        />
      </div>
    )
  }
}
