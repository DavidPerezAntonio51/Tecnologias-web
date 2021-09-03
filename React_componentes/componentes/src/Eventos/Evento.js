import React from 'react';

export default class Evento extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador:0,
        }
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }
    render() {
        return (
            <div>
                <h2>Eventos de clases</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
                
            </div>
        );
    }
    sumar(e){
        console.log(this);
        this.setState({
            contador:this.state.contador+1,
        })
    }
    restar(e){
        console.log(this);
        this.setState({
            contador:this.state.contador-1,
        })
    }
}