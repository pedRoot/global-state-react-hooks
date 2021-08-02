import { combineReducers } from "redux";
import { products } from "./products.reducers";
import { user } from "./users.reducers";
import { authentication } from "./authentication.reducers";

const rootReducer = combineReducers({
  authentication,
  products,
  user
});

export default rootReducer;