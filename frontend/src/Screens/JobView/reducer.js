import { combineReducers } from "redux";

import { reducer as job } from "./State/job";
import { reducer as editMode } from "./State/editMode";

export default combineReducers({
  job,
  editMode
});
