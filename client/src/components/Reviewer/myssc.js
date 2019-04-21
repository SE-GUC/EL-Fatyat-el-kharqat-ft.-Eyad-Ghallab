import React, { Component } from "react";

class myssc extends Component {
  constructor() {
    super();
    this.state = {
      SSC: [],
      isSSC: false
    };
  }

  componentDidMount() {
    // e.preventDefault();
    fetch("/api/SSC/" + localStorage.getItem("sscid"))
      .then(res => res.json())
      .then(ssc =>
        this.setState({ SSC: ssc.data }, () =>
          console.log("My SSC Comapnies", this.state.SSC)
        )
      );
    if (this.state.SSC != []) {
      this.setState({ isSSC: true });
    }

    console.log(this.state.isSSC);
  }

  Approve(e) {
    e.preventDefault();
    console.log("why the hell");
    var databody = { Lawyer_review: "accepted" };
    console.log(databody);

    return fetch("/api/SSC/" + localStorage.getItem("sscid"), {
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
    return fetch("/api/SSC/" + localStorage.getItem("sscid"), {
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
        {this.state.isSSC ? (
          <form>
            <h2>The Company</h2>
            Company name: {this.state.SSC.Company_name}
            <br /> Company name in English:{" "}
            {this.state.SSC.Company_nameinenglish}
            <br />
            Governorate: {this.state.SSC.Governorate}
            <br />
            City: {this.state.SSC.City}
            <br />
            Company Address: {this.state.SSC.Company_Address}
            <br /> Company Phone Number:: {this.state.SSC.Company_Phone_Number}
            <br />
            Fax: {this.state.SSC.Fax}
            <br />
            Capital Currency: {this.state.SSC.Capital_Currency}
            <br />
            capital: {this.state.SSC.capital}
            <br />
            investor name: {this.state.SSC.investorname}
            <br />
            Gender: {this.state.SSC.Gender}
            <br />
            Nationality: {this.state.SSC.Nationality}
            <br /> Type of IdentityProof: {this.state.SSC.TypeOf_IdentityProof}
            <br />
            investor nationalid: {this.state.SSC.investor_nationalid}
            <br />
            Birth Date: {this.state.SSC.BirthDate}
            <br />
            Phone Number: {this.state.SSC.Phone_Number}
            <br />
            Investor Fax: {this.state.SSC.Investor_Fax}
            <br />
            email: {this.state.SSC.email}
            <br />
            Investor Address: {this.state.SSC.Address}
            <br />
            Status : {this.state.SSC.Status}
            <br />
            Form Date: {this.state.SSC.Form_Date}
            <br />
            Lawyer_review: {this.state.SSC.Lawyer_review}
            <br />
            BOD Name :{this.state.SSC.BOD_Name}
            <br />
            BOD_Gender: {this.state.SSC.BOD_Gender}
            <br />
            BOD_Nationality: {this.state.SSC.BOD_Nationality}
            <br />
            BOD_TypeofidentityProof: {this.state.SSC.BOD_TypeofidentityProof}
            <br />
            BOD_NationalID: {this.state.SSC.BOD_NationalID}
            <br />
            BOD_BirthDate: {this.state.SSC.BOD_BirthDate}
            <br />
            BOD_Address: {this.state.SSC.BOD_Address}
            <br />
            PositionInBOD: {this.state.SSC.PositionInBOD}
            <br />
           
          </form>
        ) : (
          <h1> this is so bad</h1>
        )}
      </div>
    );
  }
}
export default myssc;