import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SPCHomePage from './components/SPC/SPCHomePage';
//import Investor from './components/Investor/Investor';
// import CreatingSPCForm from './components/SPC/CreatingSPCForm';
// import EditSPC from './components/SPC/EditSPC';
// import DeleteSPC from './components/SPC/DeleteSPC';
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
                {/* <li className="nav-item">
                  <Link to={'/edit'} className="nav-link">Edit</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/delete'} className="nav-link">Delete a Form</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/read'} className="nav-link">All SPC Forms</Link>
                </li> */}
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to GAFI</h2> <br/>
          <Switch>
              <Route exact path='/SPCHomePage' component={ SPCHomePage } />
              {/* <Route path='/edit/:id' component={ EditSPC } />
              <Route exact path='/delete' component={ DeleteSPC } /> 
              <Route exact path='/read' component={ SPC } />  */}
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
