import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar envio", e);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required />
            <CampoTexto titulo="Puesto" placeholder="Ingresa tu puesto" required />
            <CampoTexto titulo="Foto" placeholder="Agregar enlace de foto" required />
            <ListaOpciones />
            <Boton>
                Crear colaborador
            </Boton>
        </form>
    </section>
}

export default Formulario;