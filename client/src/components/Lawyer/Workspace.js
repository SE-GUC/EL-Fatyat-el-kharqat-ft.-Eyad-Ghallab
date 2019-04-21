import React, { Component } from "react";
import "./Lawyer.css";
import { Redirect } from "react-router-dom";
class Workspace extends Component {
  constructor() {
    super();
    this.Approve = this.Approve.bind(this);
    this.state = {
      SPC: [],
      SSC: [],
      isSSC: true,
      Lawyer_review: "",
      id: false,
      idssc: false
    };
  }
  // componentDidMount() {
  //     console.log("SSC");
  //     fetch("/api/SSC/" + localStorage.getItem("id") + "/SSC")
  //       .then(res => res.json())
  //       .then(ssc =>
  //         this.setState({ SSC: ssc.data }, () =>
  //           console.log("My SSC Companies", this.state.SSC)
  //         )
  //       );
  //     if (this.state.SSC != []) {
  //       this.setState.isSSC = true;
  //     }
  //   }
  local(id) {
    localStorage.setItem("id", id);

    this.setState({ id: true });
  }
  localssc(id) {
    localStorage.setItem("sscid", id);

    this.setState({ idssc: true });
  }
  Approve(id) {
    var databody = { Lawyer_review: "accepted" };
    console.log(databody);

    return fetch("/api/SPC/" + id, {
      method: "PUT",
      body: JSON.stringify(databody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }
  Reject(id) {
    var databody = { Lawyer_review: "rejected" };
    return fetch("/api/SPC/" + id, {
      method: "PUT",
      body: JSON.stringify(databody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  getssc() {
    fetch("/api/Lawyer/find/SSC")
      .then(res => res.json())
      .then(ssc =>
        this.setState({ SSC: ssc.data }, () =>
          console.log("ssc fetched", this.state.SSC)
        )
      );
  }
  getspc() {
    fetch("/api/Lawyer/find/SPC")
      .then(res => res.json())
      .then(spc =>
        this.setState({ SPC: spc.data }, () =>
          console.log("spc fetched", this.state.SPC)
        )
      );
  }

  render() {
    return (
      <div>
        <h2>Unlocked forms</h2>

        <button
          onClick={() => {
            this.getspc();
          }}
        >
          get unlocked SPC forms{" "}
        </button>
        <ul>
          {this.state.SPC.map(spc => (
            <li key={spc._id}>
              Facility_name: {spc.Facility_name}
              <br />
              Form_Date:{spc.Form_Date}
              <br />
              <button
                onClick={() => {
                  this.local(spc._id);
                }}
              >
                {" "}
                Review Company{" "}
              </button>
            </li>
          ))}
        </ul>
        {this.state.id ? <Redirect to={{ pathname: "/myspc" }} /> : <h1 />}

        <button
          onClick={() => {
            this.getssc();
          }}
        >
          get untlocked SSC forms{" "}
        </button>
        <ul>
          {this.state.SSC.map(ssc => (
            <li key={ssc._id}>
              Company_name: {ssc.Company_name}
              <br />
              Form_Date:{ssc.Formdate}
              <br />
              <button
                onClick={() => {
                  this.localssc(ssc._id);
                }}
              >
                {" "}
                Review Company{" "}
              </button>
            </li>
          ))}
        </ul>
        {this.state.idssc ? <Redirect to={{ pathname: "/myssc" }} /> : <h1 />}

        {/* <button onClick={()=>{this.getssc()}}>get untlocked SSC forms </button> 
            <ul>
      {
     this.state.SSC.map(ssc => 
        <li key = {ssc._id}>
           Name: {ssc.Facility_name} 
         investor name:{ssc.investorname}NP
    Company_name: {ssc.Company_name}<br/> ,Governorate: {ssc.Governorate}<br/> , City:{ssc.City}<br/>
  , Company_Address:{ssc.Company_Address}<br/> , Company_Phone_Number:{ssc.Company_Phone_Number}<br/>
   , Fax:{ssc.Fax}<br/> , Capital_Currency:{ssc.Capital_Currency}<br/> ,capital:{ssc.capital}<br/>
    ,investorname:{ssc.investorname}<br/> ,Gender:{ssc.Gender}<br/> ,Nationality:{ssc.Nationality}<br/> ,
    TypeOf_IdentityProof: {ssc.TypeOf_IdentityProof}<br/> ,investor_nationalid:{ssc.investor_nationalid}<br/> 
    ,BirthDate:{ssc.BirthDate}<br/> ,
    Phone_Number:{ssc.Phone_Number}<br/> ,Investor_Fax:{ssc.Investor_Fax}<br/> ,email:{ssc.email}<br/> 
    <button onClick= {() => {this.Approve(ssc._id)}}> Approve </button> <button onClick= {() => {this.Reject(ssc._id)}}>
     Reject </button> 
               */}

        {/* </li>)} */}
        {/* </ul>  */}
      </div>
    );
  }
}
export default Workspace;
