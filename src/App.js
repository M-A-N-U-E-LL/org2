import './App.css';
import Header from "./components/Header/Header.js";
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/MiOrg';
import { useState } from 'react';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  return (
    <div>
      <Header />
      {mostrarFormulario ? <Formulario /> : <></>}
      {/* {mostrarFormulario && <Formulario />} */}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
