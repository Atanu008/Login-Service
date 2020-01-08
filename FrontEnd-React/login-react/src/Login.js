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
      <div>
        <CustomNavbar />
        <h3>{properties.loginCardHeader}</h3>

        <LoginCard />
      </div>
    );
  }
}
class LoginCard extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col></Col>
          <Col><Card border="success" style={{ width: '29rem' }}>

            <Card.Body>
              <Card.Title>
                <Alert variant='primary'>
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