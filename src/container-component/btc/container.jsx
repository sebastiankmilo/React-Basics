import React, { Component } from 'react';
import Content from "./content"

class Container extends Component {
//#region  😄  PRIMER CICLO DE VIDA : MONTAJE  
  constructor(props) { //Primero en ejecutar
    super(props);
    console.log("Constructor")
    this.state = { 
      bpi : {}
    }
    // Configurar contextos de los metodos (blind)
    
  }
  componentDidMount() { //Ultimo en ejecutar
    
    this.peticion()
    
  }

  peticion = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then( res => res.json()) 
      .then(data => {
        const { bpi } = data
        this.setState({ bpi })
        ////console.log(this.state.bpi)
      })
  }
   

  render() { // Crea los elementos en el dom se ejecuta cada vez que se actualiza un estado o propiedad
    return (
      <Content bpi={this.state.bpi} />
    )
  }
}
//#endregion INALIZAR PRIMER CICLO DE VIDA 

export default Container;