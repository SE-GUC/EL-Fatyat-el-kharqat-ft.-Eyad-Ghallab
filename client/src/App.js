import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SPCHomePage from './components/SPC/SPCHomePage';


import ReviewerHomePage from './components/Reviewer/ReviewerHomePage';
import LawyerHomePage from './components/Lawyer/LawyerHomePage';
import ContractHomePage from './components/Contract/ContractHomePage';
import PaymentHomePage from './components/Payment/PaymentHomePage';

import SSCHomePage from './components/SSC/SSCHomePage';

//import ReviewerHomePage from './components/Reviewer/ReviewerHomePage';
import Admin from './components/Admin/AdminHomePage';
import Notification from './components/Notification/NotificationHomePage';


import ExternalEntities from './components/ExternalEntities/ExternalEntitiesHomePage';

import Investor from './components/Investor/InvHomePage';
import Comment from './components/Comment/CommentHomePage';


import Tabs from '@material-ui/core/Tabs';

import AppBar from '@material-ui/core/AppBar';
import NoSsr from '@material-ui/core/NoSsr';
import logo from './unnamed.png';
import { withStyles } from '@material-ui/core/styles';


import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';

import Form from './components/Form/Form';


import Workspace from './components/Lawyer/Workspace';

import Forms from './components/Reviewer/Forms';
import updating_Forms from './components/Reviewer/updating_Forms'


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

 
  

class App extends Component {

  render() {
   
    return (
      <Router>
      <NoSsr>

        <div >
          
        <AppBar position="static" >
            <Tabs  
            
            >
            <ul className="logo">
            <img src={logo} alt="" /></ul>
            
            <ul className="nav-item">
               <li >
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li>|</li>
                </ul>
              
                <ul className="nav-item">
            <li >
                  <Link to={'/SPCHomePage'} className="nav-link">SPC</Link>
                
        
       
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">
                <li >
                  <Link to={'/SSCHomePage'} className="nav-link">SSC</Link>
                </li>
                </ul>
                
                <ul className="nav-item">
               <li >
                  <Link to={'/AdminHomePage'} className="nav-link">Admin</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">    
                <li>              
                <Link to={'/CommentHomePage'} className="nav-link">Comment</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">   
                <li>
                  <Link to={'/ContractHomePage'} className="nav-link">Contract</Link>
                <li>|</li>
              </li>
                </ul>
                <ul className="nav-item">
                <li>
                  <Link to={'/ExternalEntitiesHomePage'} className="nav-link">External Entities</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">
                <li >
                  <Link to={'/LawyerHomePage'} className="nav-link">Lawyer</Link>
                <li>|</li>
                </li>
                </ul>
                
               
                <ul className="nav-item">
                <li >
                  <Link to={'/NotificationHomePage'} className="nav-link">Notification</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">
                <li >
                  <Link to={'/PaymentHomePage'} className="nav-link">Payment</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">
                <li>
                  <Link to={'/ReviewerHomePage'} className="nav-link">Reviewer</Link>
                <li>|</li>
               </li>
               </ul>
                
                
               
                <ul className="nav-item">
                <li>
                  <Link to={'/AboutUs'} className="nav-link">About Us</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">
                <li >
                        <Link to={'/ContactUs'} className="nav-link">Contact Us</Link>
                      </li>
                      </ul>
                      
                      <li className="nav-item">
                        <Link to={'/Workspace'} className="nav-link">Workspace</Link>
                      </li>
                      <li className="nav-item">
                        <Link to={'/Form'} className="nav-link">Form</Link>
                      </li>

                      <li className="nav-item">
                        <Link to={'/Workspace'} className="nav-link">Workspace</Link>
                      </li>

                   
 </Tabs>
          </AppBar>
       
               
               


          
   

          <Switch>
              <Route exact path='/SPCHomePage' component={ SPCHomePage } />
              <Route exact path='/SSCHomePage' component={ SSCHomePage } />
              <Route exact path='/Investor' component={ Investor } />
              <Route exact path='/LawyerHomePage' component={ LawyerHomePage} />
              <Route exact path='/PaymentHomePage' component={ PaymentHomePage } /> 
              <Route exact path='/ReviewerHomePage' component={ ReviewerHomePage } />
              <Route exact path='/ContractHomePage' component={ContractHomePage} />
              <Route exact path='/AboutUs' component={AboutUs} />
              <Route exact path='/AdminHomePage' component={ Admin} />
              <Route exact path='/CommentHomePage' component={ Comment } /> 
              <Route exact path='/ExternalEntitiesHomePage' component={ ExternalEntities } /> 
              <Route exact path='/NotificationHomePage' component={ Notification } /> 
              \
              <Route exact path='/ContactUs' component={ContactUs} />
             

              <Route exact path='/Login' component={Login} />
              <Route exact path='/Register' component={Register} />
              

              <Route exact path='/Workspace' component={Workspace} />
              <Route exact path='/Form' component={Form} />
              

             <Route exact path='/Forms' component={Forms} />
             <Route exact path='/updating_Forms' component={updating_Forms} />
          </Switch>
         
<Toolbar>
    <Link to={'/Login'} > <Button color="inherit">Login</Button> </Link> 
    <Link to={'/Register'} > <Button color="inherit">Register</Button></Link> 
        </Toolbar>

             


        


        </div>
      </NoSsr>
      </Router> 

    );
  }
}


export default  withStyles(styles, { withTheme: true }) (App);

