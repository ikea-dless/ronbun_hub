import * as React from "react";
export var Article = function (props) {
    return (React.createElement("div", null,
        React.createElement("textarea", { defaultValue: props.content, onChange: function (e) { return props.actions.changeArticleContent(e.target.value); } })));
};
