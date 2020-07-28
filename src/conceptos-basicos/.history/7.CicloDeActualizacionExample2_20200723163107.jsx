import React, { Component } from 'react'
import PropTypes from 'prop-types'
 /**
  * Este componente me permite cambiar de imagen al presionar diferentes botones
  * en este ejemplo se usaron los metodos modernos de react
  * Y si es un componente con Derived State
  */



const ANIMAL_IMAGES = {
  panda: 'https://goo.gl/oNbtoq',
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES)

//#region  Componente que renderiza la magen

class AnimalImage extends Component {
  state = { src: ANIMAL_IMAGES[this.props.animal], new: true }
  


  static getDerivedStateFromProps(nextProps, prevState) {

    console.log("1. getDerivedStateFromProps")
    return {
      src: ANIMAL_IMAGES[nextProps.animal]  //* Estoy modificando el state del componente a partir de los nuevos props sin necesidad de setState, porque esto me permite
    }                                       //* Realizar este metodo estatico ✔️
  }
  
  shouldComponentUpdate(nextProps) {

    return nextProps.animal != this.props.animal
    
  }
  
  
//* Este método se ejecuta  después del render se usa para agregar una transición a la imagen para el efecto de cambio
  componentDidUpdate(prevProps, prevState) {

    console.log ("3.componentDidUpdate ")
    
    this.image.animate([
      {
        filter: 'blur(2px)'
      },
      {
        filter: 'blur(0px)'
      }
    ], {
      duration: 1500,
      easing: 'ease'
    })
   //// console.log('from img element', { alt: img.alt })
  }

  render () {
    console.log('-> Primer render')
    return (
      <div>
        <p>Selected {this.props.animal}</p>
        <img
          alt={this.props.animal}
          src={this.state.src}
          width='250px'
          height="200px"
          ref = {(image => this.image = image)}
        />
      </div>
    )
  }
}

AnimalImage.propTypes = {
  animal: PropTypes.oneOf(ANIMALS)
}

//#endregion Fin del componente que renderiza la imagen

class EjemploDeCicloDeActualizacion extends Component {
  state = { animal: 'panda' }

  _renderAnimalButton = (animal) => {
    return (
      <button
        
        key={animal}
        onClick={() => this.setState({ animal })}>
        {animal}
      </button>
    )
  }

  render() {
    console.log("El animal que se paso como props es", this.state.animal)
    return (
      <div>
        <h4>Ciclo de Actualización, Ejemplo de: ComponentDidUpdate</h4>
        {ANIMALS.map(this._renderAnimalButton)}
        <AnimalImage animal={this.state.animal} />
      </div>
    )
  }
}

export default EjemploDeCicloDeActualizacion