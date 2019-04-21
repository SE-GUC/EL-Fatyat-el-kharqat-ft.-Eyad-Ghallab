import React, { Component } from "react";

class mycompSPC extends Component {
  constructor() {
    super();
    this.state = {
      SPC: [],
      isSPC: false
    };
  }

  componentDidMount() {
    console.log("hiiii");

    fetch("/api/SPC/" + localStorage.getItem("nationalid") + "/SPC")
      .then(res => res.json())
      .then(spc =>
        this.setState({ SPC: spc.data }, () =>
          console.log("My SPC Comapnies", this.state.SPC)
        )
      );
    if (this.state.SPC != undefined) {
      this.setState.isSPC = true;
    }
  }
  render() {
    // const pro = this.getpro();
    console.log(this.state.investors);
    // const isscc = this.state.isSSC;
    return (
      <div>
        {this.state.isSPC ? (
          <form>
            <h2>My Companies</h2>
            <h1> Facility name: {this.state.SPC.Facility_name} </h1>
            <br />
            <h1>
              {" "}
              Facility name in English: {this.state.SPC.Facility_nameinenglish}
            </h1>
            <br />
            <h1> Governorate: {this.state.SPC.Governorate}</h1>
            <br />
            <h1>City: {this.state.SPC.City}</h1>
            <br />
            <h1>Facility Address: {this.state.SPC.Facility_Address}</h1>
            <br />
            <h1>
              {" "}
              Facility Phone Number:: {this.state.SPC.Facility_Phone_Number}
            </h1>
            <br />
            <h1> Fax: {this.state.SPC.Fax}</h1>
            <br />
            <h1> Capital Currency: {this.state.SPC.Capital_Currency}</h1>
            <br />
            <h1>capital: {this.state.SPC.capital}</h1>
            <br />
            <h1>investorname: {this.state.SPC.investorname}</h1>
            <br />
            <h1> Gender: {this.state.SPC.Gender}</h1>
            <br />
            <h1> Nationality: {this.state.SPC.Nationality}</h1>
            <br />
            <h1> ypeOf IdentityProof: {this.state.SPC.ypeOf_IdentityProof}</h1>
            <br />
            <h1> investor nationalid: {this.state.SPC.investor_nationalid}</h1>
            <br />
            <h1> Birth Date: {this.state.SPC.BirthDate}</h1>
            <br />
            <h1> Phone Number: {this.state.SPC.Phone_Number}</h1>
            <br />
            <h1> Investor Fax: {this.state.SPC.Investor_Fax}</h1>
            <br />
            <h1> email: {this.state.SPC.email}</h1>
            <br />
            <h1> Investor Address: {this.state.SPC.Investor_Address}</h1>
            <br />
            <h1> Form Date: {this.state.SPC.Form_Date}</h1>
            <br />
            <h1> Locked: {this.state.SPC.Locked}</h1>
            <br />
            <h1> Status : {this.state.SPC.Status}</h1>
            <br />
            <h1>
              {" "}
              is the external entities notified:{" "}
              {this.state.SPC.is_the_external_entities_notified}
            </h1>
          </form>
        ) : (
          <h1> You dont have any Companies yet</h1>
        )}
      </div>
    );
  }
}
export default mycompSPC;
