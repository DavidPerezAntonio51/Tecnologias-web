import React from "react";

export default class CicloVida extends React.Component {
    constructor(props) {
        super(props);
        console.log(0, "El componentes se Inicializa, aun no esta en el DOM");
        this.state={
            hora: new Date().toLocaleTimeString()
        };
        this.temporizador = null;
    }
    componentDidMount(){
        console.log("El componentes ya se encuentra en el DOM");
    }
    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            });
        },1000);
    };
    iniciar = () => {
        this.tictac();
    };
    detener = () => {
        clearInterval(this.temporizador);
    };
    render() {
        console.log(4, "El componente se dibuja o redibuja por algun cambio");
        return(
            <>
            <h2>Ciclo de Vida con los componentes de clase</h2>
            <h3>{this.state.hora}</h3>
            <button onClick={this.iniciar}>Iniciar</button>
            <button onClick={this.detener}>Detener</button>
            </>
        );
    }
}