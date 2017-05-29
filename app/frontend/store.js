import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { articleReducer } from "reducers/articleReducer";
import { commentReducer } from "reducers/commentReducer";
var ronbunReducers = combineReducers({
    article: articleReducer,
    comments: commentReducer
});
export var configureStore = function () { return createStore(ronbunReducers, composeWithDevTools()); };
