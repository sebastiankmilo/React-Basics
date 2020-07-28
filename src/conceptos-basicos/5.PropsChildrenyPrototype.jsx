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

const Article = (props) => {
  return (
    <section>
      <h2>{props.title}</h2>
      <p><em>Escrito por {props.author}</em></p>
      <a >{props.date}</a>
      <article>
        {props.children}
      </article>
    </section>
  )
}
Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.any
}

const Button = ({ borderColor, label }) => (
  <button style={{borderColor, display: 'block'}}>
    {label}
  </button>
)

Button.defaultProps = {
  borderColor:"blue"
}

Button.prototype = {
  label : PropTypes.string.isRequired
}
 



class PropsChildren extends Component {

  static propTypes = {
    author: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <section>
          <h2>{this.props.title}</h2>
          {this.props.author&& <p><em>Escrito por {this.props.author}</em></p>} 
          <PrimerEjemplo>{this.props.date}</PrimerEjemplo>
          <article>
            {this.props.children}
          </article>
        </section>
        <Article
          author="Sebastian"
          date={new Date().toLocaleDateString()}
          title="Artículo sobre los proptype en componentes funcionales puros children"
        >
          Hola hola
        </Article>
        <Button label="Comentar Articulo" />
        <Button borderColor="red" label="Comentar Articulo" />
      </div>
    );
  }
}

export default PropsChildren;