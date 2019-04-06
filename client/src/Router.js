import React from 'react';
import {Route, Switch} from 'react-router';
import Investor from './components/Investor/Investor';
const Router = () => (
    
        <Route exact path="/investors" component={Investor}/>
    
);

export default Router;