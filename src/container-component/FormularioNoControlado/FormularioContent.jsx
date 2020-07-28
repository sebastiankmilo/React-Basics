import React from 'react';
import PubSub from 'pubsub-js'
export const FormularioContent = ((props) => {
  const twiiter = React.createRef()
  const name = React.createRef()
  const checkbox = React.createRef()

  const _submit = (e) => {
    e.preventDefault()
    const info = {
      twiiter: twiiter.current.value,
      name: name.current.value,
      checkbox: checkbox.current.checked
    }
    PubSub.publish("submit",info)
  }
  return (
    <form onSubmit={_submit}>
        <p>
          <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          name="userName"
          placeholder="Introduce el nombre"
          ref ={name}
        />
          
        </p>
        <p>
          <label htmlFor="twitter">Twitter:</label>
          <input
              id="twitter"
              name="userTwitter"
              placeholder="Introduce el twiiter"
              ref={ twiiter }
          />
        </p>
        <p>
          <label >
            <input  type="checkbox" ref={checkbox} />
            Acepta los terminos
          </label>          
        </p>
        <button>Enviar (con onSubmit())</button>
      </form>
  )
})