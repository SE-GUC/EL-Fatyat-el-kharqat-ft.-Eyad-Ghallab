import React, { Component } from "react";

class Investor extends Component {
  constructor() {
    super();
    this.state = {
      investors: []
    };
  }

  componentDidMount() {
    console.log("hiiii");
    fetch("/api/Investors/" + localStorage.getItem("userid"))
      .then(res => res.json())
      .then(inv =>
        this.setState({ investors: inv.data }, () =>
          console.log("the investors", this.state.investors)
        )
      );

   
  }
  render() {
    console.log(this.state.investors);
    return (
      <div>
        <h2>My Profile</h2>
        Name: {this.state.investors.name}
        <br />
        Username: {this.state.investors.username}
        <br />
        Email: {this.state.investors.email}
        <br />
        Nationality: {this.state.investors.nationality}
        <br />
        Gender: {this.state.investors.gender}
        <br />
        Birthdate: {this.state.investors.birthdate}
        <br />
        Gender: {this.state.investors.gender}
        <br />
        City: {this.state.investors.city}
        <br />
        Country: {this.state.investors.country}
        <br />
        Jobtitle: {this.state.investors.jobtitle}
        <br />
        Mobilenumber: {this.state.investors.mobilenumber}
      </div>
    );
  }
}
export default Investor;
