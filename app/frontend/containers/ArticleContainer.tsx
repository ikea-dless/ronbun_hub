import * as React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import ArticleActions from "actions/ArticleActions"
import { Articles } from "components/Articles"
import Grid from "material-ui/Grid"

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators(ArticleActions, dispatch)
  }
)

class BaseComponent extends React.Component<any, any> {
  componentWillMount() {
    this.props.actions.fetchArticles()
  }
  render() {
    return (
      <Grid item xs={ 6 }>
        <Articles { ...this.props } />
      </Grid>
    )
  }
}

export const ArticleContainer = connect(mapStateToProps, mapDispatchToProps)(BaseComponent)
