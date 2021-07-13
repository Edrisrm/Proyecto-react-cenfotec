import React from 'react';
import {Link} from 'react-router-dom';

function TareasLista({tareas, guardarRecargarTarea}) {
    return(
        <li data-categoria={tareas.nombreTarea} 
        className="list-group-item">
            <div className="row">
                <p className="col-md-6">
                   <span className="fw-bold">Nombre Tarea:</span> {tareas.nombreTarea}{''}
                </p>
            <p className="col-md-6"><span className="fw-bold">Fecha: </span>{tareas.fecha}</p>

            </div>
           
        </li>
    )
}

export default TareasLista;