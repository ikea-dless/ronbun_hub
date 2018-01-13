import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { epicMiddleware } from "middlewares/epic"
import { articleReducer } from "reducers/articleReducer"
import { commentReducer } from "reducers/commentReducer"
import { articleErrorReducer } from "reducers/articleErrorReducer"
import { connectionReducer } from "reducers/connectionReducer"

const ronbunReducers = combineReducers({
  article: articleReducer,
  comments: commentReducer,
  articleErrors: articleErrorReducer,
  connection: connectionReducer
})

export const configureStore = () => {
  const composeEnhancer = composeWithDevTools({})

  return createStore(
    ronbunReducers,
    composeEnhancer(
      applyMiddleware(
        epicMiddleware
      )
    )
  )
}
