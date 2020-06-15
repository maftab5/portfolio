import React,{Component} from 'react';
import '../css/App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";
import Navbars from "../Navbar";
import Resume from "./Resume";


 class App extends Component{

    render() {


        return (
            <Router>
                <div className="App">

                    <Navbars />
                            <Switch>

                                <Route path="/" component={Home} exact/>
                                <Route path ="/portfolio"  component={Portfolio} />
                                <Route path = "/about" component ={About} />
                                <Route path ="/contact" component = {Contact} />
                                <Route path ="/resume" component = {Resume} />


                            </Switch>


                </div>

            </Router>

        );
    }

}

export default App;
