import * as React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Article } from "components/Articles"
import { ArticleEntity } from "constants/StateTypes/article"
import ArticleActions from "actions/ArticleActions"
import { CommentContainer } from "containers/CommentContainer"

const mapStateToProps = (state): ArticleEntity => (
  { content: state.article.content }
)

interface DispatchType {
  actions: { [key: string]: Function }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ArticleActions, dispatch)
})

type PropsType = DispatchType & ArticleEntity

const BaseComponent: React.SFC<PropsType> = (props) => (
  <div>
    <Article { ...this.props } />
    <CommentContainer { ...this.props } />
  </div>
)

export const ArticleContainer = connect<ArticleEntity, DispatchType, PropsType>(mapStateToProps, mapDispatchToProps)(BaseComponent)
