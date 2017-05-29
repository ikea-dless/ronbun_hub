import * as React from "react";
import { values } from "lodash";
import * as uuid from "uuid";
export var Comments = function (props) { return (React.createElement("div", null,
    values(props.comments).map(function (comment, index) { return (React.createElement("div", { key: index },
        React.createElement("textarea", { defaultValue: comment.body }))); }),
    React.createElement("button", { onClick: function () { return props.actions.addComment(uuid(), 1); } }, "\u30B3\u30E1\u30F3\u30C8\u8FFD\u52A0"))); };
