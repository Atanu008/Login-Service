import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar.js';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { properties } from './resources/properties.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";



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
  render() {
    return (
      <div>
        <Row>
          <Col></Col>
          <Col><Card border="primary" style={{ width: '29rem' }}>

            <Card.Body>
              <Card.Title>
                <Alert variant='primary'>
                  Sign up 
   </Alert>
              </Card.Title>
              <Card.Text>
                <Form>
  <Form.Group controlId="formName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your Name" />
    
  </Form.Group>


  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicPasswordconfirm">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" />
  </Form.Group>

  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Sign me up
  </Button>
</Form>
              </Card.Text>
            </Card.Body>
          </Card></Col>
          <Col></Col>
        </Row>


      </div>

    );
  }
}

export default Signup;