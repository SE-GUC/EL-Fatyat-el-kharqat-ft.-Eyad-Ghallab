import React, { Component } from 'react';
import './Admin.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import NoSsr from '@material-ui/core/NoSsr';
import logo from './unnamed.png';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CreateAdmin from './CreateAdmin';
import EditAdmin from'./EditAdmin';
import DeleteAdmin from './DeleteAdmin'
import Admin from './Admin';

import upload from './upload';
const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
    position: 'relative',
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',

  },
});

 

  
class AdminHomePage extends Component {
   
  render() {
    return (
      <Router>
      <NoSsr>
        <div >
       
          <AppBar position="static">
            <Tabs 
            
            >
            <ul className="logo">
            <img src={logo} alt="" /></ul>
            
            
              
                <ul className="nav-item">
            <li >
                  <Link to={'/CreateAdmin'} className="nav-link">Create</Link>
                </li>
                <li>|</li>
</ul>

                <ul className="nav-item">
               <li >
                  <Link to={'/DeleteAdmin'} className="nav-link">Delete</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">    
                <li>              
                <Link to={'/EditAdmin'} className="nav-link">Edit</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">
            <li >
                  <Link to={'/ViewAdmin'} className="nav-link">View</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">
            <li >
                  <Link to={'/Upload'} className="nav-link">Upload</Link>
                </li>
                <li>|</li>
                </ul>
                
            </Tabs> 
          </AppBar>
       
          
          <Switch>
              <Route exact path='/CreateAdmin' component={ CreateAdmin } />
              <Route exact path='/EditAdmin' component={ EditAdmin } />
              <Route exact path='/DeleteAdmin' component={ DeleteAdmin } /> 
              <Route exact path='/ViewAdmin' component={ Admin } /> 
              <Route exact path='/Upload' component={ upload } /> 
          </Switch>
              <br/>

      
        </div>
      </NoSsr>
      </Router> 

    );
  }
}

AdminHomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default  withStyles(styles, { withTheme: true }) (AdminHomePage);

