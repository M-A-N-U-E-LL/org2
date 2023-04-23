import { useState } from "react";
import "./MiOrg.css";

const MiOrg = () => {
    // Estado - Hooks
    // UseState
    const [mostrar, actualizarMostrar] = useState(true);

    const manejarClick = () => {
        // console.log("Mostrar/Ocultar", !mostrar);
        actualizarMostrar(!mostrar);
    }

    return <section className="orgSection">
        <h3>Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={manejarClick}/>
    </section>
};

export default MiOrg;