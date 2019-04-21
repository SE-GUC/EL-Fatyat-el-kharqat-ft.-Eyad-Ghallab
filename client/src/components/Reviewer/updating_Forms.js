import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import "./Reviewer.css";
import { Redirect } from "react-router-dom";

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
    // this.Approvespc = this.Approvespc.bind(this);
    // this.Rejectspc = this.Rejectspc.bind(this);
    // this.resendspc = this.resendspc.bind(this);

    // this.Approvessc = this.Approvessc.bind(this);
    // this.Rejectssc = this.Rejectssc.bind(this);
    // this.resendssc = this.resendssc.bind(this);
    this.state = {
      SPC: [],
      SSC: [],
      Status: "",
      Lawyer_review: ""
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

export default withStyles(styles)(updating_Forms);
