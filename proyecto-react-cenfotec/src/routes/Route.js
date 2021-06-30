import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios'
import Navbar from '../components/ui/Navbar/Navbar';
import Footer from '../components/ui/Footer/Footer';
import Principal from '../components/Principal/Principal';
import Eventos  from '../components/eventos/Eventos';
import AgregarEventos from '../components/eventos/AddEvento';
function Layout() {

    const [eventos, guardarEventos] = useState([]);
    const [recargarEventos, guardarRecargarEventos] = useState(true);
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
            consultarAPI(); 
        }
    }, [recargarEventos])
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
                    </Switch>
                </div>
            </div>
            <Footer/>
        </Router>

    )
}
export default Layout;