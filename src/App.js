import { useState } from 'react';
import { v4 as uuid } from 'uuid';
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
      id: uuid(),
      equipo: "FrontEnd",
      foto: "http://github.com/harlandlohora.png",
      nombre: "harland",
      puesto: "Instructor",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "http://github.com/harlandlohora.png",
      nombre: "harland",
      puesto: "Instructor",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "FrontEnd",
      foto: "http://github.com/harlandlohora.png",
      nombre: "harland",
      puesto: "Instructor",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "DevOps",
      foto: "http://github.com/harlandlohora.png",
      nombre: "harland",
      puesto: "Instructor",
      fav: false,
    }
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    
    {
      id: uuid(),
      titulo: "FrontEnd",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },

    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },

    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },

    {
      id: uuid(),
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
  const eliminarColaborador = (id) => {
    // console.log("Eliminar colaborador: ", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualiza: ", color, id );
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  }

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}]);
    console.log(equipos);
  }

  const like = (id) => {
    console.log("Like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresActualizados);
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
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
          like={like}
        />) 
      }

      <Footer />
    </div>
  );
}

export default App;
