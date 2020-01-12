import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import About from "./components/About.js";
import { NoMatchFound } from "./components/NoMatchFound";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} />
          <Route path="/about" component={About} />
          <Route component={NoMatchFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
