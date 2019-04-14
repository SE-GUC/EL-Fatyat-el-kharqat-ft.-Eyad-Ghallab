import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SPCHomePage from './components/SPC/SPCHomePage';
<<<<<<< HEAD
import Admin from './components/Admin/Admin';
import Notification from './components/Notification/Notification';
import ReviewerHomePage from './components/Reviewer/ReviewerHomePage';
import LawyerHomePage from './components/Lawyer/LawyerHomePage';
import ExternalEntities from './components/ExternalEntities/ExternalEntities';
import ContractHomePage from './components/Contract/ContractHomePage';
import PaymentHomePage from './components/Payment/PaymentHomePage';
import Investor from './components/Investor/Investor';
import Comment from './components/Comment/Comment';
import SSCHomePage from './components/SSC/SSCHomePage';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
//import ReviewerHomePage from './components/Reviewer/ReviewerHomePage';
=======
import Admin from './components/Admin/AdminHomePage';
import Notification from './components/Notification/NotificationHomePage';
import Reviewer from './components/Reviewer/Reviewer';
import Lawyer from './components/Lawyer/Lawyer';
import ExternalEntities from './components/ExternalEntities/ExternalEntitiesHomePage';
import Contract from './components/Contract/Contract';
import Payment from './components/Payment/Payment';
import Investor from './components/Investor/InvHomePage';
import Comment from './components/Comment/CommentHomePage';
import SSC from './components/SSC/SSC';
// import PhoneIcon from '@material-ui/icons/Phone';
import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
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

 
  
>>>>>>> 323566300f46102d505e090996971ed1f0b3731b

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
<<<<<<< HEAD

                <li className="nav-item">
                  <Link to={'/SSCHomePage'} className="nav-link">SSC</Link>
                </li>
                
                <li className="nav-item">
                  <Link to={'/Admin'} className="nav-link">Admin</Link>
=======
                <li>|</li>
</ul>

                <ul className="nav-item">
               <li >
                  <Link to={'/AdminHomePage'} className="nav-link">Admin</Link>
>>>>>>> 323566300f46102d505e090996971ed1f0b3731b
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">    
                <li>              
                <Link to={'/CommentHomePage'} className="nav-link">Comment</Link>
                </li>
<<<<<<< HEAD
                <li className="nav-item">
                  <Link to={'/ContractHomePage'} className="nav-link">Contract</Link>
=======
                <li>|</li>
                </ul>
                <ul className="nav-item">
            <li >
                  <Link to={'/Contract'} className="nav-link">Contract</Link>
>>>>>>> 323566300f46102d505e090996971ed1f0b3731b
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">
                <li>
                  <Link to={'/ExternalEntitiesHomePage'} className="nav-link">External Entities</Link>
                </li>
<<<<<<< HEAD
                <li className="nav-item">
                  <Link to={'/LawyerHomePage'} className="nav-link">Lawyer</Link>
=======
                <li>|</li>
                </ul>
                
                <ul className="nav-item">
                <li >
                  <Link to={'/Lawyer'} className="nav-link">Lawyer</Link>
>>>>>>> 323566300f46102d505e090996971ed1f0b3731b
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">
                <li >
                  <Link to={'/NotificationHomePage'} className="nav-link">Notification</Link>
                </li>
<<<<<<< HEAD
                <li className="nav-item">
                  <Link to={'/PaymentHomePage'} className="nav-link">Payment</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/ReviewerHomePage'} className="nav-link">Reviewer</Link>
=======
                <li>|</li>
                </ul>
                <ul className="nav-item">
                <li >
                  <Link to={'/Payment'} className="nav-link">Payment</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">
                <li>
                  <Link to={'/Reviewer'} className="nav-link">Reviewer</Link>
                </li>
                <li>|</li>
                </ul>
                <ul className="nav-item">
                <li >
                  <Link to={'/SSC'} className="nav-link">SSC</Link>
>>>>>>> 323566300f46102d505e090996971ed1f0b3731b
                </li>
                <li>|</li>
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

                   
                {/* <ul className="nav-item">
                <li >
            <Tab icon={<PhoneIcon />} label="Contact Us" />
             </li>
             </ul>
             */}
 </Tabs>
          </AppBar>
       
               
               


          
   

          <Switch>
              <Route exact path='/SPCHomePage' component={ SPCHomePage } />
<<<<<<< HEAD
              <Route exact path='/SSCHomePage' component={ SSCHomePage } />
              <Route exact path='/Admin' component={ Admin} />
              <Route exact path='/Comment' component={ Comment } /> 
              <Route exact path='/ExternalEntities' component={ ExternalEntities } /> 
              <Route exact path='/Investor' component={ Investor } />
              <Route exact path='/LawyerHomePage' component={ LawyerHomePage} />
              <Route exact path='/Notification' component={ Notification } /> 
              <Route exact path='/PaymentHomePage' component={ PaymentHomePage } /> 
              <Route exact path='/ReviewerHomePage' component={ ReviewerHomePage } />
              <Route exact path='/ContractHomePage' component={ContractHomePage} />
              <Route exact path='/AboutUs' component={AboutUs} />
=======
              <Route exact path='/AdminHomePage' component={ Admin} />
              <Route exact path='/CommentHomePage' component={ Comment } /> 
              <Route exact path='/ExternalEntitiesHomePage' component={ ExternalEntities } /> 
              <Route exact path='/Investor' component={ Investor } />
              <Route exact path='/Lawyer' component={ Lawyer} />
              <Route exact path='/NotificationHomePage' component={ Notification } /> 
              <Route exact path='/Payment' component={ Payment } /> 
              <Route exact path='/Reviewer' component={ Reviewer } />
              <Route exact path='/SSC' component={ SSC} />
              <Route exact path='/Contract' component={Contract} />
              <Route exact path='/AboutUs' component={ AboutUs} />
>>>>>>> 323566300f46102d505e090996971ed1f0b3731b
              <Route exact path='/ContactUs' component={ContactUs} />
             

              <Route exact path='/Login' component={Login} />
              <Route exact path='/Register' component={Register} />
              

              <Route exact path='/Workspace' component={Workspace} />
              <Route exact path='/Form' component={Form} />
              

             <Route exact path='/Forms' component={Forms} />
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

