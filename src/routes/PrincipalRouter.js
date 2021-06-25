import React from 'react'
import {
    Switch,
    BrowserRouter as Router,
    Route,
    Redirect,
 } 
from 'react-router-dom';

import { Princpal } from '../components/Principal'

export const PrincipalRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/home"
                        component={ Princpal }
                    />
                    <Redirect to="/home"/>
                </Switch>
            </Router>
        </div>
    )
}