import React, { Component } from "react";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {  //Creo los estados internos del formulario
      inputName : "",
      inputTwitter : "@",
      inputTermns : true
     }
  }
  //* Diferentes formas de manejar los eventos en un formulario
  handleSubmitDeFormaErronea = (e) => { //No es declarativo
    e.preventDefault()
    const name = document.getElementById("name").value
    const twiiter = document.getElementById("twitter").value
    console.log({name,twiiter})
    
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const name = this.inputName2.value
    const twiiter = this.inputTwitter2.value
    console.log("con OnSubmit")
    console.log( {name,twiiter})
  }

  handleSubmitControlado = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  handleChange = (e) => {
    console.log("Elemnto cambiado")
    console.log("Su valor es: " + e.target.checked)
    this.setState({ inputTermns: e.target.checked})
  }



  render() { 
    return (
      <div>
        <form>
        <p>
          <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          name="userName"
            placeholder="Introduce el nombre"
            ref={ inputElement => this.inputName=inputElement}/>
          
        </p>
        <p>
          <label htmlFor="twitter">Twitter:</label>
        <input
            id="twitter"
            name="userTwitter"
            placeholder="Introduce el twiiter"
            ref={ inputElement => this.inputTwitter=inputElement}/>
        </p>
        <button onClick={this.handleSubmitDeFormaErronea} >Enviar</button>
      </form>
        
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="name2">Nombre:</label>
        <input
          id="name2"
          name="userName"
            placeholder="Introduce el nombre"
            ref={ inputElement => this.inputName2=inputElement}/>
          
        </p>
        <p>
          <label htmlFor="twitter2">Twitter:</label>
        <input
            id="twitter2"
            name="userTwitter"
            placeholder="Introduce el twiiter"
            ref={ inputElement => this.inputTwitter2=inputElement}/>
          </p>
          <p>
            <label >
              <input onChange={this.handleChange} type="checkbox" />
              Acepta los terminos
            </label>          
          </p>
        <button>Enviar (con onSubmit())</button>
      </form>
        
        <h1>COMPONENTE CONTROLADO</h1>
        <form onSubmit={this.handleSubmitControlado}>
        <p>
          <label htmlFor="name3">Nombre:</label>
            <input
              id="name3"
              name="userName"
              placeholder="Introduce el nombre"
              ref={inputElement => this.inputName2 = inputElement}
              value={this.state.inputName}
              onChange={e => this.setState({ inputName: e.target.value })}
            />
        </p>
        <p>
          <label htmlFor="twitter3">Twitter:</label>
            <input
              id="twitter3"
              name="userTwitter"
              placeholder="Introduce el twiiter"
              ref={inputElement => this.inputTwitter2 = inputElement}
              value={this.state.inputTwitter}
              onChange={e => this.setState({ inputTwitter: e.target.value })}
            />
          </p>
          <p>
            <label >
              <input
                onChange={this.handleChange}
                type="checkbox"
                checked={this.state.inputTermns}
              />
              Acepta los terminos
            </label>          
          </p>
        <button>Enviar (Formulario controlado)</button>
      </form>
    </div>
      
     );
  }
}
 
export default Formulario;