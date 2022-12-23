import React from "react";
import '../css/style.css'
import { TiDelete } from "react-icons/ti";


function Tarea({id, descripcion, estado, toggleEstado, eliminarTarea}){
    return(
        <div 
            className={`tarea-container ${estado ? null : 'completado'}`}
        >
            <div className="tarea-texto" onClick={() => toggleEstado(id)}>
                {descripcion}
            </div>
            <div className="delete">
               <TiDelete className="delete" onClick={() => eliminarTarea(id)}></TiDelete>
            </div>
        </div>
    );
}

export default Tarea;