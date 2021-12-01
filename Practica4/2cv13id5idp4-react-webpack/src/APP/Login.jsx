import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                    <Form.Control name="User" type="text" placeholder="Usuario" value={this.state.N} onChange={this.handlerOnChange} />
                    <label className="login-labi" htmlFor="Nombre">Nombre de usuario</label>
                </Form.Floating>
            </Form.Group>

            </div>

            <div className="login-lab">
            <Form.Group>
                <Form.Label>Ingrese su contraseña</Form.Label>
                <Form.Floating >
                    <Form.Control name="User" type="password" placeholder="Contraseña" value={this.state.N} onChange={this.handlerOnChange} />
                    <label className="login-labi" htmlFor="Contraseña">contraseña</label>
                </Form.Floating>
            </Form.Group>
            </div>

            <div className="login-boton">
            <Button  size="lg" variant="success">Regresar </Button>
            </div>

            </div>
            </div>

        </form>
            



         );
    }
}
 
export default Login;