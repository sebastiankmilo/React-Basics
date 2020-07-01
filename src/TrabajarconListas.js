import React, { Component } from "react";
import Cars from "./data/original.json"

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
        <section>
        {numeros.map((numero,index) => {
          return <p key={index}>mi key es {index} Soy el numero {numero} </p>
        }) }
        </section>
        <section>
        {
          <ul>
            {Cars.map((Car) => {
              return (
                <Carros key={Car.id} Car={Car} />
              )
              
            })}
          </ul>
          
      }
        </section>
      </div>
    )
  }
}