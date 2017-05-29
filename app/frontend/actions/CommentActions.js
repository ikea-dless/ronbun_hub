export var addComment = function (id, articleId) { return ({
    type: "ADD_COMMENT",
    payload: { id: id, articleId: articleId }
}); };
export default {
    addComment: addComment
};
