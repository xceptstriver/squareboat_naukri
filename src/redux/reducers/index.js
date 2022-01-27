import { combineReducers } from "redux";
import { jobsReducer } from "../reducers/jobs";
import { authReducer } from "../reducers/auth";
import { tokenReducer } from "./token";

const reducers = combineReducers({
  allJobs: jobsReducer,
  auth: authReducer,
  tokenReducer: tokenReducer,
});

export default reducers;
