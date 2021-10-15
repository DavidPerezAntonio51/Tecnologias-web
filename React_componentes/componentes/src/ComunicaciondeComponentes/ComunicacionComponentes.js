import React from 'react';

export default class ComunicacionComponentes extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        contador: 0,
        };
        this.incrementarContador = this.incrementarContador.bind(this);
    }

    incrementarContador(e) {
        this.setState({contador: this.state.contador + 1,});
    }
    render() {
        return(
            <>
                <h2>Comunicacion entre componentes</h2>
                <h3>Estado: {this.state.contador}</h3>
                <Hijo eventoPersonalizado={this.incrementarContador} mensaje="Mensaje para el hijo 1" />
                <Hijo eventoPersonalizado={this.incrementarContador} mensaje="Mensaje para el hijo 2" />
            </>
        );
    }
}

function Hijo (props) {
    return (
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.eventoPersonalizado}>
                +
            </button>
        </>
    );
}