import React  from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import Dashboard from "./pages/Dashboard";

import Login from "./pages/Login";

import Cadastro from "./pages/Cadastro";

function CustomRoute({ isPrivate, ...rest }) {
  const authenticated = localStorage.getItem("auth");

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute path="/login" component={Login} />
      <CustomRoute isPrivate path="/dashboard" component={Dashboard} />
      <CustomRoute isPrivate path="/cadastro" component={Cadastro} />
    </Switch>
  );
}
