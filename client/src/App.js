import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SPCHomePage from './components/SPC/SPCHomePage';
import Admin from './components/Admin/Admin';
import Notification from './components/Notification/Notification';
import Reviewer from './components/Reviewer/Reviewer';
import Lawyer from './components/Lawyer/Lawyer';
import ExternalEntities from './components/ExternalEntities/ExternalEntities';
import Contract from './components/Contract/Contract';
import Payment from './components/Payment/Payment';
import Investor from './components/Investor/Investor';
import Comment from './components/Comment/Comment';
import SSC from './components/SSC/SSC';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
<<<<<<< HEAD
import Workspace from './components/Lawyer/Workspace';
=======
import Forms from './components/Reviewer/Forms';
>>>>>>> a857d59c7487b8550f76548fe742817ca54eea6d
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
                  <Link to={'/Admin'} className="nav-link">Admin</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Comment'} className="nav-link">Comment</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Contract'} className="nav-link">Contract</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/ExternalEntities'} className="nav-link">External Entities</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Investor'} className="nav-link">Investor</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Lawyer'} className="nav-link">Lawyer</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Notification'} className="nav-link">Notification</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Payment'} className="nav-link">Payment</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Reviewer'} className="nav-link">Reviewer</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/SSC'} className="nav-link">SSC</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/AboutUs'} className="nav-link">AboutUs</Link>
                </li>
                <li className="nav-item">
                        <Link to={'/ContactUs'} className="nav-link">ContactUs</Link>
                      </li>
<<<<<<< HEAD
                      <li className="nav-item">
                        <Link to={'/Workspace'} className="nav-link">Workspace</Link>
                      </li>
=======
                      {/* <li className="nav-item">
                        <Link to={'/Forms'} className="nav-link">Forms</Link>
                      </li> */}
>>>>>>> a857d59c7487b8550f76548fe742817ca54eea6d
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to GAFI</h2> <br/>
   


          <Switch>
              <Route exact path='/SPCHomePage' component={ SPCHomePage } />
              <Route exact path='/Admin' component={ Admin} />
              <Route exact path='/Comment' component={ Comment } /> 
              <Route exact path='/ExternalEntities' component={ ExternalEntities } /> 
              <Route exact path='/Investor' component={ Investor } />
              <Route exact path='/Lawyer' component={ Lawyer} />
              <Route exact path='/Notification' component={ Notification } /> 
              <Route exact path='/Payment' component={ Payment } /> 
              <Route exact path='/Reviewer' component={ Reviewer } />
              <Route exact path='/SSC' component={ SSC} />
              <Route exact path='/Contract' component={Contract} />
              <Route exact path='/AboutUs' component={AboutUs} />
              <Route exact path='/ContactUs' component={ContactUs} />
<<<<<<< HEAD
              <Route exact path='/Workspace' component={Workspace} />
=======
             <Route exact path='/Forms' component={Forms} />
>>>>>>> a857d59c7487b8550f76548fe742817ca54eea6d

          </Switch>


        </div>
      </Router>

    );
            
  }
  
}


export default App;

