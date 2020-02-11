import React from "react";
import { Route, Switch } from "react-router-dom";
import PhoneGrid from "./PhoneGrid";
import PhoneDetail from "./PhoneDetail";

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/" render={() => <PhoneGrid />} />
        <Route exact path="/phone/:phoneId" render={() => <PhoneDetail />} />
      </Switch>
  );
};

export default Routes;
