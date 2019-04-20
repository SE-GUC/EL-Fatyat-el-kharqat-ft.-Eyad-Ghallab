import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lawyer from './Lawyer.js';
import EditLawyer from './EditLawyer';
import DeleteLawyer from './DeleteLawyer';
import CreatingLawyer from './CreatingLawyer';

import './Lawyer.css';


export default class LawyerHomePage extends Component {
    render() {
      return (
        <Router>      
<div className="navbar navbar-expand-lg navbar-light bg-light" id="cssmenu"><div id="bg-one"></div><div id="bg-two"></div><div id="bg-three"></div><div id="bg-four"></div>
<ul>
   <li class="active"><span><Link to={'/'}>GAFI</Link></span></li>
   <li><span> <Link to={'/'}>Home</Link></span></li>
   <li><span> <Link to={'/create'} className="nav-link">Create</Link></span></li>
   <li><span><Link to={'/edit'} className="nav-link">Edit</Link></span></li>
   <li><span> <Link to={'/delete'} className="nav-link">Delete </Link></span></li>
   <li class="last"><span> <Link to={'/read'} className="nav-link">Lawyer </Link></span></li>
</ul>
<h2>Welcome to GAFI</h2> <br/>
            <Switch>
                <Route exact path='/create' component={ CreatingLawyer } />
                <Route exact path='/edit' component={ EditLawyer } />
                <Route exact path='/delete' component={ DeleteLawyer} /> 
                <Route exact path='/read' component={ Lawyer } /> 
            </Switch>
</div>
          
        </Router>
        
      );
    }
  }
  
  
  