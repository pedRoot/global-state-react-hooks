import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import rootReducer from "../reducers";

const loggerMiddlware = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    loggerMiddlware
  ))
);

export {store};