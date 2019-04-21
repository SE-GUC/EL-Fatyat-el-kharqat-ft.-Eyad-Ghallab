import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class EditReviewer extends Component {
  constructor() {
    super();
    this.handleName = this.handleName.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleYearsOfExperience = this.handleYearsOfExperience.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.update = this.update.bind(this);

    this.state = {
      password: "",
      email: "",
      username: "",
      gender: "",
      yearsOfExperience: "",
      name: "",
      reviewers: []
    };
  }
  componentDidMount() {
    fetch("/api/Reviewer/" + localStorage.getItem("userid"))
      .then(res => res.json())
      .then(Reviewer =>
        this.setState({ reviewers: Reviewer.data }, () =>
          console.log("Reviewer fetched", this.state.reviewers)
        )
      );
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleName(e) {
    this.setState({ name: e.target.value });
  }
  handlePassword(e) {
    this.setState({ password: e.target.value });
  }
  handleEmail(e) {
    this.setState({ email: e.target.value });
  }
  handleUsername(e) {
    this.setState({ username: e.target.value });
  }
  handleGender(e) {
    this.setState({ gender: e.target.value });
  }
  handleYearsOfExperience(e) {
    this.setState({ yearsOfExperience: e.target.value });
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
    if (this.state.yearsOfExperience !== "") {
      databody = { yearsOfExperience: this.state.yearsOfExperience };
    }
    if (this.state.gender !== "") {
      databody = { gender: this.state.gender };
    }

    console.log(this.state.username);
    return fetch("/api/Reviewer/" + localStorage.getItem("userid"), {
      method: "PUT",
      body: JSON.stringify(databody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">New Reviewer</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label> Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.handleName}
            />
          </div>

          <div className="form-group">
            <label>Password: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.handleEmail}
            />
          </div>

          <div className="form-group">
            <label>User Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.handleUsername}
            />
          </div>
          <div className="form-group">
            <label>yearsOfExperience: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.yearsOfExperience}
              onChange={this.handleYearsOfExperience}
            />
          </div>

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

export default EditReviewer;
