import React, { Component } from 'react';

//<object type="application/pdf" data="/media/examples/In-CC0.pdf" width="250" height="200"> </object>


class Data_Object  extends React.Component {
  render() {
    return (
    <div> 
    <h2>Imagen</h2>
    <h3>Ingresa el objeto</h3>   
          <select name="select Object">
            <option value="value1"selectedValue> Imagen1</option>
            <option value="value2">Objeto2</option>
            <option value="value3">Objeto3</option>
            <option value="value4">Objeto4</option>
            <option value="value5">Objeto5</option>
          </select>

    <h3>Indica el tamaño de ancho del objeto.</h3>
    <input type="text" placeholder="" name="v2"/>
    <h3>	Indica el tamaño de alto del objeto.</h3>
    <input type="text" placeholder="" name="v3"/>
    </div>
    );
  }
}


 
export default Data_Object;
