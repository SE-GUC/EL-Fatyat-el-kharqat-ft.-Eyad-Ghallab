import React, { Component } from "react";

class spcstatus extends Component {
  constructor() {
    super();
    this.state = {
      SPC: [],
      isSPC: false
    };
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
  render() {
    console.log(this.state.investors);
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
export default spcstatus;
