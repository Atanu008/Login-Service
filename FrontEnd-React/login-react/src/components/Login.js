import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./Navbar.js";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { properties } from "../resources/properties.js";
import { Form } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <div>
        <CustomNavbar />
        <h3>{properties.loginCardHeader}</h3>
        <LoginCard />
      </div>
    );
  }
}

class LoginCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      submitted: false,
      loading: false,
      formErrors: {
        userName: "",
        password: ""
      }
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const{userName, password} = this.state;

    this.setState({submitted : true})

    if( !(userName && password)){
      return ;
    }
  };

  handleChange = (event) => {

    
  }

  render() {

const{userName, password, submitted} = this.state;
    return (
      <div>
        <Row>
          <Col></Col>
          <Col>
            <Card border="success" style={{ width: "29rem" }}>
              <Card.Body>
                <Card.Title>
                  <Alert variant="primary">Login to continue.</Alert>
                </Card.Title>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="userName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter User Name"
                      name="userName"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  
                    {submitted && !userName && (
                      <Alert variant="danger">User Name is required</Alert>
                    )}
                  
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your First Name"
                      name="password"
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                    {submitted && !password && (
                      <Alert variant="danger">Password is required</Alert>
                    )}

                  <Button variant="primary" type="submit">
                    Log In
                  </Button>
                </Form>
                <Card.Text>{properties.loginContent}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default Login;
