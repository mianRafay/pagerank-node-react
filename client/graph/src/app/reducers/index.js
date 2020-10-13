import { combineReducers } from "redux";

import nodeReducer from "./node";
import contextReducer from "./context";
export default combineReducers({
  nodeReducer,
  contextReducer,
});
