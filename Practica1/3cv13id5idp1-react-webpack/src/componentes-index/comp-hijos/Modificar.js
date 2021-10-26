import React, {Component } from 'react';

class Modificar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleOnClick(e) {
        window.location.href = "modify.html?pregunta="+this.props.pregunta;
    }
    render() { 
        return ( 
            <button className="Boton" type="button" onClick={this.handleOnClick}>Modificar</button>
         );
    }
}
 
export default Modificar;