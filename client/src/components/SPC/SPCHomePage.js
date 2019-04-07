import React, { Component } from 'react';
//import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SPC from './SPC.js';
import CreatingSPCForm from './CreatingSPCForm';
import EditSPC from './EditSPC';
import DeleteSPC from './DeleteSPC';

export default class SPCHomePage extends Component {
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
                  <Link to={'/delete'} className="nav-link">Delete a Form</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/read'} className="nav-link">All SPC Forms</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to GAFI</h2> <br/>
          <Switch>
              <Route exact path='/create' component={ CreatingSPCForm } />
              <Route exact path='/edit' component={ EditSPC } />
              <Route exact path='/delete' component={ DeleteSPC } /> 
              <Route exact path='/read' component={ SPC } /> 
          </Switch>
        </div>
      </Router>
    );
  }
}


