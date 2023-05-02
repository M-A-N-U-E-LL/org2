import { useState } from 'react';
import './App.css';
import Header from "./components/Header/Header.js";
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      equipo: "FrontEnd",
      foto: "http://github.com/harlandlohora.png",
      nombre: "harland",
      puesto: "Instructor",
    },
    {
      equipo: "Programación",
      foto: "http://github.com/harlandlohora.png",
      nombre: "harland",
      puesto: "Instructor",
    },
    {
      equipo: "FrontEnd",
      foto: "http://github.com/harlandlohora.png",
      nombre: "harland",
      puesto: "Instructor",
    },
    {
      equipo: "DevOps",
      foto: "http://github.com/harlandlohora.png",
      nombre: "harland",
      puesto: "Instructor",
    }
  ]);

  const [equipos, actualizarEquipo] = useState([
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    
    {
      titulo: "FrontEnd",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    {
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },

    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },

    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },

    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  // Registrar colaborador
  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador]);
  }
  
  // Eliminar colaborador
  const eliminarColaborador = () => {
    console.log("EliminarColaborador");
  }

  //Actualizar color de equipo
  const actualizarColor = (color, titulo) => {
    console.log("Actualiza: ", color, titulo );
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.titulo === titulo) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });

    actualizarEquipo(equiposActualizados);
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map( (equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
        />) 
      }

      <Footer />
    </div>
  );
}

export default App;
