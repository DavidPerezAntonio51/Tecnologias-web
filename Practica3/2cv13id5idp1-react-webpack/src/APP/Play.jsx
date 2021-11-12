import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';

export default class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cordX: 0,
      cordY: 0,
      Divs:[false,false,false,false,false,false,false,false,false,false]
    }
    this.handlerMouseMove = this.handlerMouseMove.bind(this);
    this.handlerMouseMove2 = this.handlerMouseMove2.bind(this);
    this.handlerDrop = this.handlderDrop.bind(this);
    this.allowDrop = this.allowDrop.bind(this);
    this.h2ref = React.createRef();
  }
  handlerMouseMove(event) {
    console.log(event);
    event.dataTransfer.setData("Text", event.target.id);
    
    
  }
  handlerMouseMove2(event) {
    console.log(event);
    var item =event.target;
    //item.parentNode.removeChild(item);
  }
  handlderDrop(event){
    console.log(event);
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  }
  onDragEnter(event){
    console.log(event);
  }
  allowDrop(event) {
  event.preventDefault();
}
  render() {
    return(
      <div>
        
        <div onDragOver={this.allowDrop} onDrop={this.handlerDrop} onDragEnter={this.onDragEnter} className="divsab">
          
        </div>
        
        <div onDragOver={this.allowDrop} onDrop={this.handlerDrop} onDragEnter={this.onDragEnter} className="divsab">
          
        </div>
        
        <div onDragOver={this.allowDrop} onDrop={this.handlerDrop} onDragEnter={this.onDragEnter} className="divsab">
          
        </div>
        
        <div onDragOver={this.allowDrop} onDrop={this.handlerDrop} onDragEnter={this.onDragEnter} className="divsab">
          
        </div>
        
        <div onDragOver={this.allowDrop} onDrop={this.handlerDrop} onDragEnter={this.onDragEnter} className="divsab">
          
        </div>
        <h2 id="muevete" draggable onDragStart={this.handlerMouseMove} onDrag={this.handlerMouseMove2} >Elemento drag </h2>
      </div>
    );
  }
}