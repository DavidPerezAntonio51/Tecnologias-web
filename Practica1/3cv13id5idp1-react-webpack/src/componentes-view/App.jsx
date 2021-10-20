import React from 'react';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            pregunta: ""
        };
    }
    componentDidMount(){
        fetch("http://localhost:8080/2CV13ID5IDP1/GetQuestion"+window.location.search)
        .then(response => {return response.ok? response.json():response.status})
        .then(json=>{
            console.log(json);
            this.setState({pregunta: json.name});
        });
    }
    render() {
        return (
            <div>
               <a href="index.html">Index</a>
               <h1>{this.state.pregunta}</h1>
            </div>
        );
    }
}