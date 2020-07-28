
import React, { Component } from "react";

//#region Componentes funcionales
// Primer comoponente en react
function ComponenteConFuncion(
  props /* aca van los atributos del componentes ) */
) {
  return (
    <div>
      <h1 style={{ color: "black" }}>
        Este si es el hola mundo de componentes
      </h1>
      <h1 style={{ color: "black" }}>{props.title}</h1>
    </div>
  );
}
const ComponenteConFuncionAnonima = function (props) {
  return (
    <div>
      <h1 style={{ color: "violet" }}>Segundo componente</h1>
      <h1 style={{ color: "violet" }}>{props.title}</h1>
    </div>
  );
};

//Terce componentes pero con arrow function corta
const ComponenteConFuncionFlechaCorta = (props) => (
  <h1 style={{ color: "white" }}>
    componente creado con la arrow function cortica {props.title}
  </h1>
);

//Terce componentes pero con arrow function larga

const ComponenteConFuncionesFlechaLarga = (props) => {
  return (
    <div>
      <h2 style={{ color: "red" }}>{props.title}</h2>
      <h3 style={{ color: "red" }}>Este fue creado con un arrow function </h3>
    </div>
  );
};
//#endregion

//#region Compoentes con estados,ciclos de vida y propiedades
//Cuarto componente pero con clase
class ComponenteClase extends Component {
  render() /*Función obligatoria de la clase */ {
    return <h1 style={{ color: "green" }}>{this.props.title}</h1>;
  }
}

class ComponenteParaExplicarProps extends Component {
  render() {
    const {
      // Deestructuración del codigo
      bolean,
      number,
      text,
      arrayofNumbers,
      multiply,
      ReactElement,
    } = this.props;

    const textoSegunBool = bolean ? "cierto" : "Mentira";
    const mappedNumbers = arrayofNumbers.map(multiply);
    const element = arrayofNumbers.map((n) => (
      <p key={n+"elemento"}>
        se creo un elemento dentro de un elemento y se esta mapeando desde un
        array. el doble de {n} = {n * 2}{" "}
      </p>
    ));

    return (
      <div>
        <p>{text}</p>
        <p>se paso un numero como prop {number}</p>
        <p>se paso un boleano como prop {this.props.bolean}</p>
        <p>
          se esta haciendo dinanismo a partir de una prop boleana{" "}
          {textoSegunBool}
        </p>
        <p>se paso un array como prop {arrayofNumbers.join(", ")}</p>
        <p>
          se paso una variable que fue mapeada desde un prop array{" "}
          {mappedNumbers.join(", ")}
        </p>
        {element}
        <p>Objeto con información {this.props.objectWithInfo.key}</p>
        {ReactElement}
      </div>
    );
  }
}

class PropsConValorPorDefecto extends Component {
  render() {
    return (
      <div>
        <p>{this.props.Text}</p>
      </div>
    );
  }
}
PropsConValorPorDefecto.defaultProps = {
  Text: "Valor por defecto",
};

class ComponenteConEstado extends Component {
  //Usando class field
  state = {
    contador: this.props.contadorInicial,
  };
  //Actualizo los estados
  componentDidMount() {
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }

  render() {
    //const { contador } = this.state;
    return (
      <div>
        <span>
          Componente con estados inicializado con class field contador =
          {this.state.contador}
        </span>
      </div>
    );
  }
}
ComponenteConEstado.defaultProps = {
  contadorInicial: 1,
};
//#endregion
export default class PropsyEstate extends Component {

  render() {
    return (
      <div>
        <ComponenteConFuncion title="Función normal" />
        <ComponenteConFuncionAnonima title="Funcion Anonima" />
        <ComponenteConFuncionFlechaCorta />
        <ComponenteConFuncionesFlechaLarga title="Esta tiene Atributos" />
        <ComponenteClase title="Se creo a partir de una clase" />
        <ComponenteParaExplicarProps
          bolean
          number={2}
          text="Vamos a Explicar props"
          arrayofNumbers={[2, 3, 10]}
          objectWithInfo={{ key: "uno", key2: "dos" }}
          multiply={(number) => number * 2}
          ReactElement={<p>Pase un elemento React como prop</p>}
          
        />
        <PropsConValorPorDefecto />
        <PropsConValorPorDefecto Text="Valor modificado" />
        <ComponenteConEstado />
        <ComponenteConEstado contadorInicial={5} />
      </div>
    )
  } 

}