import React, { Component } from 'react'
import Encabezado from './Encabezado.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ModuloJuego from './ComponentsPlay/ModuloJuego.js'

class Play extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Pregunta: "",
        }
    }
    componentDidMount() {
        const pregunta = window.location.search
        fetch('http://localhost:8080/2CV13ID5IDP4/API/getQuestion'+pregunta)
        .then(result=> {
            return result.ok? result.json():result.status
        })
        .then(JsonData => {
            this.setState({
                Pregunta: JsonData
            })
        })
    }
    render() { 
        return ( 
            <Container>
                <Encabezado title={this.state.Pregunta.Nombre}></Encabezado>
                <Row>
                    <ModuloJuego data={this.state.Pregunta}/>
                </Row>
            </Container>
         );
    }
}
 
export default Play;