import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios'
import Navbar from '../components/ui/Navbar/Navbar';
import Footer from '../components/ui/Footer/Footer';
import Principal from '../components/Principal/Principal';
import Eventos  from '../components/eventos/Eventos';
import AgregarEventos from '../components/eventos/AddEvento';
import Tareas from '../components/tareas/Tareas';
import AgregarTarea from '../components/tareas/AddTarea';
function Layout() {

    const [eventos, guardarEventos] = useState([]);
    const [tareas, guardarTareas] = useState([]);
    const [recargarEventos, guardarRecargarEventos] = useState(true);
    const [recargarTareas, guardarRecargarTarea] = useState(true);

    useEffect(() =>{
        if (recargarEventos) {
            const consultarAPI = async () =>{
                let url = `http://localhost:4000/eventos`;
                const resultado = await axios.get(url)
                .then(response => response.data)
                .then((data) =>{
                    console.log(data)
                    guardarEventos(data);
                });
            }
            const consultarTarea = async() =>{
                let url = `http://localhost:4000/tareas`;
                const resultado = await axios.get(url)
                .then(response => response.data)
                .then((data) =>{
                    console.log(data)
                    guardarTareas(data);
                })
            }
            consultarTarea();
            consultarAPI(); 
        }
    }, [recargarEventos, recargarTareas])
    return(
        <Router>
            <Navbar/>
            <div className="App-header">
                <div className="container-fluid">
                    <Switch>
                    <Route exact path="/" component={Principal}/>
                    <Route exact path="/eventos"
                        render={() =>(
                            <Eventos
                                eventos={eventos}
                                guardarRecargarEventos={guardarRecargarEventos}
                            />
                        )}
                    />
                    <Route exact path="/nuevo-evento" render={() =>(
                        <AgregarEventos
                            guardarRecargarEventos={guardarRecargarEventos}
                        />
                    )}/>
                    <Route exact path="/tareas"
                        render={() =>(
                            <Tareas
                                tareas={tareas}
                                guardarRecargarTarea={guardarRecargarTarea}
                            />
                        )}
                    />
                      <Route exact path="/nueva-tarea" render={() =>(
                        <AgregarTarea
                            guardarRecargarTarea={guardarRecargarTarea}
                        />
                    )}/>
                    </Switch>
                </div>
            </div>
            <Footer/>
        </Router>

    )
}
export default Layout;