import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reviewer from './Reviewer.js';
import EditReviewer from './EditReviewer';
import DeleteReviewer from './DeleteReviewer';
import CreatingReviewer from './CreatingReviewer';


export default class ReviewerHomePage extends Component {
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
                    <Link to={'/read'} className="nav-link">All Reviewers</Link>
                  </li>
                </ul>
              </div>
            </nav> <br/>
            <h2>Welcome to GAFI</h2> <br/>
            <Switch>
                <Route exact path='/create' component={ CreatingReviewer } />
                <Route exact path='/edit' component={ EditReviewer } />
                <Route exact path='/delete' component={ DeleteReviewer} /> 
                <Route exact path='/read' component={ Reviewer } /> 
            </Switch>
          </div>
        </Router>
      );
    }
  }
  
  
  