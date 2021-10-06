import React from "react";

export default class MasSobreEventos extends React.Component {
    handleClick(event) {
        console.log(event);
        console.log(event.target);
        console.log(event.nativeEvent);
        console.log(event.nativeEvent.target);
    }

    handleClick2(event,mensaje) {
        console.log(event);
        console.log(event.target);
        console.log(event.nativeEvent);
        console.log(event.nativeEvent.target);
        console.log(mensaje);
    }

    

    render() {
        return (
            <div>
                <h2>
                    Mas Sobre Eventos
                </h2>
                <button onClick={this.handleClick}>Saludar</button>
                
                <button onClick={(e)=>this.handleClick2(e,"Hola")}>Saludar</button>

                <Boton myOnClick={(event)=>this.handleClick2(event,"Hola")} />
            </div>
        );
    }
}

function Boton(props){
        return(
            <button onClick={props.myOnClick}>boton hecho componente</button>
        );
    }