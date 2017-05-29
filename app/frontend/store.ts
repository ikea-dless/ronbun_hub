import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { articleReducer } from "reducers/articleReducer"
import { commentReducer } from "reducers/commentReducer"

const ronbunReducers = combineReducers({
  article: articleReducer,
  comments: commentReducer
})

export const configureStore = () => createStore(ronbunReducers, composeWithDevTools())
