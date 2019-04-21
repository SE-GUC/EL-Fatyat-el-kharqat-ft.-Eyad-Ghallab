import React, { Component } from "react";

class myspc extends Component {
  constructor() {
    super();
    this.state = {
      SPC: [],
      isSPC: false
    };
  }

  componentDidMount() {
    // e.preventDefault();
    fetch("/api/SPC/" + localStorage.getItem("id"))
      .then(res => res.json())
      .then(spc =>
        this.setState({ SPC: spc.data }, () =>
          console.log("My SPC Comapnies", this.state.SPC)
        )
      );
    if (this.state.SPC != []) {
      this.setState({ isSPC: true });
    }

    console.log(this.state.isSPC);
  }

  Approve(e) {
    e.preventDefault();
    console.log("why the hell");
    var databody = { Lawyer_review: "accepted" };
    console.log(databody);

    return fetch("/api/SPC/" + localStorage.getItem("id"), {
      method: "PUT",
      body: JSON.stringify(databody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }
  Reject(e) {
    e.preventDefault();
    var databody = { Lawyer_review: "rejected" };
    return fetch("/api/SPC/" + localStorage.getItem("id"), {
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
    // const pro = this.getpro();
    //console.log(this.state.investors);
    return (
      <div>
        {this.state.isSPC ? (
          <form>
            <h2>The Company</h2>
            Company name: {this.state.SPC.Facility_name}
            <br /> Company name in English:{" "}
            {this.state.SPC.Facility_nameinenglish}
            <br />
            Governorate: {this.state.SPC.Governorate}
            <br />
            City: {this.state.SPC.City}
            <br />
            Company Address: {this.state.SPC.Facility_Address}
            <br /> Company Phone Number:: {this.state.SPC.Facility_Phone_Number}
            <br />
            Fax: {this.state.SPC.Fax}
            <br />
            Capital Currency: {this.state.SPC.Capital_Currency}
            <br />
            capital: {this.state.SPC.capital}
            <br />
            investor name: {this.state.SPC.investorname}
            <br />
            Gender: {this.state.SPC.Gender}
            <br />
            Nationality: {this.state.SPC.Nationality}
            <br /> Type of IdentityProof: {this.state.SPC.TypeOf_IdentityProof}
            <br />
            investor nationalid: {this.state.SPC.investor_nationalid}
            <br />
            Birth Date: {this.state.SPC.BirthDate}
            <br />
            Phone Number: {this.state.SPC.Phone_Number}
            <br />
            Investor Fax: {this.state.SPC.Investor_Fax}
            <br />
            email: {this.state.SPC.email}
            <br />
            Investor Address: {this.state.SPC.Investor_Address}
            <br />
            Status : {this.state.SPC.Status}
            <br />
            Form Date: {this.state.SPC.Form_Date}
            <br />
            Lawyer_review: {this.state.SPC.Lawyer_review}
            <br />
            <button
              onClick={() => {
                this.Approve();
              }}
            >
              Accept
            </button>
            <button
              onClick={() => {
                this.Reject();
              }}
            >
              Reject
            </button>
          </form>
        ) : (
          <h1> this is so bad</h1>
        )}
      </div>
    );
  }
}
export default myspc;
