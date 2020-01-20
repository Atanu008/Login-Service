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
        <br/>
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
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });
    const { userName,
            password,
            submitted,
            loading,
            userError,
            passError } = this.state;
    
    if(!userName  || !password || userError || passError){
      console.log("Error in filling out form");
      return;
    }
    alert("Logging in");
    //this.setState({ submitted: true });

    
  };

  handleBlur(event){
    
    const {name, value} = event.target;
    let userError = this.state.userError;
    let passError = this.state.passError;

    this.setState({submitted : false});
    
    if(name === "userName" ){
      if(value.length <3)
         userError =   "username is either empty or less than 3 characters long";
      else
        userError =  "";
    }
    else if(name === "password"){
      if(value.length <3)
         passError =   "password is empty or less than 8 characters";
      else
         passError =  "";
    }
    
    this.setState(
      {
        userError,
        passError,
        [name] : value
      },
      () => {
        console.log(""); 
      }
    );
    
    
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

                  {(userError || (submitted && !userName)) && (
  <Alert variant="danger">{"Minimum 3 Character Needed"}</Alert>
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

                  {(passError || (submitted && !password)) && (
                    <Alert variant="danger">{"password is either empty or less than 8 characters long"}</Alert>
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
