import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/RootReducer";
const middleware = composeWithDevTools(applyMiddleware(thunk));
// const middleware = applyMiddleware(thunk);

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, {}, middleware);
}
