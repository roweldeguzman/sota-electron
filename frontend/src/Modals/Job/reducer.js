import { combineReducers } from "redux";

import { reducer as job } from "./State/job";
import { reducer as fetching } from "./State/fetching";

export default combineReducers({
  job,
  fetching
});
