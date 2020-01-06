import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
class CustomNavbar extends React.Component {
  render() {
    return (
      <div className="login-container">
        <Container>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/signup">New User Signup</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Some Page</Nav.Link>
            </Nav.Item>

          </Nav>
        </Container>
      </div>
    );
  }
}
export default CustomNavbar;