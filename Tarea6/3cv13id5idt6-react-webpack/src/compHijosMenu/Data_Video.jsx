import React, { Component } from 'react';

class Data_Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {video: "1",
                  ancho: "720",
                  alto: "480",}
    this.handleonChange = this.handleonChange.bind(this);
    this.handleOnChangeTextFiel1 = this.handleOnChangeTextFiel1.bind(this);
    this.handleOnChangeTextFiel2 = this.handleOnChangeTextFiel2.bind(this);
  }
  handleonChange(event){
    this.setState({video: event.target.value});
  }
  handleOnChangeTextFiel1(event){
    this.setState({ancho: event.target.value});
  }
  handleOnChangeTextFiel2(event){
    this.setState({alto: event.target.value});
  }
  render() {
    return (
    <div>
    <h2>Video</h2>
    <h3>Ingresa el video</h3>
          <select name="Video" onChange={this.handleonChange} value={this.state.video}>
            <option value="1"> Video1</option>
            <option value="2">Video2</option>
            <option value="3">Video3</option>
            <option value="4">Video4</option>
            <option value="5">Video5</option>
          </select>
    
    <h3>Indica el tamaño de ancho del video.</h3>
    <h3>Utiliza tamaños estandar de Video para una mejor visualizacion</h3>
    <input type="text" placeholder="" name="Ancho" onChange={this.handleOnChangeTextFiel1}/>
    <h3>	Indica el tamaño de alto del video.</h3>
    <input type="text" placeholder="" name="Alto" onChange={this.handleOnChangeTextFiel2}/>
    </div>
    );
  }
} 
export default Data_Video;