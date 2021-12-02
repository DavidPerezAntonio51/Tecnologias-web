import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            alert: false,
            usuario: "",
            contraseña: "",
        }
        this.verifica = this.verifica.bind(this);
        this.handlerOnChangeUser = this.handlerOnChangeUser.bind(this);
        this.handlerOnChangePassword = this.handlerOnChangePassword.bind(this);
    }
    verifica(e) {
        e.preventDefault();
        var data = {
            usuario: this.state.usuario,
            contraseña: this.state.contraseña
        }
        const config = {
            method: 'POST',
            body: JSON.stringify(data),
            //mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log(config)
        fetch('http://localhost:8080/2CV13ID5IDP4/API/Login',config)
        .then(result=> {
            console.log(result);
        })
        .then(json=> {
            this.props.handleLogin(e,json)
        })
    }
    handlerOnChangeUser(e){
        this.setState({
            usuario: e.target.value
        })
    }
    handlerOnChangePassword(e){
        this.setState({
            contraseña: e.target.value
        })
    }
    render() { 
        return ( 
            <form>

            <div className="login-body">
            

            <div className="login-box">
            
            <h3>Inicio de sesion</h3>

            <div className="login-lab">

            <Form.Group>
                <Form.Label>Ingrese su usuario</Form.Label>
                <Form.Floating >
                    <Form.Control name="User" type="text" placeholder="Usuario" value={this.state.usuario} onChange={this.handlerOnChangeUser} />
                    <label className="login-labi" htmlFor="Nombre">Nombre de usuario</label>
                </Form.Floating>
            </Form.Group>

            </div>

            <div className="login-lab">
            <Form.Group>
                <Form.Label>Ingrese su contraseña</Form.Label>
                <Form.Floating >
                    <Form.Control name="password" type="password" placeholder="Contraseña" value={this.state.contraseña} onChange={this.handlerOnChangePassword} />
                    <label className="login-labi" htmlFor="Contraseña">contraseña</label>
                </Form.Floating>
            </Form.Group>
            </div>

            <div className="login-boton">
            <Button  size="lg" variant="outline-light" type="button" onClick={this.verifica}>Regresar </Button>
            </div>

            </div>
            </div>

        </form>
            



         );
    }
}
 
export default Login;