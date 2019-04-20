import React, { Component } from "react";
import "./Admin.css";
class Admin extends Component {
  constructor() {
    super();
    this.state = {
      admins: [""],
      ad: []
    };
  }
  componentDidMount() {
    fetch("/api/Admin/" + localStorage.getItem("userid"))
      .then(res => res.json())
      .then(Admin =>
        this.setState({ admins: Admin.data }, () =>
          console.log("Admins fetched", this.state.admins)
        )
      );
  }
  get() {
    fetch("/api/Admin/" + localStorage.getItem("userid"))
      .then(res => res.json())
      .then(Admin =>
        this.setState({ ad: Admin.data }, () =>
          console.log("Admins fetched", this.state.ad)
        )
      );
  }

  render() {
    //JSON.stringify(this.state.ad);
    return (
      <div>
        <h2>My profile</h2>
        {/* <ul>
          {this.state.admins.map(admin => (
            <li key={admin._id}> {this.admin}</li>
          ))}
        </ul> */}
        Name: {this.state.admins.name}
        <br />
        Address: {this.state.admins.address}
        <br />
        Email: {this.state.admins.email}
        <br />
        Username: {this.state.admins.username}
      </div>
    );
  }
}
export default Admin;
