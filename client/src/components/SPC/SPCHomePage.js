import React, { Component } from 'react';
<<<<<<< HEAD
=======
import './SPC.css';
>>>>>>> 323566300f46102d505e090996971ed1f0b3731b
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import NoSsr from '@material-ui/core/NoSsr';
import logo from './unnamed.png';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SPC from './SPC.js';
import CreatingSPCForm from './CreatingSPCForm';
import EditSPC from './EditSPC';
import DeleteSPC from './DeleteSPC';
import Workspace from './Workspace';
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

 

  
class SPCHomePage extends Component {
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
                  <Link to={'/CreateSPC'} className="nav-link">Create</Link>
                </li>
                <li>|</li>
</ul>

                <ul className="nav-item">
               <li >
                  <Link to={'/DeleteSPC'} className="nav-link">Delete</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">    
                <li>              
                <Link to={'/EditSPC'} className="nav-link">Edit</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">
            <li >
                  <Link to={'/ViewSPC'} className="nav-link">View</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">
            <li >
                  <Link to={'/Workspace'} className="nav-link">Workspace</Link>
                </li>
                <li>|</li>
                </ul>
               
               
               
             
                

            </Tabs> 
          </AppBar>
       
          
          <Switch>
              <Route exact path='/CreateSPC' component={ CreatingSPCForm } />
              <Route exact path='/EditSPC' component={ EditSPC } />
              <Route exact path='/DeleteSPC' component={ DeleteSPC } /> 
              <Route exact path='/ViewSPC' component={ SPC } /> 
              <Route exact path='/Workspace' component={ Workspace } /> 
              
            
              
          </Switch>
        </div>
      </NoSsr>
      </Router> 

    );
  }
}

SPCHomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default  withStyles(styles, { withTheme: true }) (SPCHomePage);

