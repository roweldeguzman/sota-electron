import { combineReducers } from "redux";

import { reducer as client } from "./State/client";
import { reducer as showClientModal } from "./State/showClientModal";
import { reducer as showProjectModal } from "./State/showProjectModal";
import { reducer as selectedProjectId } from "./State/selectedProjectId";

export default combineReducers({
  client,
  showClientModal,
  showProjectModal,
  selectedProjectId,
});
