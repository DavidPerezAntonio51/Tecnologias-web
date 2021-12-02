import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import Rutas from './Router/Rutas';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
                <div>
                    <ul>
                        <li>
                            <Link to="/2CV13ID5IDP4/login">Home</Link>
                        </li>
                    </ul>
                    <hr />
                    <Rutas/>
                </div>
        );
    }

}
export default App;
