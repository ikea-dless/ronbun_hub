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
import * as ReactDOM from "react-dom";
import * as docReady from "doc-ready";
import { Provider } from "react-redux";
import { configureStore } from "store";
import { ArticleContainer } from "containers/ArticleContainer";
docReady(function () {
    ReactDOM.render(React.createElement(Provider, { store: configureStore() },
        React.createElement(ArticleContainer, __assign({}, _this.props))), document.getElementById("container"));
});
