import React, { Component } from "react";
class mycompSSC extends Component {
  constructor() {
    super();
    this.state = {
      SSC: [],
      isSSC: false
    };
  }

  componentDidMount() {
    console.log("hiiii");
    fetch("/api/SSC/" + localStorage.getItem("nationalid") + "/SSC")
      .then(res => res.json())
      .then(ssc =>
        this.setState({ SSC: ssc.data }, () =>
          console.log("My SSC Companies", this.state.SSC)
        )
      );
    if (this.state.SSC != "") {
      this.setState({ isSSC: true });
    }
  }
  render() {
    // const pro = this.getpro();
    console.log(this.state.investors);
    return (
      <div>
        {this.state.isSSC ? (
          <form>
            <h2>My Companies</h2>
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
            Investor Address: {this.state.SSC.Investor_Address}
            <br />
            Form Date: {this.state.SSC.Formdate}
            <br />
            Status : {this.state.SSC.Status}
            <br />
            BOD Name : {this.state.SSC.BOD_Name}
            <br />
            BOD Investor Type : {this.state.SSC.BOD_Investor_Type}
            <br />
            BOD Gender : {this.state.SSC.BOD_Gender}
            <br />
            BOD Nationality : {this.state.SSC.BOD_Nationality}
            <br /> BOD Type Of IdentityProof :{" "}
            {this.state.SSC.BOD_TypeOfIdentityProof}
            <br />
            BOD NationalID : {this.state.SSC.BOD_NationalID}
            <br />
            BOD BirthDate : {this.state.SSC.BOD_BirthDate}
            <br />
            BOD Address : {this.state.SSC.BOD_Address}
            <br />
            PositionInBOD : {this.state.SSC.PositionInBOD}
          </form>
        ) : (
          <h1> You dont have any Companies yet</h1>
        )}
      </div>
    );
  }
}
export default mycompSSC;
