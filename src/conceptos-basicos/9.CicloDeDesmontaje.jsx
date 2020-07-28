import React,{Component} from 'react';

class ComponenteADesmontar extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: 0 }
  }

  _updateStateWithWindowWidth = () => {
    this.setState({windowWidth: document.body.clientWidth})
  }

  componentDidMount() {
    this._updateStateWithWindowWidth() //*Inicializo windowWidth con el ancho del elemento cuando se ejecuta 
    window.addEventListener( //* Detecta cuando la pantalla cambia de tamaño
      'resize',this._updateStateWithWindowWidth
    )
  }

  componentWillUnmount() {
    console.log("Se va a desmontar el elemento")
    window.removeEventListener( //* Detecta cuando la pantalla cambia de tamaño
      'resize',this._updateStateWithWindowWidth
    )
  }

  render() { 
    return ( 
      <div>
        <h4>Componente a Desmontar: {this.state.windowWidth}</h4>
      </div>
     );
  }
}
 



class CicloDeMontaje extends Component {
  constructor(props) {
    super(props);
    this.state = { mostrar:true }
  }
  _montar = (elemento) => (
    <button
      key={elemento}
      OnClick= 
        {() =>                                      
          {
            console.log(this.state.mostrar)
            
          }
        } 
      >
      Mostrar  {this.state.mostrar ? <span>Si</span> : <span>No</span>}
    </button>
      
  )
  _montar_desmontar = () => {
    this.setState({ mostrar: !this.state.mostrar })
  }
    
  render() {
    const lista = [1]
    const button =
      <button
        onClick={this._montar_desmontar}
      >
        Mostrar  {this.state.mostrar ? <span>Si</span> : <span>No</span>}
      </button>
    
    return ( 
      <div>
        <h2>
          Ciclo de Desmontaje componentWillUnmount
        </h2>
        {
          ////lista.map(this._montar)
        }
        {button}
        {this.state.mostrar ? <ComponenteADesmontar /> : <h4>Componente Desmontado</h4> }
        
      </div>
     );
  }
}
 
export default CicloDeMontaje;