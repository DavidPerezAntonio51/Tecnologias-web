import React, { Component } from 'react';
import TextoTarget from './Drag-TargetElements/TextoTarget.js';
import Imagen from './Drag-TargetElements/Imagen2.js';

class TargetOptions extends Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        //nombres TrgTxt, TrgImg
        const items = [];
        const name = "Trg";
        for(let i = 0; i < this.props.cantidad; i++){
            items.push(
            <Imagen index={i} busca="Ruta" key={"ImgIn"+(i+1)} name={name+"Img"+(i+1)}/>);
        }
        items.push(<br key={"br"+(2)}/>);
        for(let i = 0; i < this.props.cantidad; i++){
            items.push(
            <TextoTarget index={i} key={"TxtIn"+(i+1)} name={name+"Txt"+(i+1)}/>);
        }

        return ( 
            <div>
                {items}
            </div>
         );
    }
}
 
export default TargetOptions;
//index={i} busca="Im" key={"ImgIn"+(i+1)} name={name+"Img"+(i+1)}/>,