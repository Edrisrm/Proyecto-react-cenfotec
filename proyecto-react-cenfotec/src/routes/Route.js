import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from '../components/ui/Navbar/Navbar';
import Footer from '../components/ui/Footer/Footer';
import Principal from '../components/Principal/Principal';
function layout() {
    return(
        <Router>
            <Navbar/>
            <div className="App-header">
                <div className="container-fluid">
                    <Switch>
                    <Route exact path="/" component={Principal}/>
                    </Switch>
                </div>
            </div>
            <Footer/>
        </Router>

    )
}
export default layout;