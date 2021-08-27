import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div>Aqui esta un nuevo contenedor</div>
    <div align="center">Este es un segundo Div/contenedor alineado al centro</div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="Contenedor3">Aqui hay un tercer contenedor simple</div>
        <div id="Contenedor4"> <label inputMode="text"> aqui un label</label> </div>
        <a 
          id="referencia" 
          href="https://www.youtube.com/watch?v=EH4L-EYt63Y&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=3&ab_channel=jonmircha"
          target="_blank"
          rel="noreferrer"
        > Aqui el link del tutorial usado</a>
        <p>
          Aqui esta la plantilla pre cargada en el comando create-react-app
          <p><code> Esta es la ruta de edicion: src/App.js</code> solo hay que editar
          </p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link de la libreria
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
