import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./Navbar.js";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { properties } from "../resources/properties.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './validations.js';

class Signup extends React.Component {
  render() {
    return (
      <div>
        <CustomNavbar />
        <center><h3>{properties.signUpCardHeader}</h3></center>

        <SignupCard />
      </div>
    );
  }
}
class SignupCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkout: "",
      submitted: false,
      loading: false,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        checkout: ""
      }
    };

    this.handleBlur = this.handleBlur.bind(this);
  }

  
  

  validateEmail = (email) =>{
    var regEmail= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(regEmail.test(email))
      return true;
    return false;
  }

  handleBlur(event) {
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    this.setState({ submitted: false });

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "Minimum 3 Character Needed" : this.validateName(value)? "" :"Do not use space, special characters or numbers";
        break;

      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "Minimum 3 Character Needed" : this.validateName(value)? "" :"Do not use space, special characters or numbers";
        break;

      case "email":
        formErrors.email = this.validateEmail(value) ? "" : "Email not in correct format";
        break;
      
      case "password":
        formErrors.password = value.length <8 ? "Minimum 8 Character Needed" : "";
        break;
      case "confirmPassword":
        formErrors.confirmPassword = (value === this.state.password ) ? "" : "Password and confirm password does not match";
        break;
    }

    this.setState(
      {
        formErrors,
        [name]: value
      },
      () => {
        console.log("Hello "); // Synchronous Call Back function. Thsi would be called after the state change
      }
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      checkout,
      formErrors
    } = this.state;

    // Return If nothing is filled
    if (!(firstName && lastName && email && password && confirmPassword) || (formErrors.firstName || formErrors.lastName
      || formErrors.email || formErrors.password || formErrors.confirmPassword) ) {
        console.log("There is an issue with the filled form. Exiting");
        alert('Unable to submit, please check for errors');
        return;
    }

    //this.setState({});
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      checkout,
      submitted,
      loading,
      formErrors
    } = this.state;

    return (
      <div>
        <Row>
          <Col></Col>
          <Col>
            <Card border="primary" style={{ width: "29rem" }}>
              <Card.Body>
                <Card.Title>
                  <Alert variant="primary">Sign up</Alert>
                </Card.Title>
                <Card.Text>
                  <Form name="form" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your First Name"
                        name="firstName"
                        onBlur={this.handleBlur}
                      />
                    </Form.Group>

                    {formErrors.firstName && (
                      <Alert variant="danger">{formErrors.firstName}</Alert>
                    )}
                    
                    <Form.Group controlId="formLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Last Name"
                        name="lastName"
                        onBlur={this.handleBlur}
                      />
                    </Form.Group>

                    {formErrors.lastName && (
                      <Alert variant="danger">{formErrors.lastName}</Alert>
                    )}

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onBlur={this.handleBlur}
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    {formErrors.email && (
                      <Alert variant="danger">{formErrors.email}</Alert>
                    )}

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onBlur={this.handleBlur}
                      />
                    </Form.Group>

                    {formErrors.password && (
                      <Alert variant="danger">{formErrors.password}</Alert>
                    )}

                    <Form.Group controlId="formBasicPasswordconfirm">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onBlur={this.handleBlur}
                      />
                    </Form.Group>

                    {formErrors.confirmPassword && (
                      <Alert variant="danger">
                        {formErrors.confirmPassword}
                      </Alert>
                    )}

                    

                    
                    <center><Button variant="primary" type="submit">
                      Sign me up
                    </Button></center>
                  
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default Signup;
