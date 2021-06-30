import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Error from '../../helpers/Error';
import ErrorFroms from '../../helpers/ErrorForms';
import { useHistory } from "react-router-dom";

function AgregarEventos({ guardarRecargarEventos}) {
    const [nombreEvento, guardarNombreEvento] = useState('');
    const [descripcion, guardarDescripcion] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [error, guardarError] = useState(false);
    let history = useHistory();
    const agregarEvento = async e =>{
        e.preventDefault();
        if (nombreEvento === '' || descripcion === '' || fecha === '') {
            guardarError(true);
            return;
        }
        guardarError(false);
        try {
            const resultado = await axios.post('http://localhost:4000/eventos',{
                nombreEvento,
                descripcion,
                fecha
            });
            console.log(resultado)
            if (resultado.status === 201) {
                alert('Agregado con exito');
            }
        } catch (error) {
            console.log("error");
        }
        guardarRecargarEventos(true);
        history.push('/eventos');
    }
    return(
    <Fragment>
            <div className="col-md-8 mx-auto">
             <h2 className="text-center">Agregar un evento</h2>
             {(error) ? <Error mensaje="Todos los campos son obligatorios" /> : null}
             <form className="mt-5" onSubmit={agregarEvento}>
             <div className="form-group mt-2">
                <label>Nombre del evento</label>
                <input type="text"
                 className="form-control "
                 name="nombre"
                 placeholder="Nombre Evento"
                 onChange ={ e => guardarNombreEvento(e.target.value)}
                
                />
            </div> 
            <div className="form-group mt-2">
                <label>Descripcion</label>
                <textarea 
                className="form-control" 
                rows="3"
                name="descripcion"
                onChange= { e => guardarDescripcion(e.target.value)}
                
                >
                </textarea>
            </div>
            <div className="form-group mt-2">
               <label>Fecha del evento</label>
               <input type='date' 
               className="form-control"
               name="fecha"
               onChange={e => guardarFecha(e.target.value)}
               placeholder="fecha"
                />
            </div>
            <input type="submit" className=" mb-2 font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Evento" />
             </form>
        </div>
        <div className="col-md-8 mx-auto mt-5 d-flex align-items-center flex-column">
            <h2 className="text-center">Lista de eventos creados</h2>
            <Link to="/eventos" className="btn btn-primary btn-lg mt-3 mb-3 btn-block">Ir a la Lista de Evento</Link>
        </div>
    </Fragment>
    )
}
export default AgregarEventos;