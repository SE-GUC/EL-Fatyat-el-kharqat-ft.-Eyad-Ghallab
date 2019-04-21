import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import "./Reviewer.css";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class updating_Forms extends Component {
  constructor() {
    super();
    
    this.state = {
      SPC: [],
      SSC: [],
      Status: "",
      Lawyer_review: "",
      spcforms: ""
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

  getspc() {
    fetch("/api/Reviewer/find/SPC")
      .then(res => res.json())
      .then(spc =>
        this.setState({ SPC: spc.data }, () =>
          console.log("spc fetched", this.state.SPC)
        )
      );
  }

  getssc() {
    fetch("/api/Reviewer/find/SSC")
      .then(res => res.json())
      .then(ssc =>
        this.setState({ SSC: ssc.data }, () =>
          console.log("ssc fetched", this.state.SSC)
        )
      );
  }
  yourfunc1(id) {
    fetch("/api/SSC/companyname/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(sscform =>
        this.setState({ sscforms: sscform.data }, () =>
          console.log("ssc form fetched", this.state.sscforms)
        )
      );
    localStorage.setItem("contractS", this.state.sscforms);

    console.log(this.state.sscforms);

    this.set1(id);
  }

  set1(id) {
    let databody = {
      Corporate_name: localStorage.getItem("contractS")
      
    };

    fetch("/api/contractFinal", {
      method: "POST",
      body: JSON.stringify(databody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));
    console.log("Done");
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
              <br />
              <Button onClick={() => this.yourfunc1(spc._id)}>
                Create Contract
              </Button>
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
              <br />
              <Button onClick={() => this.yourfunc1(ssc._id)}>
                Create Contract
              </Button>
            </li>
          ))}
        </ul>
        {this.state.idssc ? <Redirect to={{ pathname: "/myssc" }} /> : <h1 />}
      </div>
    );
  }
}

export default withStyles(styles)(updating_Forms);
