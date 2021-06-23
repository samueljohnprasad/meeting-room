import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
function App() {
  return (
    <React.Fragment>
      <Nav />

      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
