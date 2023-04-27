import Colaborador from "../Colaborador";
import "./Equipo.css"

const Equipo = (props) => {

    const {colorPrimario, colorSecundario, titulo} = props.datos;
    const {colaboradores} = props;
    
    const titleStyle = {borderColor: colorPrimario};
    const backgroundColor = {backgroundColor: colorSecundario};

    return <>
    { colaboradores.length > 0 &&
        <section className="equipo" style={backgroundColor}>
            <h3 style={titleStyle}>{titulo}</h3>
            <div className="colaboradores">
                {colaboradores.map((colaborador, index) => <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario} />
                )}
            </div>
        </section>
    }
    </>
};

export default Equipo;