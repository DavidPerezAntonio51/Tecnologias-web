import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from './Home.jsx';
import Crear from './Create.jsx';
import Modify from './Modify.jsx';
import Play from './Play.jsx';
import List from './Lista.jsx';
import Login from './Login.jsx';

class Rutas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Logged: false,
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }
    handleLogin(event){
        this.setState({
            Logged: true,
        })
    }
    handleLogout(event){
        this.setState({
            Logged: false,
        })
    }
    render() {
        return (
            <Switch>
                <Route exact path="/2CV13ID5IDP3/login">
                    {this.state.Logged?<Redirect to="/2CV13ID5IDP3/home"/>:<Login/>}
                </Route>
                <Route exact path="/2CV13ID5IDP3/home">
                    {this.state.Logged?<Home title="Crear, Ver, Modificar y Eliminar" />:<Redirect to="/2CV13ID5IDP3/login"/>}
                </Route>
                <Route exact path="/2CV13ID5IDP3/play">
                    <List />
                </Route>
                <Route exact path="/2CV13ID5IDP3/create">
                    <Crear title="Crea una nueva pregunta llenando los datos" />
                </Route>

                <Route exact path="/2CV13ID5IDP3/modify">
                    <Modify title="Edita los datos de las preguntas" />
                </Route>


                <Route exact path="/2CV13ID5IDP3/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        );
    }
}

export default Rutas;