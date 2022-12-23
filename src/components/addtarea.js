import React from "react";
import '../css/style.css'

function AddTarea({manejarInput, manejarEnvio}){
    return(
        <form className="container-addtarea" onSubmit={manejarEnvio}>
            <input className="input-agregar-tarea" type={'text'} onChange={manejarInput}></input>
            <button className="boton-agregar-tarea" type="submit"><b>Agregar tarea</b></button>
        </form>
    );
}

export default AddTarea;