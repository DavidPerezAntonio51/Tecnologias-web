import React,{Component} from "react";

function EstadoHijo(props){
    return(
        <div>{props.PadreaHijo}</div>
    );
}

export default class Estado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        }
        /* Deshabilitado para evitar warning
        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1,
            });
        },1000)
        */ 
    }
    render() {
        return (
            <div>
                <h2>El estado:</h2>
                <p>{this.state.contador}</p>
                <EstadoHijo PadreaHijo={this.state.contador}></EstadoHijo>
            </div>
        );
    }
}