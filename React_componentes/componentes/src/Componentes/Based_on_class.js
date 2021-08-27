import React from 'react';

class ComponentClass extends React.Component{
    ////////////Todos los componentes basados en clase deben llevar un metodo render() por defecto////////////////////
    render() {
        return(
            <h2>Soy un componente basado en clase con el mensaje: {this.props.mensaje} y el id: {this.props.id}</h2>
        ); 
    }
}

export default ComponentClass;