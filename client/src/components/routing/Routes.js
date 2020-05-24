import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../auth/Login";
import Dashboard from "../dashboard/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
