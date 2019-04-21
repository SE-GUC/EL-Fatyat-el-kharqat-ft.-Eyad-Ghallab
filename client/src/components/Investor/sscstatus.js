import React, { Component } from "react";

class sscstatus extends Component {
  constructor() {
    super();
    this.state = {
      SSC: [],
      isSSC: false,
      payment: ""
    };
  }
  local(id) {
    localStorage.setItem("payment", id);
    //this.paymenet(localStorage.getItem("payment"));
    // this.setState({ id: true });
  }
  componentDidMount() {
    fetch("/api/SSC/" + localStorage.getItem("nationalid") + "/status")
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

  paymenet(id) {
    //e.preventDefault();
    if (this.state.payment !== "") {
      this.setState({ payment: "" });
    }
    fetch("/api/SSC/" + id + "/find")
      .then(res => res.json())
      .then(pay =>
        this.setState({ payment: pay.data }, () =>
          console.log("you should pay", this.state.payment)
        )
      );
    // this.state.paymenet
    // printString(this.state.paymenet)
  }

  render() {
    console.log(this.state.investors);
    return (
      <div>
        <ul>
          {this.state.SSC.map(SSC => (
            <li key={SSC._id}>
              {" "}
              Company name: {SSC.Company_name}
              <br />
              Company name in English: {SSC.Company_nameinenglish}
              <br />
              Status : {SSC.Status}
              <br />
              <button
                onClick={() => {
                  this.paymenet(SSC._id);
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
export default sscstatus;
