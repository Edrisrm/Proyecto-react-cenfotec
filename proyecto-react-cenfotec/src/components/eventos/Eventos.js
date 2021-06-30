import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import EventoLista from './ListaEvetos';
function Eventos({eventos, guardarRecargarEventos}) {
    console.log("eventos",eventos);
    return(
        <Fragment>
        <div className="col-md-8 mx-auto mt-5 d-flex align-items-center flex-column">
            <h2 className="text-center">Crear nuevo evento</h2>
            <Link to="/nuevo-evento" className="btn btn-primary btn-lg mt-3 mb-3 btn-block">Crear Evento</Link>
        </div>
            <h2 className="text-center">Eventos</h2>
            <ul className="list-group mt-5">
                {eventos === [''] ? <p>No hay eventos disponibles</p>: eventos.map(evento =>(
                    <EventoLista
                        key={evento.id}
                        evento={evento}
                        guardarRecargarEventos={guardarRecargarEventos}
                    />
                )) 
                }
            </ul>
        </Fragment>
    )    
}
export default Eventos;