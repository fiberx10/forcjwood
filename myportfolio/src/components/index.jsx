// the root point of the app  ; 
// return : IndexApp that content the whole app ;
// the routing system will be start here
// libbraries 
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Main from "./Main"
import Home from "./home"
import AboutMe from "./aboutme"
import Projects from "./projects"
 const IndexApp = () => {
    return (
        <div>
          <Main></Main>
          <Router>
            <Switch>
                <Route path="/" exact >
                    <Home></Home>
                    <Projects></Projects>
                    <AboutMe></AboutMe>
                </Route>
            </Switch>
        </Router>  
        </div>
    );
}
export default IndexApp ;





