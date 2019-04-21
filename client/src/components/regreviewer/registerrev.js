import React, { Component } from "react";
import superagent from "superagent";
//import "./Register.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

class registerrev extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      username: "",
      YearsOfExperience: "",
      gender: ""
    };
  }

  handleemailChanged(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChanged(event) {
    this.setState({ password: event.target.value });
  }

  handlenameChanged(event) {
    this.setState({ name: event.target.value });
  }
  handleusernameChanged(event) {
    this.setState({ username: event.target.value });
  }

  handleYearsOfExperienceChanged(event) {
    this.setState({ YearsOfExperience: event.target.value });
  }

  handlegenderChanged(event) {
    this.setState({ gender: event.target.value });
  }

  HandleButtonClick() {
    this.setState();
  }

  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   })
  // }
  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to='/Investor' />
  //   }
  // }

  submitForm(event) {
    event.preventDefault();
    superagent
      .post("/api/Reviewer/register")
      .send({
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
        name: this.state.name,
        yearsOfExperience: this.state.YearsOfExperience,
        gender: this.state.gender
      })
      .end((err, res) => {
        if (err) {
          this.setState({ errorMessage: "Registeration failed" });
          return;
        }
        console.log("res.body:", res.body);
        localStorage.setItem("token", res.body.token);
        //this.setState();
        this.forceUpdate();
      });
  }

  isAuthenticated() {
    const token = localStorage.getItem("token");
    if (token != null) {
      return true;
    }
    return false;
  }
  render() {
    console.log(this.state);
    //{this.renderRedirect()}
    const isAlreadyAuthenticated = this.isAuthenticated();

    return (
      <div className="Register">
        {isAlreadyAuthenticated ? (
          <Redirect to={{ pathname: "/SignIn" }} />
        ) : (
          <form onSubmit={this.submitForm.bind(this)}>
            <h2>Register Page</h2>
            <TextField
              id="standard-name-input"
              label="name"
              type="name"
              margin="normal"
              value={this.state.name}
              onChange={this.handlenameChanged.bind(this)}
            />{" "}
            <br />
            <TextField
              id="standard-username-input"
              label="username"
              type="username"
              margin="normal"
              value={this.state.username}
              onChange={this.handleusernameChanged.bind(this)}
            />{" "}
            <br />
            <TextField
              id="standard-Email-input"
              label="Email"
              type="Email"
              margin="normal"
              value={this.state.email}
              onChange={this.handleemailChanged.bind(this)}
            />{" "}
            <br />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              value={this.state.password}
              onChange={this.handlePasswordChanged.bind(this)}
            />
            <br />
            <TextField
              id="standard-YearsOfExperience-input"
              label="YearsOfExperience"
              type="YearsOfExperience"
              margin="normal"
              value={this.state.YearsOfExperience}
              onChange={this.handleYearsOfExperienceChanged.bind(this)}
            />{" "}
            <br />
            <TextField
              id="standard-gender-input"
              label="gender"
              type="gender"
              margin="normal"
              value={this.state.gender}
              onChange={this.handlegenderChanged.bind(this)}
            />{" "}
            <br />
            <Button variant="contained" color="primary" type="submit">
              Register
            </Button>
          </form>
        )}
      </div>
    );
  }
}
export default registerrev;
