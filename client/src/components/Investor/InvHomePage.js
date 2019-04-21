import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Investor from "./Investor";
import EditInvestor from "./EditInvestor";
import SPC from "../SPC/CreatingSPCForm";
import SSC from "../SSC/CreatingSSCForm";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import ViewSPC from "./mycompSPC.js";
import ViewSSC from "./mycompSSC.js";
export default class InvHomePage extends Component {
  state = {
    anchorEl: null
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;
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
                  <Link to={"/edit"} className="nav-link">
                    Edit My Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/ViewSPC"} className="nav-link">
                    My SPC Companies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/ViewSSC"} className="nav-link">
                    My SSC Companies
                  </Link>
                </li>
                <li className="nav-item">
                  <Button
                    className="nav-link"
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                  >
                    New Company
                  </Button>
                  <Menu
                    className="nav-link"
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                  >
                    <Link
                      to={"/NewSPC"}
                      onClick={this.handleClose}
                      className="nav-link"
                    >
                      Sole Propretorship Company
                    </Link>
                    <Link
                      to={"/NewSSC"}
                      onClick={this.handleClose}
                      className="nav-link"
                    >
                      Single Shareholder Company
                    </Link>
                  </Menu>
                </li>
              </ul>
            </div>
          </nav>{" "}
          <br />
          <Switch>
            <Route exact path="/read" component={Investor} />
            <Route exact path="/edit" component={EditInvestor} />
            <Route exact path="/NewSPC" component={SPC} />
            <Route exact path="/NewSSC" component={SSC} />
            <Route exact path="/ViewSPC" component={ViewSPC} />
            <Route exact path="/ViewSSC" component={ViewSSC} />
          </Switch>
        </div>
      </Router>
    );
  }
}
