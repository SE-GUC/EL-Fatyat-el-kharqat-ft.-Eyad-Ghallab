import React, { Component } from "react";
import logo from "./unnamed.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Admin from "./components/Admin/AdminHomePage";
import Investor from "./components/Investor/InvHomePage";
import LawyerHomePage from "./components/Lawyer/LawyerHomePage";
import ReviewerHomePage from "./components/Reviewer/ReviewerHomePage";
import SPC from "./components/SPC/CreatingSPCForm";
import SSC from "./components/SSC/CreatingSSCForm";
import NoSsr from "@material-ui/core/NoSsr";
import AppBar from "@material-ui/core/AppBar";

import "./App.css";
import Reviewer from "./components/Reviewer/Reviewer";
class App extends Component {
  render() {
    return (
      <header>
        <Router>
          <NoSsr>
            <div className="wrapper">
              <AppBar position="static">
                <div class="logo">
                  <img src={logo} alt="" />
                </div>
                <ul class="nav-area">
                  <li>
                    <Link to={"/"} className="nav-link">
                      Home
                    </Link>{" "}
                  </li>
                  <li>
                    <Link to={"/AboutUs"} className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to={"/ContactUs"} className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to={"/SignIn"} className="nav-link">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link to={"/SignUp"} className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </AppBar>
              <Switch>
                <Route exact path="/ContactUs" component={ContactUs} />
                <Route exact path="/AboutUs" component={AboutUs} />
                <Route exact path="/SignIn" component={Login} />
                <Route exact path="/SignUp" component={Register} />
                <Route exact path="/AdminHomePage" component={Admin} />
                <Route exact path="/InvHomePage" component={Investor} />
                <Route
                  exact
                  path="/ReviewerHomePage"
                  component={ReviewerHomePage}
                />
                <Route
                  exact
                  path="/LawyerHomePage"
                  component={LawyerHomePage}
                />
                <Route exact path="/LawyerHomePage" component={SPC} />
                <Route exact path="/LawyerHomePage" component={SSC} />
              </Switch>
            </div>
          </NoSsr>
        </Router>
      </header>
    );
  }
}
export default App;
