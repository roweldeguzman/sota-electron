import { combineReducers } from "redux";

import { reducer as clients } from "./State/clients";
import { reducer as pagination } from "./State/pagination";
import { reducer as searchTerm } from "./State/searchTerm";
import { reducer as fetching } from "./State/fetching";
import { reducer as showClientModal } from "./State/showClientModal";

export default combineReducers({
  clients,
  pagination,
  searchTerm,
  fetching,
  showClientModal
});
