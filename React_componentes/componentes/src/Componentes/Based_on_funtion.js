import React from 'react';

function ComponenteFuncion(props) {
    return(
        <h2>Soy un componente funcional con el mensaje: {props.mensaje} y el id: {props.id}</h2>
    );
}

export default ComponenteFuncion;