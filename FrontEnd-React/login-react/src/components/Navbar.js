import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from '../Signup.js';

class CustomNavbar extends React.Component {
  render() {
    return (
      <Router>
      <div className="login-container">
        <Container>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/signup">New User Signup</Nav.Link>  
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>

          </Nav>
        </Container>
      </div>
       
      </Router>
    );
  }
}
export default CustomNavbar;