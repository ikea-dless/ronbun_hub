import * as React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { ArticleEntity } from "constants/StateTypes/article"
import { validateArticle } from "actions/ArticleActions"
import { NewArticle } from "components/Articles/New"

const mapStateToProps: any = (state: any) => (
  {
    content: state.article.content,
    id: state.article.id
  }
)

const mapDispatchToProps = (dispatch: any, { content: any }) => (
  {
    actions: { validateArticle: (content) => dispatch(validateArticle(content)) }
  }
)

export const NewArticleContainer = connect<any, any, any>(mapStateToProps, mapDispatchToProps)(NewArticle)
