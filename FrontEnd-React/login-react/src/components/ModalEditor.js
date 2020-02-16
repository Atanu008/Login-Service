import React,{Component} from 'react';
import Dialog from 'react-bootstrap-dialog';
import {Button} from 'react-bootstrap';


export default class ModalEditor  extends React.Component {
  constructor () {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick () {
    this.dialog.showAlert('Hello Dialog!')
  }

  render () {
    return (
      <div>
        <Button onClick={this.onClick}>Show alert</Button>
        <Dialog ref={(el) => { this.dialog = el }} />
      </div>
    )
  }
}