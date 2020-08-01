import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import { Context } from './Context/AuthContext';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Cadastro from './pages/Cadastro';

function CustomRoute({ isPrivate, ...rest }) {
  const authenticated = localStorage.getItem('auth'); 


    if (isPrivate && !authenticated) {
      return <Redirect to="/login" />
    }
  
    return <Route {...rest} />;
  }

export default function Routes() {
    return(
        
            <Switch>
                <CustomRoute path="/login" component={Login}/>
                <CustomRoute isPrivate path="/dashboard" component={Dashboard}/>
                <CustomRoute isPrivate path="/cadastro" component={Cadastro}/>
                
            </Switch>
        
    

    );

}