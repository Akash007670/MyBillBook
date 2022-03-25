import React from "react";
import "./App.css";
import Items from "./Components/Items";
import Dashboard from "./Components/Dashboard";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/items" component={Items} />
      </Switch>
    </div>
  );
};

export default App;
