import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reviewer from './Reviewer.js';
import EditReviewer from './EditReviewer';
//import DeleteReviewer from './DeleteReviewer';
//import CreatingReviewer from './CreatingReviewer';
import Forms from './Forms';
import updating_Forms from './updating_Forms';

export default class ReviewerHomePage extends Component {
    render() {
      return (
        // <Router>
        //   <div className="container">
        //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //       <Link to={'/'} className="navbar-brand">Sumerge</Link>
        //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul className="navbar-nav mr-auto">
        //         <li className="nav-item">
        //             <Link to={'/'} className="nav-link">Home</Link>
        //           </li>
        //           <li className="nav-item">
        //             <Link to={'/create'} className="nav-link">Create</Link>
        //           </li>
        //           <li className="nav-item">
        //             <Link to={'/edit'} className="nav-link">Edit</Link>
        //           </li>
        //           <li className="nav-item">
        //             <Link to={'/delete'} className="nav-link">Delete </Link>
        //           </li>
        //           <li className="nav-item">
        //             <Link to={'/read'} className="nav-link">My profile</Link>
        //           </li>
        //           {/* <li className="nav-item">
        //             <Link to={'/view'} className="nav-link">Forms</Link>
        //           </li>
        //           <li className="nav-item">
        //             <Link to={'/update'} className="nav-link">updating_Forms</Link>
        //           </li> */}
        //         </ul>
        //       </div>
        //     </nav> <br/>
        //     <h2>Welcome to GAFI</h2> <br/>
        //     <Switch>
        //         <Route exact path='/create' component={ CreatingReviewer } />
        //         <Route exact path='/edit' component={ EditReviewer } />
        //         <Route exact path='/delete' component={ DeleteReviewer} /> 
        //         <Route exact path='/read' component={ Reviewer } /> 
        //         <Route exact path='/view' component={ Forms } /> 
        //         <Route exact path='/update' component={ updating_Forms } /> 
        //     </Switch>
        //   </div>
        // </Router>


        <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
               
                <li className="nav-item">
                  <Link to={'/read'} className="nav-link">My Profile</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/edit'} className="nav-link">Edit Profile</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/workspace'} className="nav-link">Accepted Forms</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/status'} className="nav-link">Workspace</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
        
          <Switch>
              <Route exact path='/edit' component={ EditReviewer } />
              <Route exact path='/read' component={ Reviewer } /> 
              <Route exact path='/workspace' component={  Forms } /> 
              <Route exact path='/status' component={  updating_Forms } /> 
          </Switch>
        </div>
      </Router>

      );
    }
  }
  
  
  