import React, { Component } from "react";

class sscstatus extends Component {
  constructor() {
    super();
    this.state = {
      SSC: [],
      isSSC: false
    };
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
  render() {
    console.log(this.state.investors);
    return (
      <div>
        {this.state.isSSC ? (
          <form>
            <ul>
              {this.state.SSC.map(SSC => (
                <li key={SSC._id}>
                  {" "}
                  Company name: {SSC.Company_name}
                  <br />
                  Company name in English: {SSC.Company_nameinenglish}
                  <br />
                  Status : {SSC.Status}
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
export default sscstatus;
