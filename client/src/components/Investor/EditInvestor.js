import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

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
    //   var int = this.state.investors[1];
    // console.log (int)
    //  // res.json({data: this.state.investors})
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

  handleSubmit(e) {
    e.preventDefault();
  }
  update() {
    // e.preventDefault();
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
    console.log(this.state.username);
    return fetch(
      "http://localhost:5000/api/Investors/" + localStorage.getItem("userid"),
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
        <h3 align="center">Investor</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.name}
              onChange={this.handlenameChange}
            />
          </label>
          <br />
          <label>
            password
            <input
              type="text"
              name="password"
              value={this.password}
              onChange={this.handlepasswordChange}
            />
          </label>
          <br />
          <label>
            email
            <input
              type="text"
              name="email"
              value={this.email}
              onChange={this.handleemailChange}
            />
          </label>
          <br />
          <label>
            username
            <input
              type="text"
              name="username"
              value={this.username}
              onChange={this.handleusernameChange}
            />
          </label>
          <br />
          <label>
            nationality
            <input
              type="text"
              name="nationality"
              value={this.nationality}
              onChange={this.handlenationalityChange}
            />
          </label>
          <br />
          <label>
            gender
            <input
              type="text"
              name="gender"
              value={this.gender}
              onChange={this.handlegenderChange}
            />
          </label>
          <br />
          <label>
            birthdate
            <input
              type="text"
              name="birthdate"
              value={this.birthdate}
              onChange={this.handlebithdateChange}
            />
          </label>
          <br />
          <label>
            city
            <input
              type="text"
              name="city"
              value={this.city}
              onChange={this.handlecityChange}
            />
          </label>
          <br />
          <label>
            country
            <input
              type="text"
              name="country"
              value={this.country}
              onChange={this.handlecountryChange}
            />
          </label>
          <br />
          <label>
            jobtitle
            <input
              type="text"
              name="jobtitle"
              value={this.jobtitle}
              onChange={this.handlejobtitleChange}
            />
          </label>
          <br />
          <label>
            mobilenumber
            <input
              type="text"
              name="mobilenumber"
              value={this.mobilenumber}
              onChange={this.handlemobilenumberChange}
            />
          </label>
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
