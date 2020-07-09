import React, { Component } from "react";

class ComponenteA extends Component {
  render() {
    return (
      <div>
        <p>Componente A</p>
        
      </div>
    );
  }
}

class ComponenteB extends Component {
  render() {
    return (
        <p>Componente B</p>
    );
  }
}

class LoginButton extends Component {
  render() {
    return (
        <button  >Iniciar session</button>
    );
  }
}

class LogoutButton extends Component {
  render() {
    return (
        <button>Cerrar Session</button>
    );
  }
}


function UseConditionalRendering (mostrarA2)
{
  if(mostrarA2){
   return <ComponenteA />
  }
  else {
   return <ComponenteB />
  }
}



export default class RenderizadoCondicional extends Component {
  //Usando class field
  state = {
    mostrarA: true,
    isUserLog: true
  };
  //Actualizo los estados
  
  componentDidMount() {
    setInterval(() => {
      this.setState({ mostrarA: !this.state.mostrarA })
    }, 1000);
  }
  //Creo un evento sintetico
  handleClick(e) {
    console.log("e")
  }

  render() {
    const {mostrarA, isUserLog} = this.state
    const elementoConCondicionalterceario = mostrarA ?
                                            <ComponenteA /> :
                                            <ComponenteB />
    return (
      <ul>
        <li>{UseConditionalRendering(mostrarA)}</li>
        <li><span> ELementos con Condicional Terneario</span> {elementoConCondicionalterceario}</li>
        <li><span> ELementos con Condicional Terneario</span> {mostrarA ? <ComponenteA /> : <ComponenteB />} </li>
        <li><span> ELementos con Condicional Terneario</span> {isUserLog ? <LoginButton /> : <LogoutButton onClick={()=>console.log("Hola2")} /> } </li>
      </ul>
    );
  }
}



