import React, { Component } from 'react';

class FetchApiExample extends Component {
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
  _renderMonedas() {
    const { bpi } = this.state
    
    if (bpi != null) {
      console.log(bpi)
      const currencies_monedas = Object.keys(bpi)
      console.log(currencies_monedas)
      return currencies_monedas.map((currencie_moneda) => (
        <div key={currencie_moneda}>
          1 BTC = {bpi[currencie_moneda].rate}
          <span> {currencie_moneda} </span>
        </div>
      ))
      
    }
    
  } 

  render() { // Crea los elementos en el dom se ejecuta cada vez que se actualiza un estado o propiedad
    console.log("render")
    return (
      <div>
        {this._renderMonedas()}
      </div>);
  }
}
//#endregion INALIZAR PRIMER CICLO DE VIDA 

export default FetchApiExample;