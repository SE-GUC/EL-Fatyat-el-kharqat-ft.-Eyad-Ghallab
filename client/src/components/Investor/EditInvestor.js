import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  textField: {
    flexBasis: 200
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});
class EditInvestor extends Component {
  constructor() {
    super();
    this.handlebithdateChange = this.handlebithdateChange.bind(this);
    this.handlecityChange = this.handlecityChange.bind(this);
    this.handlecountryChange = this.handlecountryChange.bind(this);
    this.handleemailChange = this.handleemailChange.bind(this);
    this.handlegenderChange = this.handlegenderChange.bind(this);
    this.handlejobtitleChange = this.handlejobtitleChange.bind(this);
    this.handlemobilenumberChange = this.handlemobilenumberChange.bind(this);
    this.handlenameChange = this.handlenameChange.bind(this);
    this.handlenationalityChange = this.handlenationalityChange.bind(this);
    this.handlepasswordChange = this.handlepasswordChange.bind(this);
    this.handleusernameChange = this.handleusernameChange.bind(this);
    this.handlenationalidChange=this.handlenationalidChange.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      Investors: [],
      password: "",
      name: "",
      email: "",
      username: "",
      nationality: "",
      gender: "",
      birthdate: "",
      city: "",

      country: "",
      jobtitle: "",

      mobilenumber: "",
      nationalid:"",
      investors: []
    };
  }
  componentDidMount() {
    fetch("/api/investors/")
      .then(res => res.json())
      .then(investors =>
        this.setState({ Investors: investors.data }, () =>
          console.log("the investors", this.state.Investors)
        )
      );
   
  }
  handlenameChange(e) {
    this.setState({ name: e.target.value });
  }
  handlepasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handleemailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlejobtitleChange(e) {
    this.setState({ jobtitle: e.target.value });
  }
  handlecityChange(e) {
    this.setState({ city: e.target.value });
  }
  handlecountryChange(e) {
    this.setState({ country: e.target.value });
  }
  handleusernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handlenationalityChange(e) {
    this.setState({ nationality: e.target.value });
  }
  handlegenderChange(e) {
    this.setState({ gender: e.target.value });
  }
  handlebithdateChange(e) {
    this.setState({ birthdate: e.target.value });
  }
  handlemobilenumberChange(e) {
    this.setState({ mobilenumber: e.target.value });
  } 
  handlenationalidChange(e) {
    this.setState({ nationalid: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  update() {
    console.log(this.state.username);
    let databody;
    if (this.state.name !== "") {
      databody = { name: this.state.name };
    }
    if (this.state.password !== "") {
      databody = { password: this.state.password };
    }

    if (this.state.email !== "") {
      databody = { email: this.state.email };
    }
    if (this.state.username !== "") {
      databody = { username: this.state.username };
    }
    if (this.state.nationality !== "") {
      databody = { nationality: this.state.nationality };
    }
    if (this.state.gender !== "") {
      databody = { gender: this.state.gender };
    }
    if (this.state.birthdate !== "") {
      databody = { birthdate: this.state.birthdate };
    }
    if (this.state.city !== "") {
      databody = { city: this.state.city };
    }
    if (this.state.country !== "") {
      databody = { country: this.state.country };
    }
    if (this.state.jobtitle !== "") {
      databody = { jobtitle: this.state.jobtitle };
    }
    if (this.state.mobilenumber !== "") {
      databody = { mobilenumber: this.state.mobilenumber };
    }
    if (this.state.nationalid !== "") {
      databody = { nationalid: this.state.nationalid };
    }
    console.log(this.state.username);
    return fetch(
      "/api/investors/" + localStorage.getItem("userid"),
      {
        method: "PUT",
        body: JSON.stringify(databody),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Edit Your Profile</h3>
        <form onSubmit={this.handleSubmit}>
        <TextField
              id="standard-name-input"
              label="Name"
              type="text"
              margin="normal"
              value={this.state.name}
              onChange={this.handlenameChange.bind(this)} 
            />
            <br />
            <TextField
              id="standard-username-input"
              label="UserName"
              type="text"
              margin="normal"
              value={this.state.username}
              onChange={this.handleusernameChange.bind(this)} 
            />
            <br />
            <TextField
              id="standard-Email-input"
              label="Email"
              type="Email"
              margin="normal"
              value={this.state.email}
              onChange={this.handleemailChange.bind(this)} 
            />
            <br />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              value={this.state.password}
              onChange={this.handlepasswordChange.bind(this)} 
            />
            <br />
            <TextField
              id="standard-nationality-input"
              label="Nationality"
              type="text"
              margin="normal"
              value={this.state.nationality}
              onChange={this.handlenationalityChange.bind(this)} 
            />
            <br />
            <TextField
              id="standard-gender-input"
              label="Gender"
              type="gender"
              margin="normal"
              value={this.state.gender}
              onChange={this.handlegenderChange.bind(this)} 
            />{" "}
             <br />
            <TextField
              id="standard-birthdate-input"
              type="date"
              margin="normal"
              value={this.state.birthdate}
              onChange={this.handlebithdateChange.bind(this)} 
            />{" "}
            <br />
            <TextField
              id="standard-city-input"
              label="City"
              type="text"
              margin="normal"
              value={this.state.city}
              onChange={this.handlecityChange.bind(this)} 
            />{" "}
             <br />
             <TextField
              id="standard-country-input"
              label="Country"
              type="text"
              margin="normal"
              value={this.state.country}
              onChange={this.handlecountryChange.bind(this)} 
            />{" "}
             <br />
             <TextField
              id="standard-jobtitle-input"
              label="Job Title"
              type="text"
              margin="normal"
              value={this.state.jobtitle}
              onChange={this.handlejobtitleChange.bind(this)} 
            />{" "}
             <br />
             <TextField
              id="standard-mobilenumber-input"
              label="Mobile Number"
              type="text"
              margin="normal"
              value={this.state.mobilenumber}
              onChange={this.handlemobilenumberChange.bind(this)} 
            />{" "}
             <br />
             <TextField
              id="standard-nationalid-input"
              label="National ID"
              type="text"
              margin="normal"
              value={this.state.nationalid}
              onChange={this.handlenationalidChange.bind(this)} 
            />{" "}
             <br />
            
            
          <button
            onClick={() => {
              this.update();
            }}
          >
            {" "}
            Update
          </button>
        </form>
      </div>
    );
  }
}
export default withStyles(styles)(EditInvestor);
