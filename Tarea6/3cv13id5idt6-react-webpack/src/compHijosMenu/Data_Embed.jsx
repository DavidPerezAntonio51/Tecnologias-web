import React, { Component } from 'react';

class Data_Embed extends React.Component {
  render() {
    return (
     //height, src, type, width 
    <div>
    <h2>Embed</h2>
    <h3>Ingresa la altura del recurso mostrada en píxeles.</h3>
    <input type="text" placeholder="" name="Embed1"/>
    <h3>Ingresa la dirección URL del recurso que se está incrustado.</h3>
    <input type="text" placeholder="" name="Embed1"/>
    <h3>Ingresa el tipo MIME que se va a usar para la selección del plug-in para crear una instancia..</h3>
    <input type="text" placeholder="" name="Embed1"/>
    <h3>Ingresa el ancho del recurso mostrado en píxeles CSS.</h3>
    <input type="text" placeholder="" name="Embed1"/>
    </div>


    );
  }
}


 
export default Data_Embed;
