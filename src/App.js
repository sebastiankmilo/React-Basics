import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RenderizadoCondicional from "./Renderizado_condicional";
import Trabajarconlistas from "./TrabajarconListas"
import PropsyEstate from "./PropsyEstate"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
