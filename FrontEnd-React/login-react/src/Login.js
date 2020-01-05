import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar.js'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import { properties } from './resources/properties.js'


class Login extends React.Component {
    render() {
      return (
<<<<<<< HEAD
        <div className="login-container">
         <h3>Login</h3>
=======
        <div>
        <CustomNavbar />
         <h3>{properties.loginCardHeader}</h3>
         
      <LoginCard/>
>>>>>>> d618121bb9eef3b30e0c958f6be128bb050bd165
        </div>
      );
    }
  }
  class LoginCard extends React.Component{
    render(){
      return (
        <div>
        <Row>
    <Col></Col>
    <Col><Card border="danger" style={{ width: '29rem' }}>
   
    <Card.Body>
      <Card.Title>
      <Alert  variant='primary'>
    Login to continue.
   </Alert>
   </Card.Title>
      <Card.Text>
        {properties.loginContent}
      </Card.Text>
    </Card.Body>
  </Card></Col>
    <Col></Col>
  </Row>
        
        </div>

        );
    }
  }

  export default Login;