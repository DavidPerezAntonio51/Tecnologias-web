import React from 'react';

export default class ComunicacionComponentes extends React.Component {
    render() {
        return(
            <>
                <h2>Comunicacion entre componentes</h2>
                <Hijo mensaje="Mensaje para el hijo 1" />
                <Hijo mensaje="Mensaje para el hijo 2" />
            </>
        );
    }
}

function Hijo (props) {
    return (
        <h2>{props.mensaje}</h2>
    );
}