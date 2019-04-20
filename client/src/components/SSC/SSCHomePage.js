import React, { Component } from 'react';
import './SSC.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import NoSsr from '@material-ui/core/NoSsr';
import logo from './unnamed.png';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SSC from './SSC.js';
import CreatingSSCForm from './CreatingSSCForm';
import EditSSC from './EditSSC';
import DeleteSSC from './DeleteSSC';
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

 

  
class SSCHomePage extends Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <Router>
      <NoSsr>
        <div >
       
          <AppBar position="static">
            <Tabs  value={value} onChange={this.handleChange}
            
           >
            <ul className="logo">
            <img src={logo} alt="" /></ul>
            
            
                <ul className="nav-item">
            <li >
                  <Link to={'/CreateSSC'} className="nav-link">Create</Link>
                </li>
                <li>|</li>
</ul>

                <ul className="nav-item">
               <li >
                  <Link to={'/DeleteSSC'} className="nav-link">Delete</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">    
                <li>              
                <Link to={'/EditSSC'} className="nav-link">Edit</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">
            <li >
                  <Link to={'/ViewSSC'} className="nav-link">View</Link>
                </li>
                <li>|</li>
                </ul>
             
               
               
             
                

            </Tabs> 
          </AppBar>
       
          
          <Switch>
              <Route exact path='/CreateSSC' component={ CreatingSSCForm } />
              <Route exact path='/EditSSC' component={ EditSSC } />
              <Route exact path='/DeleteSSC' component={ DeleteSSC } /> 
              <Route exact path='/ViewSSC' component={ SSC } /> 
              
            
              
          </Switch>
        </div>
      </NoSsr>
      </Router> 

    );
  }
}

SSCHomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default  withStyles(styles, { withTheme: true }) (SSCHomePage);

