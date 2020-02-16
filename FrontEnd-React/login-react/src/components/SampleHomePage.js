import React, {Component} from "react";
import Container from "react-bootstrap/Container";
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
import MyEditor from "./MyEditor.js";
import Modal from 'react-bootstrap/Modal';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalBody from 'react-bootstrap/ModalBody';



class SampleHomePage extends React.Component {
  



  render() {
    return (
      <div>
     
       <CustomNavbar />
        <center><h3></h3></center>
        <NewDocument/>
        <hr/>
        <TimeLine/> 
       
      </div>
    );
  }
}
const Mod = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState("Transitioning...");

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setTitle("Transitioning...");
  };

  const modalLoaded = () => {
    setTitle("Start writing");
  };

  return (
    <>
      
      <Button onClick={showModal} variant="info" size="lg" block >
    Add New
  </Button>
  <Container ><Row><Col>
      <Modal  show={isOpen} onHide={hideModal} onEntered={modalLoaded}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><MyEditor/></Modal.Body>
        <Modal.Footer>
          
          <Button onClick={hideModal} variant="danger" >
   Cancel
  </Button>
          <Button  variant="primary"  >
   Save
  </Button>
        </Modal.Footer>
      </Modal>
      </Col></Row></Container>
    </>
  );
};

class NewDocument extends Component {
  
  render() {
    return (
      <div>
      <Container>
      <Row>
      <Col></Col>
      <Col>
     <Mod/>
 
  </Col>
  <Col>
  </Col>
  </Row>
  </Container>
      </div>
    );
  }
}

class TimeLine extends Component {
  render() {
    return (
      <div>
      <Container>
      <Row>
      <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Article</Card.Title>
    <Card.Text>
      Title of the article
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
      <Col>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Article</Card.Title>
    <Card.Text>
      Title of the article
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  </Col>
  <Col>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Article</Card.Title>
    <Card.Text>
      Title of the article
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> 
  </Col>
  </Row>
  </Container>
      </div>
    );
  }
}



export default SampleHomePage;
