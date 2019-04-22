import React, { Component } from "react";
import "./Lawyer.css";
import { Redirect } from "react-router-dom";
class Workspace extends Component {
  constructor() {
    super();

    this.state = {
      SPC: [],
      SSC: [],
      isSSC: true,
      Lawyer_review: "",
      id: false,
      idssc: false
    };
  }

  local(id) {
    localStorage.setItem("id", id);

    this.setState({ id: true });
  }
  localssc(id) {
    localStorage.setItem("sscid", id);

    this.setState({ idssc: true });
  }

  sms(num) {
    // e.preventDefault();
    // e.stopImmediatePropagation();
    let databody = {
      number: num
    };

    return fetch("/api/SPC/msg", {
      method: "POST",
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

        

        
      </div>
    );
  }
}
export default Workspace;
