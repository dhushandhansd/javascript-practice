import { combineReducers } from "redux";
import userReducer from "./userReducer";
import pageReducer from "./pageReducer";

const rootReducer = combineReducers({
  user: userReducer,
  page: pageReducer
});

export default rootReducer;