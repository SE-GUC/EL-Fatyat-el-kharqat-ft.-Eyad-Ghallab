import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Payment from './Payment.js';
import EditPayment from './EditPayment';
import DeletePayment from './DeletePayment';
import CreatingPayment from './CreatingPayment';



export default class PaymentHomePage extends Component {
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
                    <Link to={'/create'} className="nav-link">Create</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/edit'} className="nav-link">Edit</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/delete'} className="nav-link">Delete </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/read'} className="nav-link">Payments</Link>
                  </li>
                </ul>
              </div>
            </nav> <br/>
            <h2>Welcome to GAFI</h2> <br/>
            <Switch>
                <Route exact path='/create' component={ CreatingPayment } />
                <Route exact path='/edit' component={ EditPayment } />
                <Route exact path='/delete' component={ DeletePayment} /> 
                <Route exact path='/read' component={ Payment } /> 
            </Switch>
          </div>
        </Router>
      );
    }
  }
  
  
  