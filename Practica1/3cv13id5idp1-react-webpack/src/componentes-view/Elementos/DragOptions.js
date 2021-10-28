import React, { Component } from 'react';
import TextoDrag from './Drag-TargetElements/TextoDrag.js';
import Imagen from './Drag-TargetElements/Imagen2.js';

class DragOptions extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        //nombres DrgTxt, DrgImg
        const items = [];
        const name = "Drg";
        for(let i = 0; i < this.props.cantidad; i++){ //pego imagen
            items.push(
            <Imagen index={i} busca="Ruta" key={"ImgIn"+(i+1)} name={name+"Img"+(i+1)}/>);
        }

        items.push(<br key={"br"+(2)}/>);

        for(let i = 0; i < this.props.cantidad; i++){// pego texto xd
            items.push(
            <TextoDrag index={i} busca="Drag" key={"TxtIn"+(i+1)} name={name+"Txt"+(i+1)}/>);
        }



        return ( 
            <div>
                {items}
            </div>
         );
    }
}
 
export default DragOptions;