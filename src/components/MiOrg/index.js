// import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
    // Estado - Hooks
    // UseState
    console.log(props);

    return <section className="orgSection">
        <h3>Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
};

export default MiOrg;