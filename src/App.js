import logo from "./logo.svg";
import "./App.css";
import React from "react";
import FormComp from "./components/FormComp";
import Login from "./pages/auth/Login";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Chips from './components/Chips'
function App() {
  
  return (
    <React.Fragment>
      <Nav/>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/form" component={FormComp} />
        </Switch>

        {/* <Chips/> */}
      </div>
    </React.Fragment>
  );
}

export default App;
