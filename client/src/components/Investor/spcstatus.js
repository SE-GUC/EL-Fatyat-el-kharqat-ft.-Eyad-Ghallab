import React, { Component } from "react";

class spcstatus extends Component {
  constructor() {
    super();
    this.state = {
      SPC: [],
      isSPC: false,
      payment: ""
    };
  }
  local(id) {
    localStorage.setItem("payment", id);
    
  }
  componentDidMount() {
    fetch("/api/SPC/" + localStorage.getItem("nationalid") + "/status")
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

  paymenet(id) {
    
    if (this.state.payment !== "") {
      this.setState({ payment: "" });
    }
    fetch("/api/SPC/" + id + "/find")
      .then(res => res.json())
      .then(pay =>
        this.setState({ payment: pay.data }, () =>
          console.log("you should pay", this.state.payment)
        )
      );
  
  }

  render() {
    console.log(this.state.investors);
    return (
      <div>
        <ul>
          {this.state.SPC.map(SPC => (
            <li key={SPC._id}>
              {" "}
              Facility name: {SPC.Facility_name}
              <br />
              Facility name in English: {SPC.Facility_nameinenglish}
              <br />
              Status : {SPC.Status}
              <br />
              <button
                onClick={() => {
                  this.paymenet(SPC._id);
                }}
              >
                Fees
              </button>
            </li>
          ))}
        </ul>

       
        <h1>You Should pay: {this.state.payment}</h1>
      </div>
    );
  }
}
export default spcstatus;
