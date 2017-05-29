var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var initialState = {};
// TODO: 型付け
export var commentReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case "ADD_COMMENT": {
            var newComment = {
                id: payload.id,
                body: payload.body,
                articleId: payload.articleId
            };
            return __assign({}, state, (_b = {}, _b[payload.id] = newComment, _b));
        }
        default:
            return state;
    }
    var _b;
};
