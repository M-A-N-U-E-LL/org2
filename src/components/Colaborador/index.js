import "./Colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Colaborador = (props) => {

    const {nombre, puesto, foto, equipo, id, fav} = props.datos;
    const {colorPrimario, eliminarColaborador, like} = props;
    const backgroundColor =  {backgroundColor: colorPrimario};
    const styleTitle = {color: colorPrimario};

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={backgroundColor}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4 style={styleTitle}>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="#ff312e" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)} />}
        </div>
    </div>
}

export default Colaborador;