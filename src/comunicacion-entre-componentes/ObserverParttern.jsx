import React, { Component } from 'react';
import PubSub from 'pubsub-js'

//Componentes que se comuncan entre ellos mediante eventos
//Puedo publicar un evento desde cualquier componente
//Me puedo subscribir a ese evento desde cualquier componente
//De esta forma me puedo traer información desde el componente que publico a el evento
//A el componente que se subscribio a el evento
//! Siempre desubcribirse a el eventos subscritos
//de instancia
const BoxStyles  = {
  margin: '0.6em',
  borderRadius: '0.3em',
  border: '1px solid #d2d2d2',
  padding: '2em 0.4em',
  fontFamily: 'monospace',
  fontSize: '17px'
}

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

//#region  Componente Taranatieno ( stateless)                        
const ComponenteTataraNieto = (props) => {
  //*  Publico el evento con el cual voy a acceder a los valores del elemento desde el padre
  const _onChange = (e) => { //publico el evento a el cual se van a subscribir
    const valor = e.target.value
    PubSub.publish("tataranieto", e.target.value)
    
  }
  return (
      <div style={BoxStyles}>
        <input onChange={_onChange}></input>
      </div>
    )
}
//#endregion                                        

//#region  Componente bisnieto                        
class ComponenteBisNieto extends Component {
  state = {mensaje : "****"}
  //*  Publico el evento con el cual voy a acceder a los valores del elemento desde el padre
  _handleClick = () => { //publico el evento a el cual se van a subscribir
    PubSub.publish("saludo","Hola desde el bisnieto")

  }
  
  render(){
    return (
      <div style={BoxStyles}>
        <button onClick={this._handleClick}></button>
        <ComponenteTataraNieto/>
      </div>
    )
  }
}
//#endregion                                         


//#region  Componente nieto                  
class ComponenteNieto extends Component {
  state = {mensaje : "****"}
  //* Evento que voy a dispara desde el padre
  
  render(){
    return (
      <div style={BoxStyles}>
        <ComponenteBisNieto />
      </div>
    )
  }
}
//#endregion                                


//#region  Componente hijo                      
class Componenhijo extends Component {
  state = {mensaje : "****"}
  //* Evento que voy a dispara desde el padre
  
  render(){
    return (
      <div style={BoxStyles}>        
        <ComponenteNieto />
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

  componentDidMount() {
    //* Me voy a subscribir a el evento que se publico desde el bisnieto
    PubSub.subscribe('saludo', (e, data) => {
      alert(data)
    })
    //* Me voy a subscribir a el evento que se publico desde el tataranieto
    PubSub.subscribe('tataranieto', (e, data) => {
      console.log(data)
    })
    
  }
  componentWillUnmount() {
    PubSub.unsubscribe("saludo")
    PubSub.unsubscribe("tataranieto ")
  }

  
  render() {
    const {countA,countB} = this.state
    return ( 
    <div>
      <Header />
      <Componenhijo />
    </div> );
  }
}
 



export default ComponentePadre;