import logo from "./logo.svg";
import "./App.css";
import React from "react";
import FormComp from "./components/FormComp";
import Login from "./pages/auth/Login";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Chips from "./components/Chips";
import Home from "./components/Home";
function App() {
  return (
    <React.Fragment>
      <Nav />
      
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
     
    </React.Fragment>
  );
}

export default App;
