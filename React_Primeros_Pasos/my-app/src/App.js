import logo from './logo.svg';
import './App.css';

function Hola(){
  return <p>Hola mundo dentro de una funcion</p>
}

function App() {
  let nombre = "David";
  let autenticacion = true;
  let Integrantes_Equipo = ["Sabino Salvador", "Kate Michelle", "David"];
  return (
    <>
    <div>Contenedor 1 con el nombre: {nombre} interpolado desde una variable</div>
    <div align="center">
      Este es un segundo Div/contenedor alineado al centro
      <p>
        {autenticacion ? "Usuario permitido": "Usuario no permitido"}
      </p>
      {Hola()}
    </div>
    <div>
      En este Div renderizaremos una lista con un map:
      <ul>
        {Integrantes_Equipo.map(elemento=> <li>{elemento}</li>)}
      </ul>
    </div>
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
          <input type="text" placeholder="Entrada de texto"></input>
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
