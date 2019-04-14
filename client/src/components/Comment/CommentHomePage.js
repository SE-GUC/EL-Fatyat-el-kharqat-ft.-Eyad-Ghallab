import React, { Component } from 'react';
import './Comment.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import NoSsr from '@material-ui/core/NoSsr';
import logo from './unnamed.png';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import UpdateComment from'./UpdateComment';
import DeleteComment from './DeleteComment'
import Comment from './Comment';
import CreateComment from './CreateComment';
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

 

  
class CommentHomePage extends Component {
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
                  <Link to={'/CreateComment'} className="nav-link">Create</Link>
                </li>
                <li>|</li>
</ul>

                <ul className="nav-item">
               <li >
                  <Link to={'/DeleteComment'} className="nav-link">Delete</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">    
                <li>              
                <Link to={'/EditComment'} className="nav-link">Edit</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">
            <li >
                  <Link to={'/ViewComment'} className="nav-link">View</Link>
                </li>
                <li>|</li>
                </ul>
                
            </Tabs> 
          </AppBar>
       
          
          <Switch>
              <Route exact path='/CreateComment' component={ CreateComment } />
              <Route exact path='/EditComment' component={ UpdateComment } />
              <Route exact path='/DeleteComment' component={ DeleteComment } /> 
              <Route exact path='/ViewComment' component={ Comment } /> 
          </Switch>
              <br/>

      
        </div>
      </NoSsr>
      </Router> 

    );
  }
}

CommentHomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default  withStyles(styles, { withTheme: true }) (CommentHomePage);

