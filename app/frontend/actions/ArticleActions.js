export var changeArticleContent = function (content) { return ({
    type: "CHANGE_ARTICLE_CONTENT",
    payload: { content: content }
}); };
export default {
    changeArticleContent: changeArticleContent
};
