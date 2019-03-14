import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Screens/Home";

import Jobs from "./Screens/Jobs";
import JobCreator from './Screens/JobCreator';
import JobView from "./Screens/JobView";

import Clients from "./Screens/Clients";
import ClientView from "./Screens/ClientView";

export default () => (
  <Switch>

    {/* Home */}
    <Route path="/portal/" exact component={Home} />
    
    {/* Clients */}
    <Route path="/portal/clients" exact component={Clients} />
    <Route path="/portal/clients/:id/view" exact component={ClientView} />

    {/* Jobs */}
    <Route path="/portal/jobs" exact component={Jobs} />
    <Route path="/portal/jobs/new" exact component={JobCreator} />
    <Route path="/portal/jobs/:id/view" exact component={JobView} />

  </Switch>
);
