import React, { Component } from 'react';

class Data_Video extends React.Component {
  render() {
    return (
    <div>
    <h2>Video</h2>
    <h3>Ingresa el video</h3>   
          <select name="select video">
            <option value="value1"selectedValue> Video1</option>
            <option value="value2">Video2</option>
            <option value="value3">Video3</option>
            <option value="value4">Video4</option>
            <option value="value5">Video5</option>
          </select>

    <h3>Indica el tamaño de ancho del video.</h3>
    <input type="text" placeholder="" name="v2"/>
    <h3>	Indica el tamaño de alto del video.</h3>
    <input type="text" placeholder="" name="v3"/>
    </div>
    );
  }
}


 
export default Data_Video;
