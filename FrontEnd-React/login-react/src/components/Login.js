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
        <center><h3>{properties.loginCardHeader}</h3></center>
        <br/>
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
      userError: "",
      passError: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { userName, password,userError,passError } = this.state;
    if(!userName || !password || userError || passError){
      console.log("Error in filling out form");
      return;
    }
    this.setState({ submitted: true });

    
  };

  handleChange = event => {console.log(event.target.id);};
  handleBlur = event =>{
    let source = event.target.id;
    let val = event.target.value;
    if(source === "userName" ){
      if(val.length <3)
        this.setState({ userError:  "username is either empty or less than 3 characters long"});
      else
        this.setState({ userError:  ""});
    }
    else if(source === "password"){
      if(val.length <8)
        this.setState({ passError:  "password is either empty or less than 8 characters long"});
      else
        this.setState({ passError:  ""});
    }
    
    
  };

  render() {
    const { 
      userName,
      password,
      submitted,
      loading,
      userError,
      passError
     } = this.state;
    return (
      <div>
        <Row>
          <Col></Col>
          <Col>
            <Card border="success" style={{ width: "29rem" }}>
              <Card.Body>
                
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="userName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter User Name"
                      name="userName"
                      onBlur={this.handleBlur}
                    />
                  </Form.Group>

                  {userError  && (
                    <Alert variant="danger">{this.state.userError}</Alert>
                  )}

                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your First Name"
                      name="password"
                      onBlur={this.handleBlur}
                    />
                  </Form.Group>

                  {passError && (
                    <Alert variant="danger">{this.state.passError}</Alert>
                  )}

                  <center>
                    
                    <Button variant="primary" type="submit" >
                      Log In
                    </Button>
                  
                  </center>
                </Form>
                
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
