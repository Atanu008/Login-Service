import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Signup from './Signup.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About.js';

function App() {
  return (
    <div className="App">
      
    	<Router>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/signup" component={Signup} />
                <Route path="/about" component={About} />
               
            </Switch>
        </Router>

    </div>
  );
}

export default App;
