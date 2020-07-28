import React, { Component } from 'react';
import { FormularioContent } from "./FormularioContent.jsx"
import PubSub from 'pubsub-js'

class FormularioContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      twiiter: "",
      checkbox: false
     }
    
  }
  
  componentDidMount() {
    //* Aca se deberian de enviar los estados a una peticion a un server
    PubSub.subscribe("submit", ((e,info) => {
      const enviar = this.state
      console.log("ENVIAR")
    }))

    //* Agrego los cambios a los input del contenido a los state del container
    PubSub.subscribe("onChange", ((e,info) => {
      this.setState({ ...info })
      console.log(this.state)
    }))
  }
  componentWillUnmount() {
    PubSub.unsubscribe("submit")
    PubSub.unsubscribe("onChange")
  }
  render() { 
    return ( 
      <FormularioContent OnSubmit={this._handleSubmit}  />
     );
  }
}
 
export default FormularioContainer;