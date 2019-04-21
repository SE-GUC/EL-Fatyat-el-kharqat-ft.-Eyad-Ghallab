import React, { Component } from "react";
class mycompSSC extends Component {
  onstructor() {
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
    if (this.state.SSC != undefined) {
      this.setState.isSSC = true;
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
        <h1> Company name: {this.state.SSC.Company_name} </h1>
        <br />
        <h1>
          {" "}
          Company name in English: {this.state.SSC.Company_nameinenglish}
        </h1>
        <br />
        <h1> Governorate: {this.state.SSC.Governorate}</h1>
        <br />
        <h1>City: {this.state.SSC.City}</h1>
        <br />
        <h1>Company Address: {this.state.SSC.Company_Address}</h1>
        <br />
        <h1> Company Phone Number:: {this.state.SSC.Company_Phone_Number}</h1>
        <br />
        <h1> Fax: {this.state.SSC.Fax}</h1>
        <br />
        <h1> Capital Currency: {this.state.SSC.Capital_Currency}</h1>
        <br />
        <h1>capital: {this.state.SSC.capital}</h1>
        <br />
        <h1>investor name: {this.state.SSC.investorname}</h1>
        <br />
        <h1> Gender: {this.state.SSC.Gender}</h1>
        <br />
        <h1> Nationality: {this.state.SSC.Nationality}</h1>
        <br />
        <h1> Type of IdentityProof: {this.state.SSC.ypeOf_IdentityProof}</h1>
        <br />
        <h1> investor nationalid: {this.state.SSC.investor_nationalid}</h1>
        <br />
        <h1> Birth Date: {this.state.SSC.BirthDate}</h1>
        <br />
        <h1> Phone Number: {this.state.SSC.Phone_Number}</h1>
        <br />
        <h1> Investor Fax: {this.state.SSC.Investor_Fax}</h1>
        <br />
        <h1> email: {this.state.SSC.email}</h1>
        <br />
        <h1> Investor Address: {this.state.SSC.Investor_Address}</h1>
        <br />
        <h1> Form Date: {this.state.SSC.Formdate}</h1>
        <br />
        <h1> Locked: {this.state.SSC.Locked}</h1>
        <br />
        <h1> Status : {this.state.SSC.Status}</h1>
        <br />
        <h1>{" "}
          is the external entities notified:{" "}
          {this.state.SSC.is_the_external_entities_notified}</h1>
        <br />
        <h1> BOD Name : {this.state.SSC.BOD_Name}</h1>
        <br />
        <h1> BOD Investor Type : {this.state.SSC.BOD_Investor_Type}</h1>
        <br />
        <h1> BOD Gender : {this.state.SSC.BOD_Gender}</h1>
        <br />
        <h1> BOD Nationality : {this.state.SSC.BOD_Nationality}</h1>
        <br />
        <h1>
          {" "}
          BOD Type Of IdentityProof : {this.state.SSC.BOD_TypeOfIdentityProof}
        </h1>
        <br />
        <h1> BOD NationalID : {this.state.SSC.BOD_NationalID}</h1>
        <br />
        <h1> BOD BirthDate : {this.state.SSC.BOD_BirthDate}</h1>
        <br />
        <h1> BOD Address : {this.state.SSC.BOD_Address}</h1>
        <br />
          <h1> PositionInBOD : {this.state.SSC.PositionInBOD}</h1>
          </form>
          ) : (<h1> You dont have any Companies yet</h1>
          
          ) }
      </div>
    );
  }
}
export default mycompSSC;
