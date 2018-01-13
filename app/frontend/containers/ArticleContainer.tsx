import * as React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Article } from "components/Articles"
import { ArticleEntity } from "constants/StateTypes/article"
import ArticleActions from "actions/ArticleActions"
import { CommentContainer } from "containers/CommentContainer"
import { ContentState } from "draft-js"
import { addComment } from "actions/CommentActions"
import Grid from "material-ui/Grid"

interface StateProps {
  content: string
  articleId: string
  selection: string
}

const mapStateToProps = (state, ownProps): StateProps => {
  const content = state.article.content
  const selection = state.article.selection
  const articleId: string = ownProps.match.params.id
  return { content, articleId, selection }
}

interface DispatchType {
  actions: { [key: string]: Function }
  addCommentAction: Function
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(ArticleActions, dispatch),
  addCommentAction: (body: string, target: string) => dispatch(
    addComment(ownProps.match.params.id, body, target)
  )
})

type PropsType = DispatchType & ArticleEntity

const BaseComponent: React.SFC<PropsType> = (props) => (
  <div style={ { padding: 20 } }>
    <Grid container spacing={ 24 } justify="flex-start">
      <Grid item xs={ 3 }>
        <CommentContainer { ...props } />
      </Grid>
      <Grid item xs={ 9 }>
        <Article { ...props } />
      </Grid>
    </Grid>
  </div>
)

export const ArticleContainer = connect<ArticleEntity, DispatchType, PropsType>(mapStateToProps, mapDispatchToProps)(BaseComponent)
