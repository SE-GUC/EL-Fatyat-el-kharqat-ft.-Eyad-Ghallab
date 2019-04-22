import React, { Component } from "react";
import "./SPC.css";

class SPC extends Component {
  constructor() {
    super();
    this.sms = this.sms.bind(this);
    this.state = {
      spcs: [],
      paymenet: "",
      statusShow: false,
      number: 0,
      msg: ""
    };
  }

  componentDidMount() {
    fetch("/api/SPC/all")
      .then(res => res.json())
      .then(SPC =>
        this.setState({ spcs: SPC.data }, () =>
          console.log("SPC fetched", this.state.spcs)
        )
      );
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

  sms(num, mssg) {
    
    let databody = {
      number: num,
      msg: mssg
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

  handleShowStatus = index => {
    this.setState(prevState => {
      const newState = {
        ...prevState
      };
      newState.spcs[index] = {
        ...prevState.spcs[index],
        showStatus: true
      };
      return newState;
    });
  };

  render() {
    const { spcs } = this.state;
    return (
      <div>
        <h2>All SPC Forms</h2>
        <ul>
          {this.state.spcs.map((spc, index) => (
            <div>
              <li key={spc._id}> {spc.Facility_name}</li>
              <li key={spc.key}>
                <button onClick={() => this.handleShowStatus(index)}>
                  SHOW status
                </button>
              </li>
              <li key={spc.key}>{spc.showStatus && spc.Status}</li>
            </div>
          ))}
        </ul>
        <h2>Pay</h2>
        <ul>
          {this.state.spcs.map(spc => (
            <li key={spc._id}>
              {" "}
              {spc.Phone_Number}
              <button
                onClick={() => {
                  this.paymenet(spc._id);
                }}
              >
                pay{" "}
              </button>
              <button
                onClick={() => {
                  this.sms(spc.Phone_Number, this.state.paymenet);
                }}
              >
                pay the fees
              </button>
            </li>
          ))}
        </ul>{" "}
        <h1>You Should pay: {this.state.paymenet}</h1>
      </div>
    );
  }
}
export default SPC;
