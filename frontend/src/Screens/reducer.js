import { combineReducers } from "redux";

import Clients from "./Clients/reducer";
import ClientView from "./ClientView/reducer";
import Jobs from "./Jobs/reducer";
import JobView from "./JobView/reducer";
import JobCreator from "./JobCreator/reducer";

export default combineReducers({
  Clients,
  ClientView,
  Jobs,
  JobView,
  JobCreator
});
