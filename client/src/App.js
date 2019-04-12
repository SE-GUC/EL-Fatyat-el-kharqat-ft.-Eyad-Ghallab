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
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to GAFI</h2> <br/>
          <h3>About Us</h3> <br/>
          <label>
          GAFI is an affiliate of the Ministry of Investment (MOI) and the principal government body regulating and facilitating investment in Egypt.<br/>
Although the authority retains its traditional regulatory powers, GAFI today is an effective, proactive investment promotion agency with promotion, facilitation, business matchmaking, Egyptian expatriates, events, investor aftercare, and research and market intelligence functions.<br/>
As Egypt's one-stop shop for investment, GAFI eases the way for global investors looking to harness opportunities presented by Egypt's fast-growing domestic economy and the nation's robust competitive advantages as an export hub for Europe, the Arab world and Africa.
<br/>
GAFI's investor care officers also ensure that client feedback is channeled into government agencies with a view towards continuously enhancing and reforming Egypt's investment climate.<br/> In addition to promoting Egypt's investment opportunities in various sectors, <br/>GAFI is launching new initiatives aimed at promoting the investment climate in Egypt including the adoption of new investment regimes (investment zones and special economic zones) and the establishment of the SME Entrepreneurial Center and Fund (Bedaya).
</label>


<h4>OUR MISSION</h4>
<label>
"To enable and sustain Egypt's economic growth through investment promotion, facilitation, efficient business services and advocacy of investor friendly policies "
</label>

<h4>Contact us On:</h4>
<label>Adress:
  No. 3, Salah Salem st., Nasr City, Cairo, 11562, Egypt.
</label><br/>
<label>telephone number:
+202 240 55 452
</label><br/>
<label>FAX:
 16035</label>
 <br/>

 
 
 <form action="https://www.Facebook.com/">
         <button type="submit">Facebook<img src="" /></button>
      </form>


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

          </Switch>


        </div>
      </Router>

    );
            
  }
  
}


export default App;

