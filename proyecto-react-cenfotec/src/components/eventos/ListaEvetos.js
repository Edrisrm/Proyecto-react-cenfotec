import React from 'react';
import {Link} from 'react-router-dom';

function EventosLista({evento, guardarRecargarEventos}) {
    return(
        <li data-categoria={evento.nombreEvento} 
        className="list-group-item">
            <div className="row">
                <p className="col-md-4 ">
                    <span className="fw-bold">Nombre evento: </span>  {evento.nombreEvento}{''}
                </p>
                <p className="col-md-2"><span className="fw-bold ">Descripcion: </span>{evento.descripcion}</p>
            <p className="col-md-2"><span className="fw-bold">Fecha: </span>{evento.fecha}</p>
            </div>
           
        </li>
    )
}

export default EventosLista;