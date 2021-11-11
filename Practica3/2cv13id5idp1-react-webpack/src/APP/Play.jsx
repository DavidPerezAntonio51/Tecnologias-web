import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';

export default class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cordX: 0,
      cordY: 0,
    }
    this.handlerMouseMove = this.handlerMouseMove.bind(this);
    this.handlerMouseMove2 = this.handlerMouseMove2.bind(this);
    this.handlderDrop = this.handlderDrop.bind(this);
  }
  handlerMouseMove(event) {
    console.log(event);
  }
  handlerMouseMove2(event) {
    console.log(event);
  }
  handlderDrop(event){
    console.log(event);
  }
  onDragEnter(event){
    console.log(event);
  }
  render() {
    return(
      <div>
        
        <div onDrop={this.handlerDrop} onDragEnter={this.onDragEnter} className="divsab">
          <h2 draggable onDragStart={this.handlerMouseMove} onDragEnd={this.handlerMouseMove2} >Elemento drag </h2>
        </div>
        
        <div onDrop={this.handlerDrop} onDragEnter={this.onDragEnter}>
          <h2 draggable onDragStart={this.handlerMouseMove} onDragEnd={this.handlerMouseMove2}>Elemento drag</h2>
        </div>
        
        <div onDrop={this.handlerDrop} onDragEnter={this.onDragEnter}>
          <h2 draggable onDragStart={this.handlerMouseMove} onDragEnd={this.handlerMouseMove2}>Elemento drag</h2>
        </div>
        
        <div onDrop={this.handlerDrop} onDragEnter={this.onDragEnter}>
          <h2 draggable onDragStart={this.handlerMouseMove} onDragEnd={this.handlerMouseMove2}>Elemento drag</h2>
        </div>
        
        <div onDrop={this.handlerDrop} onDragEnter={this.onDragEnter}>
          <h2 draggable onDragStart={this.handlerMouseMove} onDragEnd={this.handlerMouseMove2}>Elemento drag</h2>
        </div>
      </div>
    );
  }
}