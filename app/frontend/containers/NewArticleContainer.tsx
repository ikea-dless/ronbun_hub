import * as React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { ArticleEntity } from "constants/StateTypes/article"
import { validateArticle } from "actions/ArticleActions"
import { NewArticle } from "components/Articles/New"

const mapStateToProps: any = (state: any) => {
  return {
    content: state.article.content,
    id: state.article.id,
    errors: state.articleErrors,
    nextLocation: state.article.nextLocation
  }
}

const mapDispatchToProps = (dispatch: any, { content: any }) => (
  {
    actions: { validateArticle: (content) => dispatch(validateArticle(content)) }
  }
)

export const NewArticleContainer = connect<any, any, any>(mapStateToProps, mapDispatchToProps)(NewArticle)
