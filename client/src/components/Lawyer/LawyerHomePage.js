import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Contract from "./Lawyer";
import Edit from "./EditLawyer";
import SPC from "../SPC/CreatingSPCForm";
import SSC from "../SSC/CreatingSSCForm";
import Workspace from "./Workspace";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import "./Lawyer.css";
import hana from "./myssc";
import sama from "./myspc";
export default class LawyerHomePage extends Component {
  state = {
    anchorEl: null
  };
  handleClick = event => {
    //event.preventDefault();
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
                    Edit Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/workspace"} className="nav-link">
                    Workspace
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
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/read" component={Contract} />
            <Route exact path="/NewSPC" component={SPC} />
            <Route exact path="/NewSSC" component={SSC} />
            <Route exact path="/workspace" component={Workspace} />
            <Route exact path="/myssc" component={hana} />
            <Route exact path="/myspc" component={sama} />
          </Switch>
        </div>
      </Router>
    );
  }
}
