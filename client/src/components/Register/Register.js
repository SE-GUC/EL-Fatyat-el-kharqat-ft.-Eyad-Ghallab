import React, { Component } from "react";
import superagent from "superagent";
import "./Register.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      username: "",
      nationality: "",
      gender: "",
      birthdate: "",
      city: "",
      country: "",
      jobtitle: "",
      mobilenumber: "",
      NationalID: ""
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

  handlenationalityChanged(event) {
    this.setState({ nationality: event.target.value });
  }

  handlegenderChanged(event) {
    this.setState({ gender: event.target.value });
  }

  handlebirthdateChanged(event) {
    this.setState({ birthdate: event.target.value });
  }

  handlecityChanged(event) {
    this.setState({ city: event.target.value });
  }

  handlecountryChanged(event) {
    this.setState({ country: event.target.value });
  }

  handlejobtitleChanged(event) {
    this.setState({ jobtitle: event.target.value });
  }

  handlemobilenumberChanged(event) {
    this.setState({ mobilenumber: event.target.value });
  }
  handlenationalidChanged(event) {
    this.setState({ NationalID: event.target.value });
  }
  HandleButtonClick() {
    this.setState();
  }

  submitForm(event) {
    event.preventDefault();
    superagent
      .post("/api/investors/register")
      .send({
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
        name: this.state.name,
        nationality: this.state.nationality,
        gender: this.state.gender,
        birthdate: this.state.birthdate,
        city: this.state.city,
        country: this.state.country,
        jobtitle: this.state.jobtitle,
        mobilenumber: this.state.mobilenumber,
        nationalid: this.state.NationalID
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
      <body>
        <div class="wrap">
          {isAlreadyAuthenticated ? (
            <Redirect to={{ pathname: "/SignIn" }} />
          ) : (
            <form onSubmit={this.submitForm.bind(this)}>
              <h3>Sign Up Here</h3>
              <div class="textbox">
                <input
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handlenameChanged.bind(this)}
                  required
                />
              </div>
              <div class="textbox">
                <input
                  type="text"
                  placeholder="UserName"
                  value={this.state.username}
                  onChange={this.handleusernameChanged.bind(this)}
                  required
                />
              </div>
              <div class="textbox">
                <input
                  type="Email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleemailChanged.bind(this)}
                  required
                />
              </div>
              <div class="textbox">
                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePasswordChanged.bind(this)}
                  required
                />
              </div>
              <div class="textbox">
                <input
                  type="text"
                  placeholder="Nationality"
                  value={this.state.nationality}
                  onChange={this.handlenationalityChanged.bind(this)}
                  required
                />
              </div>
              <div class="textbox">
                <input
                  type="text"
                  placeholder="Gender"
                  value={this.state.gender}
                  onChange={this.handlegenderChanged.bind(this)}
                  required
                />
              </div>
              <div class="textbox">
                <input
                  type="date"
                  placeholder="Birthdate"
                  value={this.state.birthdate}
                  onChange={this.handlebirthdateChanged.bind(this)}
                  required
                />
              </div>
              <div class="textbox">
                <input
                  type="text"
                  placeholder="City"
                  value={this.state.city}
                  onChange={this.handlecityChanged.bind(this)}
                  required
                />
              </div>
              <div class="textbox">
                <input
                  type="text"
                  placeholder="Country"
                  value={this.state.country}
                  onChange={this.handlecountryChanged.bind(this)}
                  required
                />
              </div>
              <div class="textbox">
                <input
                  type="text"
                  placeholder="Job Title"
                  value={this.state.jobtitle}
                  onChange={this.handlejobtitleChanged.bind(this)}
                  required
                />
              </div>
              <div class="textbox">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  value={this.state.mobilenumber}
                  onChange={this.handlemobilenumberChanged.bind(this)}
                  required
                />
              </div>
              <div class="textbox">
                <input
                  type="text"
                  placeholder="NationalID"
                  value={this.state.NationalID}
                  onChange={this.handlenationalidChanged.bind(this)}
                  required
                />
              </div>
              <Button variant="contained" color="primary" type="submit" >
              Register
            </Button>
            </form>
          )}
        </div>
      </body>
    );
  }
}
export default Register;
