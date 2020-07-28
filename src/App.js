import React  from "react";
import logo from "./logo.svg";
import "./App.css";
import PropsyEstate from "./conceptos-basicos/0.PropsyEstate.jsx"
import RenderizadoCondicional from "./conceptos-basicos/1.Renderizado_condicional.jsx";
import Trabajarconlistas from "./conceptos-basicos/2.TrabajarconListas.jsx"

import Eventos from "./conceptos-basicos/3.Eventos.jsx"
import Formulario from "./conceptos-basicos/4.Formularios.jsx"
import PropsChildren from "./conceptos-basicos/5.PropsChildrenyPrototype.jsx"

import CicloDeMontaje from "./conceptos-basicos/6.CicloDeDeMontaje.jsx"
import FetchExample from "./conceptos-basicos/6.FetchApiEjemplo.jsx"
import CicloDeActualizacion from "./conceptos-basicos/7.cicloDeActualizacionExample1.jsx"
import CicloDeActualizacionEjemplo2 from "./conceptos-basicos/7.CicloDeActualizacionExample2.jsx"
import CicloDeActualizacionEjemplo3 from './conceptos-basicos/7.CicloDeActualizacionExample3.jsx';
import PureComponentExample from "./conceptos-basicos/8.PureComponenteExample.jsx"
import CicloDeDesmontaje from "./conceptos-basicos/9.CicloDeDesmontaje.jsx"
import CicloDeError from "./conceptos-basicos/10.CicloDeError.jsx"


import Btc from "./container-component/btc/container.jsx"
import Prueba from "./container-component/FormularioNoControlado/FormularioContainer.jsx"
import PruebaControlado from "./container-component/FormularioControlado/FormularioContainer.jsx" 

//Comunicación entre componentes
import ComunicacionConMetodosDeInstancia from "./comunicacion-entre-componentes/ComunicacionConMetodoDeInstancia.jsx"
import ComunicacionEntreComponentesHermanos from "./comunicacion-entre-componentes/ComunicacionEntreComponentesHermanos.jsx"
import OberserverPattern from "./comunicacion-entre-componentes/ObserverParttern.jsx"
import ReactContext from "./comunicacion-entre-componentes/ReactContext.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        { //* 0️⃣ concepto en explicar: PROPIEDADES Y ESTADOS
          // <PropsyEstate />
        }
        
        { //* 1️⃣ concepto en explicar: RENDERIZADO CONDICIONAL
          // <RenderizadoCondicional />
        }
        { //* 2️⃣ concepto en explicar: LISTAS
          // <Trabajarconlistas numeros={[1, 2, 3, 45]} />
        }
        { //* 3️⃣ concepto en explicar : EVENTOS
          // <Eventos />
        }
        {//* 4️⃣ concepto en explicar: FORMULARIOS
          // <Formulario />
        }
        
        {//* 5️⃣ concepto en explicar: PROPIEDADES HIJAS
          // <PropsChildren
          // author="Sebastian"
          // date={new Date().toLocaleDateString()}
          // title="Articulo sobre la Propiedad Children">
          // <p>Esto es un articulo que estoy pasando sus elementos como hijos de un componente en react :D</p>
          // <strong>Y Mantiene las etiquetas y componentes que hayas añadido dentro del componente</strong>
          // </PropsChildren>
        }
        {//* 6️⃣ concepto en explicar: CICLO DE MONTAJE
          // <CicloDeMontaje />
        }
        {//* 6️⃣ concepto en explicar: CUANDO HACER CONSULTAS A APIS
          // <FetchExample />
        }

        {//* 7️⃣ concepto en explicar: CICLO DE ACTUALIZACIÓN
          // <CicloDeActualizacion />
        }
        {//* 7️⃣ concepto en explicar: CICLO DE ACTUALIZACIÓN -Nuevos metodos de ciclo de actualización usar con cuidado
          // <CicloDeActualizacionEjemplo2 />
        }
        {//* 7️⃣ concepto en explicar: CICLO DE ACTUALIZACIÓN
          // <CicloDeActualizacionEjemplo3 />
        }
        {//* 8️⃣ concepto en explicar: COMPONENTES PUROS
          //<PureComponentExample />
        }
        {//* 9️⃣ concepto en explicar: CICLO DE DESMONTAJE
          // <CicloDeDesmontaje />
        }
        {//* 1️⃣0️⃣ concepto en explicar: CICLO DE Error
          // <CicloDeError />
        }
                
        {//* 1️⃣1️⃣ Patron de diseño contener-contenido
          // <Btc />
        }
        {//* 1️⃣2️⃣  Comunicación entre componentes
          // <ComunicacionConMetodosDeInstancia />
          // <ComunicacionEntreComponentesHermanos />
          // <OberserverPattern />
          // <ReactContext />

        }
        {
          <PruebaControlado />
        }
        
        
        
        
        
  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
