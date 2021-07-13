import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import EventoLista from './ListaTareas';
function Tareas({tareas, guardarRecargarTarea}) {
    console.log("tareas",tareas);
    return(
        <Fragment>
        <div className="col-md-8 mx-auto mt-5 d-flex align-items-center flex-column">
            <h2 className="text-center">Crear nueva Tarea</h2>
            <Link to="/nuevo-evento" className="btn btn-primary btn-lg mt-3 mb-3 btn-block">Crear Tarea</Link>
        </div>
            <h2 className="text-center">Tarea</h2>
            <ul className="list-group mt-5">
                {tareas === [''] ? <p>No hay eventos disponibles</p>: tareas.map(tarea =>(
                    <EventoLista
                        key={tarea.id}
                        tareas={tarea}
                        guardarRecargarTarea={guardarRecargarTarea}
                    />
                )) 
                }
            </ul>
        </Fragment>
    )    
}
export default Tareas;