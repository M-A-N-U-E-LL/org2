import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar envio", e);
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo,
        };
        console.log(datosAEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required valor={nombre} 
                actualizarValor={actualizarNombre} 
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresa tu puesto" 
                required valor={puesto} 
                actualizarValor={actualizarPuesto} 
            />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Agregar enlace de foto" 
                required value={foto} 
                actualizarValor={actualizarFoto} 
            />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear colaborador
            </Boton>
        </form>
    </section>
}

export default Formulario;