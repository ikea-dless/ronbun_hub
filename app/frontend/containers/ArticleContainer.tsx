import * as React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Article } from "components/Articles"
import { ArticleEntity } from "constants/StateTypes/article"
import ArticleActions from "actions/ArticleActions"
import { CommentContainer } from "containers/CommentContainer"
import { ContentState } from "draft-js"

interface StateProps {
  content: string
  articleId: string
}

const mapStateToProps = (state, ownProps): StateProps => {
  const content = state.article.content
  const articleId: string = ownProps.match.params.id
  return { content, articleId }
}

interface DispatchType {
  actions: { [key: string]: Function }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ArticleActions, dispatch)
})

type PropsType = DispatchType & ArticleEntity

const BaseComponent: React.SFC<PropsType> = (props) => (
  <div>
    <Article { ...props } />
    <CommentContainer { ...props } />
  </div>
)

export const ArticleContainer = connect<ArticleEntity, DispatchType, PropsType>(mapStateToProps, mapDispatchToProps)(BaseComponent)
