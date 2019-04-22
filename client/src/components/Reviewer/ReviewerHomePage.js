import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Reviewer from "./Reviewer.js";
import EditReviewer from "./EditReviewer";

import Forms from "./Forms";
import updating_Forms from "./updating_Forms";
import hana from "./myssc";
import sama from "./myspc";

export default class ReviewerHomePage extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/read"} className="nav-link">
                    My Profile
                  </Link>
                </li>


                <li className="nav-item">
                  <Link to={"/view"} className="nav-link">
                    Forms
                  </Link>
                </li>

                <Link to={"/edit"} className="nav-link">
                  Edit Profile
                </Link>

                <li className="nav-item">
                  <Link to={"/workspace"} className="nav-link">
                    Accepted Forms
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/status"} className="nav-link">
                    Workspace
                  </Link>
                </li>
              </ul>
            </div>
          </nav>{" "}
          <br />
         
          <Switch>
            
            <Route exact path="/edit" component={EditReviewer} />
           
            <Route exact path="/read" component={Reviewer} />
            <Route exact path="/view" component={Forms} />
            <Route exact path="/update" component={updating_Forms} />
            <Route exact path="/workspace" component={Forms} />
            <Route exact path="/status" component={updating_Forms} />
            <Route exact path="/myssc" component={hana} />
            <Route exact path="/myspc" component={sama} />
          </Switch>
        </div>
      </Router>
    );
  }
}
