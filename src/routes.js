/**
 * Created by mihneaspirescu on 03/07/2017.
 */
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch}   from 'react-router-dom';

import Page from './Components/Page'



export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Page}/>
                </Switch>
            </Router>
        )
    }
}

