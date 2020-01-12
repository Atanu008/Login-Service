import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./Navbar.js";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { properties } from "../resources/properties.js";

class About extends React.Component {
  render() {
    return (
      <div>
        <CustomNavbar />
        In Development
      </div>
    );
  }
}

export default About;
