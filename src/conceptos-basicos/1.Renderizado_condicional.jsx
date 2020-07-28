import React, { Component } from "react";

/*
 este componente va a tener dos ejemplos, 
  1️⃣ ejemplo lo realizo de ter formas diferentes
      ▶️ Con un metodo de la clase que internamente tiene un if
      ▶️ Con un funcion en el metodo render que use un condicional con operador terneario
      ▶️ Con un operador terneario en el JSX
  2️⃣ ejemplo se realiza solo de una forma:
      ▶️ Con un operador ternario elijo mostrar si el usuario esta logueado o sin loguear
*/

//* Primer componente de prueba 1️⃣ ejemplo 
class ComponenteA extends Component {
  render() {
    return (
      <div>
        <p>Componente A</p>        
      </div>
    );
  }
}
//* Segundo componente de prueba 1️⃣ ejemplo
class ComponenteB extends Component {
  render() {
    return (
        <p>Componente B</p>
    );
  }
}
//* Componente de cuando el usuario no esta logeado para 2️⃣  ejemplo
class LoginButton extends Component {
  render() {
    return (
        <button  >Iniciar session</button>
    );
  }
}
//* Componente de cuando el usuario esta logeado 2️⃣  ejemplo
class LogoutButton extends Component {
  render() {
    return (
        <button>Cerrar Session</button>
    );
  }
}

//* 1️⃣ Ejemplo: uso un condicional para elegir si renderizo el primer elemento o el segundo
function UseConditionalRendering (mostrarA2)
{
  if(mostrarA2){
   return <ComponenteA />
  }
  else {
   return <ComponenteB />
  }
}


//* Componente en donde voy a poner los dos ejemplos
export default class RenderizadoCondicional extends Component {
  //Usando class field
  state = {
    mostrarA: true,
    isUserLog: true
  };

  //*Actualizo los estados para poder cambiar lo que voy a renderizar
  componentDidMount() {
    setInterval(() => {
      this.setState({ mostrarA: !this.state.mostrarA })
    }, 1000);
  }
  //*Creo un evento sintetico
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
        {//* Uso las condiciones ternearias para elejir que componentes mostrar
        }
        <li>{UseConditionalRendering(mostrarA)}</li>
        <li><span> ELementos con Condicional Terneario</span> {elementoConCondicionalterceario}</li>
        <li><span> ELementos con Condicional Terneario</span> {mostrarA ? <ComponenteA /> : <ComponenteB />} </li>
        <li><span> ELementos con Condicional Terneario</span> {isUserLog ? <LoginButton /> : <LogoutButton onClick={()=>console.log("Hola2")} /> } </li>
      </ul>
    );
  }
}



