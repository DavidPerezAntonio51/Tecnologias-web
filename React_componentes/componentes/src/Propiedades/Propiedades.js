import React from 'react';

export default function propiedades(props) {
    return(
        <div>
            <h2>Propiedades</h2> 
            <ul>
                <li>{props.Nombre}</li>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "verdadero":"false"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.Nombre + " - " + props.objeto.Edad} </li>
                <li>{props.elementoReact}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
            </ul>
        </div>
    );
}

propiedades.defaultProps = {
    Nombre:"Propiedad por defecto"
}