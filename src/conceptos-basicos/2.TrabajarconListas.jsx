import React, { Component } from "react";
import Cars from "../data/original.json"

//* Componente template para los elementos de la lista
const Carros = (props) => {
  const { Car } = props
  
  return (
    <li key={Car.id}>
      <p><strong>Nombre: </strong>{Car.name}</p>
      <p><strong>Marca: </strong>{Car.company}</p>
    </li>
  )
}



export default class TrabajarConListas extends Component {
  
  render() {
    const { numeros } = this.props
    
    return ( 
      <div>
        {/* Inicia el componente JSX */}
        <section>
          {
            //*Paso la lista como si fuera una props
          }
          {numeros.map((numero,index) => {
            return <p key={index +"numero"}>mi key es {index} Soy el numero {numero} </p>
          }) }
        </section>
        <section>
            <ul>
              {
                //*Paso la lista como si fuera una lista obtenido a partir de una consulta o un json ya almacenado
              }
              {Cars.map((Car) => {
                return (
                  <Carros key={Car.id + "unique"} Car={Car} />
                )
                
              })}
            </ul>
        </section>
      </div>
    )
  }
}