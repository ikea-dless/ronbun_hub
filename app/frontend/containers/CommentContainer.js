import { bindActionCreators } from "redux";
import CommentActions from "actions/CommentActions";
import { connect } from "react-redux";
import { Comments } from "components/Comments";
var mapStateToProps = function (state) { return ({ comments: state.comments }); };
var mapDispatchToProps = function (dispatch) { return ({
    actions: bindActionCreators(CommentActions, dispatch)
}); };
export var CommentContainer = connect(mapStateToProps, mapDispatchToProps)(Comments);
