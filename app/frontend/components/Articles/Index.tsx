import * as React from "react"
import { ArticleEntity } from "constants/StateTypes/article"
import { articleSubscriptions } from "websocket-utils/cable/subscriptions/article"

// import { TextEditor } from "components/common/textEditor"
import { SimpleEditor } from "components/common/simpleEditor"

interface PropsType extends ArticleEntity {
  actions: { [key: string]: Function }
}

// TODO: 型付け
export class Article extends React.PureComponent<any, any> {
  componentWillMount() {
    this.props.actions.fetchArticle(this.props.articleId)
    articleSubscriptions(this.props.articleId, this.props.actions)
  }

  render () {
    return (
      <SimpleEditor
        content={ this.props.content }
        onChange={ (content) => { this.props.actions.changeArticleContent(this.props.articleId, content) } }
        onSelectionChange={ (selection: string) => { this.props.actions.changeArticleSelection(selection) } }
      />
      // <TextEditor
      //   contentState={ this.props.contentState }
      //   onChange={ (contentState) => { this.props.actions.changeArticleContent(this.props.articleId, contentState) } }
      // />
    )
  }
}
