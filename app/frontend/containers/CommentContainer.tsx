import * as React from "react"
import { CommentEntity } from "constants/StateTypes/comments"
import { bindActionCreators } from "redux"
import CommentActions from "actions/CommentActions"
import { connect } from "react-redux"
import { Comments } from "components/Comments"
import { NewComment } from "components/Comments/NewComment"

interface StateToPropsType {
  comments: CommentEntity[]
  articleSelection: string
  articleId: string
}

const mapStateToProps = (state, props): StateToPropsType => {
  return {
    comments: state.comments,
    articleSelection: props.selection,
    articleId: props.articleId
  }
}

interface DispatchToPropsType {
  actions: { [key: number]: Function }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(CommentActions, dispatch)
})

type PropTypes = DispatchToPropsType & StateToPropsType

const BaseComponent: React.SFC<PropTypes> = (props) => (
  <div>
    <Comments { ...props } />
    <NewComment
      articleSelection={ props.articleSelection }
      actions={ props.actions }
      articleId={ props.articleId }
    />
  </div>
)

export const CommentContainer = connect<StateToPropsType, DispatchToPropsType, PropTypes>(mapStateToProps, mapDispatchToProps)(BaseComponent)
