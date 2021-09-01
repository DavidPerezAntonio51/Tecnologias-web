import React,{Component} from 'react';
/* Aqui se crean 2 componentes funcionales solo con fines de aprendizaje,
Estos componentes deben estar en un archivo separado*/

function Login() {
    return(
        <h3>Login</h3>
    );
}

function Logout() {
    return(
        <h3>Logout</h3>
    );
}

export default class RenderizadoCondicional extends Component {
    constructor(props) {
        super(props);
        this.state={
            sesion: true,
        }
    }
    render() {
        return (
            <div>
                <h2>Renderizado Condicional</h2>
                {this.state.sesion?<Logout></Logout>: <Login></Login>}
            </div>
        );
    }
}