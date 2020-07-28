import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
  * Este componente me permite cambiar de imagen al presionar diferentes botones
  * en este ejemplo se usaron los metodos obsoletos de react
  */
//? Poner este componentes con los metodos willReceiveProps, willUpdate y shouldComponentUpdate,

const ANIMAL_IMAGES = {
  panda: 'https://goo.gl/oNbtoq',
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES)

//#region  Componente que renderiza la magen

class AnimalImage extends Component {
  state = { src: ANIMAL_IMAGES[this.props.animal], new: true }
  


 /*//* No funciona porque no se deja volver a rendering y actualizar el state en el render
   //* Tenga en cuenta que ud cambia el state luego de que el componente se renderizo después de recibir los props
  shouldComponentUpdate(nextProps) {
    const actualizar = nextProps.animal != this.props.animal
    actualizar && console.log("Me voy a renderizar")
    return actualizar
  }
  */
  
  
//* Este método se ejecuta  después del render y se usar para revisar si el animal nuevo es diferente a el anterior
//* En caso de ser verdadero  actualiza el estado para mostrar la nueva imagen
  componentDidUpdate(prevProps, prevState) {
    const actualizar = prevProps.animal != this.props.animal

    console.log ("Me  debo actualizar: ",actualizar)
    if (actualizar) {
      this.setState({ src: ANIMAL_IMAGES[this.props.animal] ,new:false })
    }
    ////console.log('4. componentDidUpdate')
    ////const img = document.querySelector('img')
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
    this.state.create == "panda" ? console.log('-> Primer render') : console.log('-> Primer render')
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
        disabled={animal === this.state.animal}
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