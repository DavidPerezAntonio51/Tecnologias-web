import React, { Component } from 'react'

class Leer extends Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(e){
        window.location.href = "view.html?pregunta="+this.props.pregunta;
    }

    render() { 
        return <button class="Boton" type="button" onClick={this.handleOnClick}>Leer</button>;
    }
}
 
export default Leer;