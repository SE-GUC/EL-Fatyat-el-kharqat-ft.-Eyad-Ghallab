import React, { Component } from "react";
import superagent from "superagent";
import "./Login.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isinvestor: false,
      islawyer: false,
      isreviewer: false,
      isadmin: false,
      type: "",
      id: "",
      nationalid: ""
    };
  }

  handleemailChanged(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChanged(event) {
    this.setState({ password: event.target.value });
  }

  HandleButtonClick() {
    this.setState();
  }

  submitForm(event) {
    event.preventDefault();
    superagent
      .post("/api/user/login")
      .send({ email: this.state.email, password: this.state.password })
      .end((err, res) => {
        if (err) {
          this.setState({ errorMessage: "Authentication failed" });
          return;
        }
        console.log("res.body:", res.body);
        localStorage.setItem("token", res.body.token);
        //this.setState();
        this.forceUpdate();
      });
  }
  type() {
    fetch("/api/user/" + this.state.email)
      .then(res => res.json())
      .then(user =>
        this.setState(
          { type: user.data.type },
          this.setState(
            { id: user.data.id },
            this.setState({ nationalid: user.data.nationalid })
          )
        )
      );

    console.log(this.state.type);
    console.log(this.state.id);
    if (this.state.type === "investor") {
      this.setState({ isinvestor: true });
    } else if (this.state.type === "admin") {
      this.setState({ isadmin: true });
    } else if (this.state.type === "lawyer") {
      this.setState({ islawyer: true });
    } else if (this.state.type === "reviewer") {
      this.setState({ isreviewer: true });
    }

    localStorage.setItem("userid", this.state.id);
    localStorage.setItem("nationalid", this.state.nationalid);
  }

  isAuthenticated() {
    const token = localStorage.getItem("token");
    if (token && token.length > 10) {
      return true;
    }
    return false;
  }
  render() {
    console.log(this.state);
    //{this.renderRedirect()}
    const isAlreadyAuthenticated = this.isAuthenticated();
    return (
      <body>
        <div className="login-box">
          {isAlreadyAuthenticated && this.state.isinvestor ? (
            <Redirect to={{ pathname: "/InvHomePage" }} />
          ) : isAlreadyAuthenticated && this.state.isadmin ? (
            <Redirect to={{ pathname: "/AdminHomePage" }} />
          ) : isAlreadyAuthenticated && this.state.islawyer ? (
            <Redirect to={{ pathname: "/LawyerHomePage" }} />
          ) : isAlreadyAuthenticated && this.state.isreviewer ? (
            <Redirect to={{ pathname: "/ReviewerHomePage" }} />
          ) : (
            <form onSubmit={this.submitForm.bind(this)}>
              <h1>Login Page</h1>
              <div class="textbox">
                <i class="fa fa-user" aria-hidden="true" />

                <input
                  type="Email"
                  placeholder="Email"
                  name=""
                  value={this.state.email}
                  onChange={this.handleemailChanged.bind(this)}
                />
              </div>
              <div class="textbox">
                <i class="fa fa-lock" aria-hidden="true" />

                <input
                  type="password"
                  placeholder="Password"
                  name=""
                  value={this.state.password}
                  onChange={this.handlePasswordChanged.bind(this)}
                />
              </div>
              <input
                class="btn"
                type="submit"
                name=""
                value="Sign In"
                onClick={() => {
                  this.type();
                }}
              />
            </form>
          )}
        </div>
      </body>
    );
  }
}
export default Login;
