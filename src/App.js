import React from "react";
import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import BasicLayout from "./layouts/BasicLayout";
import Home from "./containers/Home";

Amplify.configure(awsmobile);

function App() {
  return (
    <BasicLayout>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BasicLayout>
  );
}

export default withAuthenticator(App, { includeGreetings: false });
