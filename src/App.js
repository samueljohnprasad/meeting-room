import logo from "./logo.svg";
import "./App.css";
import React from "react";
import FormComp from "./components/FormComp";
import Login from "./pages/auth/Login";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
function App() {
  return (
    <div>
      <Nav />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/form" component={FormComp} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
