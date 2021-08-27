import logo from './logo.svg';
import './App.css';
import ComponentClass from './Componentes/Based_on_class';
import ComponenteFuncion from './Componentes/Based_on_funtion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <ComponentClass mensaje="Hola mundo" id="Componente1"></ComponentClass>
      </section>
      <section>
        <ComponenteFuncion mensaje="Hola amigos" id="Componente2"></ComponenteFuncion>
      </section>
    </div>
  );
}

export default App;
