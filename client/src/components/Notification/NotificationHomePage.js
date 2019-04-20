import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import NoSsr from '@material-ui/core/NoSsr';
import logo from './unnamed.png';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Notification from './Notification'
import DeleteNotification from './DeleteNotification';
import CreateNotification from './CreateNotification';
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

 

  
class NotificationHomePage extends Component {
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
                  <Link to={'/CreateNotification'} className="nav-link">Create</Link>
                </li>
                <li>|</li>
</ul>

                <ul className="nav-item">
               <li >
                  <Link to={'/DeleteNotification'} className="nav-link">Delete</Link>
                </li>
                <li>|</li>
                </ul>

                <ul className="nav-item">
            <li >
                  <Link to={'/ViewNotification'} className="nav-link">View</Link>
                </li>
                <li>|</li>
                </ul>
                
            </Tabs> 
          </AppBar>
       
          
          <Switch>
              <Route exact path='/CreateNotification' component={ CreateNotification } />
              <Route exact path='/DeleteNotification' component={ DeleteNotification } /> 
              <Route exact path='/ViewNotification' component={ Notification} /> 
          </Switch>
              <br/>

      
        </div>
      </NoSsr>
      </Router> 

    );
  }
}

NotificationHomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default  withStyles(styles, { withTheme: true }) (NotificationHomePage);

