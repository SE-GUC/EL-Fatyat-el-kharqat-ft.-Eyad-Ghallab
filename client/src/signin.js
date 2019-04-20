import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';

import Login from './components/Login/Login'

import './App.css';
class signin extends Component {
  render(){
  return(
    <header>
<div class = "wrapper">

<div class="welcome-text">
<h1>Welcome To GAFI</h1>
<li><Link to={'/Login'} className="nav-link" > <Button color="inherit">Login</Button> </Link></li>

</div> 
<Switch>
              
              <Route exact path='/Login' component={Login} />
              


          </Switch>
         

</div>
</header>
  );
}
} 
export default signin