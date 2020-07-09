import React, { Component } from "react";



class BotonConUnEventoSoportado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX: 0,
      mouseY: 0
    };
    this.handleMouseMove = this.handleMouseMove.bind(this) //Enlazo el contexto de handleMouseMove a el componente
  }

  handleMouseMove(e) {
    const { clientX, clientY } = e
    this.setState({mouseX:clientX,mouseY:clientY})//revisar que el contexto de this.setstate sea el correcto
  }
  handleMouseMove2 =  (e) => {
    const { clientX, clientY } = e
    this.setState({mouseX:clientX,mouseY:clientY})//revisar que el contexto de this.setstate sea el correcto
  }

  render() {
    return (
      <div>
        <div style={{border:"1px solid #000"}} onMouseMove={this.handleMouseMove2}>
          <p>{this.state.mouseX},{this.state.mouseY}</p>
        </div>
        <div style={{border:"1px solid #000"}} onMouseMove={this.handleMouseMove}>
          <p>{this.state.mouseX},{this.state.mouseY}</p>
        </div>
      </div>
      
    );
  }
}

class EventosyFormularios extends Component {
  soyUnEventoSintetico(e) {
    console.log(e.nativeEvent);
    alert("Me ejecute de forma sintetica");
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            alert("Me ejecute");
          }}
        >
          {" "}
          Soy OnClick()
        </button>
        <button onClick={this.soyUnEventoSintetico}>
          {" "}
          Soy OnClick() pero con evento sintetico
        </button>
        <BotonConUnEventoSoportado />
      </div>
    );
  }
}

export default EventosyFormularios;
