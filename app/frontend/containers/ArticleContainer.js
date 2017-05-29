var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var _this = this;
import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Article } from "components/Articles";
import ArticleActions from "actions/ArticleActions";
import { CommentContainer } from "containers/CommentContainer";
var mapStateToProps = function (state) { return ({ content: state.article.content }); };
var mapDispatchToProps = function (dispatch) { return ({
    actions: bindActionCreators(ArticleActions, dispatch)
}); };
var BaseComponent = function (props) { return (React.createElement("div", null,
    React.createElement(Article, __assign({}, _this.props)),
    React.createElement(CommentContainer, __assign({}, _this.props)))); };
export var ArticleContainer = connect(mapStateToProps, mapDispatchToProps)(BaseComponent);
