import { combineReducers } from "redux";

import { reducer as jobs } from "./State/jobs";
import { reducer as pagination } from "./State/pagination";
import { reducer as searchTerm } from "./State/searchTerm";
import { reducer as fetching } from "./State/fetching";
import { reducer as sorting } from "./State/sorting";
import { reducer as activeTab } from "./State/activeTab";

export default combineReducers({
  jobs,
  pagination,
  searchTerm,
  fetching,
  sorting,
  activeTab
});
