import React, { Component } from 'react';

class TextoDrag extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            texto:""
         }
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    componentDidMount() {
        fetch("http://localhost:8080/2CV13ID5IDP1/GetQuestion"+window.location.search)
        .then(response => {
            return response.ok?response.json():response.status
        })
        .then(json => {
            console.log(json.Drag.Opciones[this.props.index].Texto);
            this.setState({
                texto: json.Drag.Opciones[this.props.index].Texto
            });
        })
        .catch(error =>{
            this.setState({
                texto: ""
            });
        });
    }
    handleOnChange(event){
        this.setState({ 
            texto: event.target.value
            })
    }
    render() { 
        return ( 
            <input type="text" name={this.props.name} value={this.state.texto} onChange={this.handleOnChange} placeholder="Texto"/>
         );
    }
}
 
export default TextoDrag;