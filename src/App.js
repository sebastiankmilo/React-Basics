import React  from "react";
import logo from "./logo.svg";
import "./App.css";
import RenderizadoCondicional from "./Renderizado_condicional";
import Trabajarconlistas from "./TrabajarconListas"
import PropsyEstate from "./PropsyEstate"
import Eventos from "./Eventos"
import Formulario from "./Formularios"
import PropsChildren from "./PropsChildrenyPrototype"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PropsChildren
          author="Sebastian"
          date={new Date().toLocaleDateString()}
          title="Articulo sobre la Propiedad Children">
          <p>Esto es un articulo que estoy pasando sus elementos como hijos de un componente en react :D</p>
          <strong>Y Mantiene las etiquetas y componentes que hayas añaido dentro del componente</strong>
        </PropsChildren>
        <img src={logo} className="App-logo" alt="logo" />
        <Formulario />
        <Eventos />
        <Trabajarconlistas numeros={[1,2,3,45]} />
        <RenderizadoCondicional />
        <PropsyEstate />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
