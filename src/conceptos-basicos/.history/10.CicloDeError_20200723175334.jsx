import React, {Component} from 'react';

class BotonQueLanzaError extends Component {
  constructor(props) {
    super(props);
    this.state = { throwError:false }
  }
  render() {      
      if (this.state.throwError) {
        throw new Error("Error lanzado por el bóton")
      }
    return (
      <button onClick={()=>this.setState({throwError:true})}>
        Lanzar Error!
      </button>
    );
  }
}
 



class CicloDeError extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError:false,errorMsg:"" }
  }
  componentDidCatch(error, info) {
    console.log("ComponentDidCatch")
    this.setState({hasError:true,errorMsg:error.toString()})
    console.log({error,info})
  }
  
  render() { 
    if (this.state.hasError) {
      return (
        <div>
          <p>Error en el componente: {this.state.errorMsg}</p>
          <button onClick={()=>{this.setState({hasError:false})}}>
            Volver a la aplicación
          </button>
        </div>
      )
      
    }
    else {
      return ( 
        <div>
        <h4>Ciclo de Error : componentDidCatch</h4>
        <BotonQueLanzaError />      
        </div>
       );
    }
  }
}
 



export default CicloDeError;