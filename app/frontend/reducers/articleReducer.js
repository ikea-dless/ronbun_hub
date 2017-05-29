var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var initialState = {
    content: "未入力"
};
export var articleReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case "CHANGE_ARTICLE_CONTENT": {
            var newState = { content: payload.content };
            return __assign({}, state, newState);
        }
        default: {
            return state;
        }
    }
};
