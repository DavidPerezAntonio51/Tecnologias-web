import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import Home from './Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
                <div>
                    <ul>
                        <li>
                            <Link to="/2CV13ID5IDP3/">Home</Link>
                        </li>
                    </ul>
                    <hr />

                    {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                    <Switch>
                        <Route exact path="/2CV13ID5IDP3/">
                            <Home title="Crear, Ver, Modificar y Eliminar"/>
                        </Route>
                        <Route exact path="/2CV13ID5IDP3/about">
                            <About />
                        </Route>
                        <Route exact path="/2CV13ID5IDP3/dashboard">
                            <Dashboard />
                        </Route>
                    </Switch>
                </div>
        );
    }

}

// You can think of these components as "pages"
// in your app.

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}
export default App;
