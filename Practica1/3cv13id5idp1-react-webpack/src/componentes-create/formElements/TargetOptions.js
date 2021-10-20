import React, { Component } from 'react';
import Texto from './Drag-TargetElements/Texto.js';
import Imagen from './Drag-TargetElements/Imagen.js';

class TargetOptions extends Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        //nombres TrgTxt, TrgImg
        const items = [];
        const name = "Trg";
        for(let i = 0; i < this.props.cantidad; i++){
            items.push("Target Opcion "+(i+1), <Texto key={"TxtIn"+(i+1)} name={name+"Txt"+(i+1)}/>, <Imagen key={"Img"+(i+1)} name={name+"Img"+(i+1)}/>, <br key={"br"+(i+1)}/>);
        }
        return ( 
            <div>
                {items}
            </div>
         );
    }
}
 
export default TargetOptions;