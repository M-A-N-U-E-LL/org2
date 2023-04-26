import Colaborador from "../Colaborador";
import "./Equipo.css"

const Equipo = (props) => {

    const {colorPrimario, colorSecundario, titulo} = props.datos;
    
    const titleStyle = {borderColor: colorPrimario};
    const backgroundColor = {backgroundColor: colorSecundario};

    return <section className="equipo" style={backgroundColor}>
        <h3 style={titleStyle}>{titulo}</h3>
        <div className="colaboradores">
            <Colaborador />
            <Colaborador />
            <Colaborador />
        </div>
    </section>
};

export default Equipo;