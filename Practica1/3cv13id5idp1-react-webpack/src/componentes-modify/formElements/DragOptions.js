import React, { Component } from 'react';
import TextoDrag from './Drag-TargetElements/TextoDrag.js';
import Imagen from './Drag-TargetElements/Imagen.js';

class DragOptions extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        //nombres DrgTxt, DrgImg
        const items = [];
        const name = "Drg";
        for(let i = 0; i < this.props.cantidad; i++){
            items.push("Drag Opcion "+(i+1), <TextoDrag index={i} busca="Drag" key={"TxtIn"+(i+1)} name={name+"Txt"+(i+1)}/>, <Imagen key={"Img"+(i+1)} name={name+"Img"+(i+1)}/>, <br key={"br"+(i+1)}/>);
        }
        return ( 
            <div>
                {items}
            </div>
         );
    }
}
 
export default DragOptions;