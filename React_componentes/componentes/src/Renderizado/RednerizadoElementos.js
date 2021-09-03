import React from "react";
import data from "../Helpers/data.json";

function ElementoLista(props) {
    return(
        <li>
            <a href={props.el.Web} target="_blank" rel="noreferrer">{props.el.Nombre}</a>   
        </li>
    ); 
}

export default class RenderizadoElementos extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            estaciones:["Primavera","Otoño", "Verano", "Invierno"],
        }
    }
    render() {
        console.log(data);
        return (
                <div>
                    <h2>Renderizado Elementos</h2>
                    <h3>Estaciones del año</h3>
                    <ol>
                        {this.state.estaciones.map((elemen) =>(
                            <li key={elemen}>{elemen}</li>
                        ))}
                    </ol>
                    <h3>
                        {data.frameworks.map((element) => (<ElementoLista key={element.id} el={element} />))}                    </h3>
                </div>
        );
    }
}