import React, { Component } from 'react';

class CicloDeVida extends Component {
// PRIMER CICLO DE VIDA : MONTAJE  
  constructor(props) { //Primero en ejecutar
    super(props);
    console.log("Constructor componente: ciclo de vida")
    this.state = { 
      scroll : 0
     }
  }
  componentDidMount() { //Ultimo en ejecutar
    console.log("componentDidMount componente: ciclo de vida")
    document.addEventListener("scroll", () => {
      this.setState({ scroll: window.scrollY })
      console.log(this.state.scroll)
    })
    this.setState()
  }
  render() { // Crea los elementos en el dom se ejecuta cada vez que se actualiza un estado o propiedad}
    const boleano = false
    console.log("render componente: ciclo de vida")
    return (  
      <h1>El codigo se esta ejecutando en consola</h1>
      
      );
  }
}

/// FINALIZAR PRIMER CICLO DE VIDA
 
export default CicloDeVida;