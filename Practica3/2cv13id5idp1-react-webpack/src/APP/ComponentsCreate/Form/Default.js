import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

class PunterosDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Defaults: [],
            Selected: 1,
            Ruta:null,
        }
        this.handlerOnChange = this.handlerOnChange.bind(this);
    }
    componentDidMount() {
        var api;
        if(this.props.tipo == "Puntero"){
            api = "getPointers";
        }else{
            api = "getSounds";
        }
        fetch('http://localhost:8080/2CV13ID5IDP3/API/'+api).
        then(
            response => {
                return response.ok? response.json():response.status;
            }
        )
        .then(
            json=> {
                console.log(json);
                this.setState({
                    Defaults: json,
                    Selected: json[0].Ruta,
                });
            }
        );
        this.setState({
            Selected: this.state.Defaults[0],
        });
    }
    handlerOnChange(event) {
        this.setState({
            Selected: event.target.value,
        });
    }
    render() {
        return (
            <Form.Group>
                <Row>
                    <Col md={7}>
                        <FloatingLabel controlId="LabelPunteros" label={"Elige un " + this.props.tipo}>
                            <Form.Select value={this.state.Selected} onChange={this.handlerOnChange} name={this.props.tipo + "Default"}>
                                {this.state.Defaults.map(
                                    (item, index) => {
                                        return <option key={index} value={item.Ruta}>{item.Nombre}</option>
                                    }
                                )}
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md={2}>
                        <Image src={this.state.Selected} fluid/>
                    </Col>
                </Row>
            </Form.Group>
        );
    }
}
//"http:\\\\localhost:8080"+
export default PunterosDefault;