import React, { Component } from 'react';
import PropTypes from "prop-types"

//Este es un componente con un primer ejemplo de un componente usando children
class PrimerEjemplo extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div style={{ border: "1px solid white", margin: 5, padding: 5 }}>
        {this.props.children}        
      </div>
     );
  }
}
 



class PropsChildren extends Component {

  static propTypes = {
    author: PropTypes.string.isRequired
  }

  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
         {this.props.author&& <p><em>Escrito por {this.props.author}</em></p>} 
        <PrimerEjemplo>{this.props.date}</PrimerEjemplo>
        <article>
          {this.props.children}
        </article>
      </section>
    );
  }
}

export default PropsChildren;