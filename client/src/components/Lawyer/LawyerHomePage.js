import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lawyer from './Lawyer.js';
import EditLawyer from './EditLawyer';
import DeleteLawyer from './DeleteLawyer';
import CreatingLawyer from './CreatingLawyer';




export default class LawyerHomePage extends Component {
    render() {
      return (
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={'/'} className="navbar-brand">Sumerge</Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/create'} className="nav-link">Create</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/edit'} className="nav-link">Edit</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/delete'} className="nav-link">Delete </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/read'} className="nav-link">Lawyer </Link>
                  </li>
                </ul>
              </div>
            </nav> <br/>
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
  
  
  