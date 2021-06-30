import React from 'react';
import {Link} from 'react-router-dom';

function EventosLista({evento, guardarRecargarEventos}) {
    return(
        <li data-categoria={evento.nombreEvento} 
        className="list-group-item">
            <div className="row">
                <p className="col-md-4 ">
                    Nombre evento: {evento.nombreEvento}{''}
                </p>
                <p className="col-md-2"><span className="font-weigth-bold ">Descripcion: {evento.descripcion}</span></p>
            <p className="col-md-2"><span className="font-weigth-bold">Fecha: {evento.fecha}</span></p>
            <div className="col-md-2">
                <Link to={`/`} className="btn btn-success mr-2">
                Editar
                </Link>
                <button type="button" className="btn btn-danger" >Eliminar &times;</button>
            </div>
            </div>
           
        </li>
    )
}

export default EventosLista;