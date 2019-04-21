import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Admin';
import EditAdmin from './EditAdmin'
import AllForms from './AllForms'
import Reviewer from '../regreviewer/registerrev'
import Lawyer from '../registerlawyer/reglawyer'
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import regAdmin from '../registerAdmin/regadmin'
export default class InvHomePage extends Component {
  state = {
    anchorEl: null,
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
    render() {
      const { anchorEl } = this.state;
      return (
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
                    <Link to={'/edit'} className="nav-link">Edit My Profile</Link>
                  </li>
                 
                  <li className="nav-item">
                    <Link to={'/AllForms'} className="nav-link">View Cases</Link>
                  </li>

                  <li className="nav-item">
                <Button className="nav-link"
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Register new user
        </Button>
        <Menu className="nav-link"
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <Link to={'/Lawyer'} onClick={this.handleClose} className="nav-link">Lawyer</Link>
          <Link to={'/Reviewer'} onClick={this.handleClose} className="nav-link">Reviewer</Link>
          <Link to={'/Admin'} onClick={this.handleClose} className="nav-link">Admin</Link>          
          
        </Menu>
        </li>`
                </ul>
              </div>
            </nav> <br/>
          
            <Switch>
               
                <Route exact path='/read' component={ Admin } />
                <Route exact path='/edit' component={ EditAdmin } /> 
                <Route exact path='/Reviewer' component={ Reviewer } /> 
                <Route exact path='/Lawyer' component={ Lawyer } /> 
                <Route exact path='/AllForms' component={ AllForms } /> 
                <Route exact path='/Admin' component={ regAdmin } /> 


            </Switch>
          </div>
        </Router>
      );
    }
  }
  
  