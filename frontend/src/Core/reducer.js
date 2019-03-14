import { combineReducers } from "redux";

import { reducer as clients } from "./State/clients";
import { reducer as projects } from "./State/projects";

export default combineReducers({
  clients,
  projects
});
