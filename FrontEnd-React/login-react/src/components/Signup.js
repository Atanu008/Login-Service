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

class Signup extends React.Component {
  render() {
    return (
      <div>
        <CustomNavbar />
        <h3>{properties.signUpCardHeader}</h3>

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "Minimum 3 Character Needed" : "";
        break;

      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "Minimum 3 Character Needed" : "";
        break;

      case "email":
        formErrors.email = value.length < 3 ? "Minimum 3 Character Needed" : "";
        break;
    }

    this.setState(
      {
        formErrors,
        [name]: value
      },
      () => {
        console.log("Hello " + this.state.email); // Synchronous Call Back function. Thsi would be called after the state change
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
    if (!(firstName && lastName && email && password && confirmPassword)) {
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
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    {formErrors.firstName.length > 0 && (
                      <Alert variant="danger">{formErrors.firstName}</Alert>
                    )}
                    {submitted && !firstName && (
                      <Alert variant="danger">Minimum 3 Character</Alert>
                    )}
                    <Form.Group controlId="formLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Last Name"
                        name="lastName"
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    {formErrors.lastName.length > 0 && (
                      <Alert variant="danger">{formErrors.lastName}</Alert>
                    )}

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    {formErrors.email.length > 0 && (
                      <Alert variant="danger">{formErrors.email}</Alert>
                    )}

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    {formErrors.password.length > 0 && (
                      <Alert variant="danger">{formErrors.password}</Alert>
                    )}

                    <Form.Group controlId="formBasicPasswordconfirm">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    {formErrors.confirmPassword.length > 0 && (
                      <Alert variant="danger">
                        {formErrors.confirmPassword}
                      </Alert>
                    )}

                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Check me out"
                        name="checkout"
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    {formErrors.checkout.length > 0 && (
                      <Alert variant="danger">{formErrors.checkout}</Alert>
                    )}

                    <Button variant="primary" type="submit">
                      Sign me up
                    </Button>
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
