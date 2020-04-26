import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import 'bootstrap'

import Login from "./Login"
import Dashboard from "./Dashboard"

class App extends Component{
    render(){
        return(
            <Router>
                <div> 
                    <Switch>
                    <Route exact path="/"  component={Login}/>
                    <Route exact path="/Dashboard" component={Dashboard}/>
                   </Switch>
                </div>
            </Router>
        )
    }
}

export default App