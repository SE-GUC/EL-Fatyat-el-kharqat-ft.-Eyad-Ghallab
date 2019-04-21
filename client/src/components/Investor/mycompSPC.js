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
    fetch("/api/SPC/" + localStorage.getItem("nationalid") + "/SPC")
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
  render() {
    // const pro = this.getpro();
    console.log(this.state.investors);
    // const isscc = this.state.isSSC;
    return (
      <div>
        {this.state.isSPC ? (
          <form>
            <ul>
              {this.state.SPC.map(SPC => (
                <li key={SPC._id}>
                  {" "}
                  Facility name: {SPC.Facility_name}
                  <br />
                  Facility name in English: {SPC.Facility_nameinenglish}
                  <br />
                  Governorate: {SPC.Governorate}
                  <br />
                  City: {SPC.City}
                  <br />
                  Facility Address: {SPC.Facility_Address}
                  <br />
                  Facility Phone Number:: {SPC.Facility_Phone_Number}
                  <br />
                  Fax: {SPC.Fax}
                  <br />
                  Capital Currency: {SPC.Capital_Currency}
                  <br />
                  capital: {SPC.capital}
                  <br />
                  investorname: {SPC.investorname}
                  <br />
                  Gender: {SPC.Gender}
                  <br />
                  Nationality: {SPC.Nationality}
                  <br />
                  TypeOf IdentityProof: {SPC.TypeOf_IdentityProof}
                  <br />
                  investor nationalid: {SPC.investor_nationalid}
                  <br />
                  Birth Date: {SPC.BirthDate}
                  <br />
                  Phone Number: {SPC.Phone_Number}
                  <br />
                  Investor Fax: {SPC.Investor_Fax}
                  <br />
                  email: {SPC.email}
                  <br />
                  Investor Address: {SPC.Investor_Address}
                  <br />
                  Form Date: {SPC.Form_Date}
                  <br />
                  Status : {SPC.Status}
                </li>
              ))}
            </ul>
          </form>
        ) : (
          <h1> You dont have any Companies yet</h1>
        )}
      </div>
    );
  }
}
export default mycompSPC;
