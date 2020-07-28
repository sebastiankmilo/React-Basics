import React, { Component } from 'react';

//Componentes que se comuncan entre ellos mediante metodos
//de instancia

//* Este componente solo es presentacional. no aporta a la explicación
const Header = () => {
  const subtitleStyles = {
    fontWeight: 'bold'
  }

  const headerStyles  = {
    margin: '0.6em',
    borderRadius: '0.3em',
    border: '1px solid #d2d2d2',
    padding: '2em 0.4em',
    fontFamily: 'monospace',
    fontSize: '17px'
  }

  return (
    <header style={headerStyles}>
      <div>
        Comunicacion entre componentes Hermanos
      </div>
      <div style={subtitleStyles}>
        Parent Component
        <span role='img' aria-label='flame' >
          🔥
        </span>
      </div>
    </header>
  )
}


//#region  Componente hermanoA                      
class ComponenteHermanoA extends Component {
  state = {mensaje : "****"}
  //* Evento que voy a dispara desde el padre
  
  render(){
    return (
      <div>        
        <button onClick={this.props.onAdd}>Hijo A ({this.props.num})</button>
      </div>
    )
  }
}
//#endregion                                 

//#region  Componente hermanoB                        
class ComponenteHermanoB extends Component {
  state = {mensaje : "****"}
  //* Evento que voy a dispara desde el padre
  
  render(){
    return (
      <div>
        
        <button onClick={this.props.onAdd}>Hijo B ({this.props.num})</button>
      </div>
    )
  }
}
//#endregion                               



class ComponentePadre extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      countA: 0,
      countB: 0
     }
    this.hijo = React.createRef()

  }

  _handleAddA = () => {
    this.setState(
      {countA :this.state.countA + 1}
    )
  }
  _handleAddB = () => {
    this.setState(
      {countB :this.state.countB + 1}
    )
  }

  
  render() {
    const {countA,countB} = this.state
    return ( 
    <div>
      <Header />
      <ComponenteHermanoA num={countA} onAdd={this._handleAddB} />
      <ComponenteHermanoB num={countB} onAdd={this._handleAddA}/>
    </div> );
  }
}
 



export default ComponentePadre;