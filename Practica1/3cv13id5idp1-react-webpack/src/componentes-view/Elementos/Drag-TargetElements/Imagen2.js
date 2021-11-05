import React, { Component } from 'react'

class Imagen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ruta:""
         }
    }

    componentDidMount() {
        fetch("http://localhost:8080/2CV13ID5IDP1/GetQuestion"+window.location.search)
        .then(response => {
            return response.ok?response.json():response.status
        })
        .then(json => {
            console.log(json.Drag.Opciones[this.props.index].Ruta);
            this.setState({
                Ruta: json.Drag.Opciones[this.props.index].Ruta
            });
        })
        .catch(error =>{
            this.setState({
                ruta: ""
            });
        });
    }

    render() { 
        return ( 
            //<input className="Vista" type="Text" name={this.props.name} placeholder="ruta" value={this.state.Ruta} readOnly/>
            <img src={this.state.Ruta} className="VistaI"/>
            //<img src="Imagenes/Pre1/Drags/1 (1).jpg" alt=""/>
         );
    }
}
export default Imagen;