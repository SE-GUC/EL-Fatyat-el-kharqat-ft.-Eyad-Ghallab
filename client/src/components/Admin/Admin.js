import React, { Component } from "react";
class Admin extends Component {
  constructor() {
    super();
    this.state = {
      admins: [],
     
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
 

  render() {
    //JSON.stringify(this.state.ad);
    return (
      <div>
        <h2>My profile</h2>
     
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
