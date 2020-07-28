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
        ( Hijo a Padre )
      </div>
      <div style={subtitleStyles}>
        Event Bubbling 
        <span role='img' aria-label='flame' >
          🔥
        </span>
      </div>
    </header>
  )
}



class ComponenteHijo extends Component {
  state = {mensaje : "****"}
  //* Evento que voy a dispara desde el padre
  dispatchAlert = (e, message = 'Alert desde el Hijo') => {
    alert(message)
    this.setState({mensaje:message})
  }
  render(){
    return (
      <div>
        <h2>{this.state.mensaje}</h2>
        <button onClick={this.dispatchAlert}>Hijo</button>
      </div>
    )
  }
}

class ComponentePadre extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.hijo = React.createRef()
  }
  

  handleClick = () => {
    //* Disparo el evento en el hijo, el elemento hijo lo obtuve a travez de ref
    this.hijo.current.dispatchAlert(null, 'Hola desde el Padre')
  }
  render() { 
    return ( 
    <div>
      <Header />
      <ComponenteHijo ref={this.hijo} />
      <button onClick={this.handleClick} >Padre</button>
    </div> );
  }
}
 



export default ComponentePadre;