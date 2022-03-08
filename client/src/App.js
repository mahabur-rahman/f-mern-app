import React from "react";
// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// global style
import "./global.scss";

// react router
import { Switch, Route } from "react-router-dom";
// components
import {
  Toolbar,
  Home,
  About,
  Contact,
  Login,
  Register,
  ErrorPage,
} from "./components";

const App = () => {
  return (
    <>
      <Toolbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact component={ErrorPage} />
      </Switch>
    </>
  );
};

export default App;
