import logo from './logo.svg';
import './App.css';
import ComponentClass from './Componentes/Based_on_class';
import ComponenteFuncion from './Componentes/Based_on_funtion';
import Propiedades from './Propiedades/Propiedades';  
import Estado from './Estados/Estado';
import RenderizadoCondicional from './Renderizado/RenderizadoCondicional';
import RenderizadoElementos from './Renderizado/RednerizadoElementos';
import Evento from './Eventos/Evento';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tutorial de React
        </p>
        <hr />
        <section>
        <ComponentClass mensaje="Hola mundo" id="Componente1"></ComponentClass>
      </section>
      <section>
        <ComponenteFuncion mensaje="Hola amigos" id="Componente2"></ComponenteFuncion>
      </section>
      <hr />
      <section>
        <Propiedades cadena="Esta es una cadena" 
        numero={21} 
        booleano={true}
        arreglo={[1,2,3]}
        objeto={{Nombre:"David", Edad:21,} }
        //se puede usar un componente o una etiqueta html//
        elementoReact={<ComponentClass mensaje="estoy encapsulado" id="Componente3"></ComponentClass>}
        funcion={(num) =>num*num}
        ></Propiedades>
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional></RenderizadoCondicional>
        <hr />
        <RenderizadoElementos></RenderizadoElementos>
        <hr />
        <Evento></Evento>
      </section>
      </header>
    </div>
  );
}

export default App;
