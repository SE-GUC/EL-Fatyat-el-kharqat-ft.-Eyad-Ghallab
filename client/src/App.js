import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SPCHomePage from './components/SPC/SPCHomePage';
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

class App extends Component {

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
                  <Link to={'/SPCHomePage'} className="nav-link">SPC</Link>
                </li>

                <li className="nav-item">
                  <Link to={'/SSCHomePage'} className="nav-link">SSC</Link>
                </li>
                
                <li className="nav-item">
                  <Link to={'/Admin'} className="nav-link">Admin</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Comment'} className="nav-link">Comment</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/ContractHomePage'} className="nav-link">Contract</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/ExternalEntities'} className="nav-link">External Entities</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Investor'} className="nav-link">Investor</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/LawyerHomePage'} className="nav-link">Lawyer</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Notification'} className="nav-link">Notification</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/PaymentHomePage'} className="nav-link">Payment</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/ReviewerHomePage'} className="nav-link">Reviewer</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/AboutUs'} className="nav-link">AboutUs</Link>
                </li>
                <li className="nav-item">
                        <Link to={'/ContactUs'} className="nav-link">ContactUs</Link>
                      </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to GAFI</h2> <br/>
   


          <Switch>
              <Route exact path='/SPCHomePage' component={ SPCHomePage } />
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
              <Route exact path='/ContactUs' component={ContactUs} />

          </Switch>


        </div>
      </Router>

    );
            
  }
  
}


export default App;

