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
    PubSub.subscribe("submit", ((e,info) => {
      console.log(info)
      this.setState({ ...info })
      console.log(this.state)
    }))
  }
  componentWillUnmount() {
    PubSub.unsubscribe("submit")
  }
  render() { 
    return ( 
      <FormularioContent OnSubmit={this._handleSubmit}  />
     );
  }
}
 
export default FormularioContainer;