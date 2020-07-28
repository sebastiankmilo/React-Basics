import React, { Component } from 'react';
import PubSub from 'pubsub-js'


const {Consumer, Provider} = React.createContext()

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
  
  return (
      <div style={BoxStyles}>
        <input ></input>
      </div>
    )
}
//#endregion                                        

//#region  Componente bisnieto                        
class ComponenteBisNieto extends Component {
  state = {mensaje : "****"}
  //*  Publico el evento con el cual voy a acceder a los valores del elemento desde el padre
  
  
  render(){
    return (
      <div style={BoxStyles}>
        <button >Bisnieto</button>
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
      <Consumer>
        {(context) => {
          return (
            <div style={BoxStyles}>
              <button onClick={context._addClicks} >Nieto {context.click}</button>
              <ComponenteBisNieto />
            </div>
          )
        }}
      </Consumer>
    )
  }
}
//#endregion                                


//#region  Componente hijo                      
class Componentehijo extends Component {
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
  _addClicks = () => {
    this.setState({
      countA: this.state.countA + 1
    })
    
  } 

  render() {
    const {countA,countB} = this.state
    return ( 
      <Provider value={{
        click: this.state.countA,
        _addClicks: this._addClicks
      }}>
        <div>
          <Header />
          <Componentehijo />
          {this.state.countA}
        </div> 
      </Provider>
      );
  }
}
 



export default ComponentePadre;