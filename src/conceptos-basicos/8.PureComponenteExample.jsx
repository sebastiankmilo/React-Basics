import React, { Component,PureComponent } from 'react'
import PropTypes from 'prop-types'
 /**
  * Este componente me permite cambiar de imagen al presionar diferentes botones
  * en este ejemplo se usaron los metodos modernos de react pero no se usaron Derived State
  * y se uso un componente puro, lo que me permite que se renderize solo cuando se cambian a diferentes los estados y props
  */


//#region  Lista con las url de las imagenes
const ANIMAL_IMAGES = {
  panda: 'https://goo.gl/oNbtoq',
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd'
}
//#endregion Finaliza la lista con las url de las imagenes

//* Lista con el nombre de los animales
const ANIMALS = Object.keys(ANIMAL_IMAGES)


//#region  Componente que renderiza la magen
class AnimalImage extends PureComponent {
  state = { src: ANIMAL_IMAGES[this.props.animal], new: true }
  
  
  
  
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
          src={this.props.src}
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

//#region  Componente que muestra el ejemplo del ciclo de actualización
class EjemploDeCicloDeActualizacion extends Component {
  state = { animal: 'panda' }
//#region  Elemento que renderiza el boton que me permite cambiar de imagen y la imagen
  _renderAnimalButton = (animal) => {
    return (
      <button        
        key={animal}
        onClick={() => this.setState({ animal })}>
        {animal}
      </button>
    )
  }
//#endregion  finaliza el Elemento que renderiza el boton que me permite cambiar de imagen y la imagen
  render() {
    console.log("El animal que se paso como props es", this.state.animal)
    return (
      <div>
        <h4>Ciclo de Actualización, Ejemplo de: ComponentDidUpdate</h4>
        {ANIMALS.map(this._renderAnimalButton)}
        <AnimalImage animal={this.state.animal} src= {ANIMAL_IMAGES[this.state.animal]} />
      </div>
    )
  }
}
//#endregion  Componente que muestra el ejemplo del ciclo de actualización

export default EjemploDeCicloDeActualizacion