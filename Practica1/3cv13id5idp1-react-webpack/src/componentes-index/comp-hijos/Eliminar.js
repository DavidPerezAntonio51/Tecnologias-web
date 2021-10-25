import React, { Component } from 'react';
import swal from 'sweetalert';
//swal es una libreria externa para manejo de ventanas emergentes
class Eliminar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleOnClick(e){
        swal({
            title: "¿Deseas Eliminar la Pregunta con ID: "+this.props.pregunta+"?",
            text: "Una vez eliminada no podras recuperarla",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                let data = new FormData();
                data.append("Pregunta", this.props.pregunta.toString());
                fetch("http://localhost:8080/2CV13ID5IDP1/deleteQuestion", {method: 'POST', body: data})
                    .then(response => {
                        if(response.status==215){
                            swal("La Pregunta con ID: "+this.props.pregunta+ " fue eliminada", {
                                icon: "success",                
                            })
                            .then( el =>{
                                console.log(el);    
                            }); 
                        }else{
                            swal("Ocurrio un error en el servidor", {
                                icon: "error",                 
                            })
                            .then( el =>{
                                console.log(el);    
                            }); 
                        }
                        const fun = this.props.update;
                        fun();
                    });
            }
        });
    }
    render() { 
        return ( 
            <button className="Boton" type="button" onClick={this.handleOnClick}>Eliminar Pregunta</button>
         );
    }
}
 
export default Eliminar;