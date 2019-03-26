import React from 'react';
import history from './history';
import {Route, Router, Switch,} from 'react-router-dom';
import Home from 'pages/Home';

export default <Router history={history}>
    <Route render={({location})=>{
        return <Switch location={location}>
            <Route path={'/'}  component={Home}/>} />
        </Switch>
    }} />
</Router>
