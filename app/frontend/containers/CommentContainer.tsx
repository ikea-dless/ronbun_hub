import * as React from "react"
import { CommentEntity } from "constants/StateTypes/comments"
import { bindActionCreators } from "redux"
import CommentActions from "actions/CommentActions"
import { connect } from "react-redux"
import { Comments } from "components/Comments"

interface StateToPropsType {
  comments: CommentEntity[]
  articleSelection: string
}

const mapStateToProps = (state, props): StateToPropsType => {
  return {
    comments: state.comments,
    articleSelection: props.selection
  }
}

interface DispatchToPropsType {
  actions: { [key: number]: Function }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(CommentActions, dispatch)
})

type PropTypes = DispatchToPropsType & StateToPropsType

export const CommentContainer = connect<StateToPropsType, DispatchToPropsType, PropTypes>(mapStateToProps, mapDispatchToProps)(Comments)
