import React, { Component } from 'react';
import './Lawyer.css';

class Lawyer extends Component {
  constructor(){
      super();
     
      this.state={
         lawyers: []
      
     
      }
  }
  

  
  componentDidMount() {
    
    fetch("/api/Lawyer/" + localStorage.getItem("userid"))
      .then(res => res.json())
      .then(law =>
        this.setState({ lawyers: law.data }, () =>
          console.log("the Lawyers", this.state.lawyers)
        )
      );
  }
    render() {
    return (
    
    <div>
    <h2>My Profile</h2>
    username: {this.state.lawyers.username}
    <br />
   
    fullname: {this.state.lawyers.fullname}
    <br />
    email: {this.state.lawyers.email}
    <br />
    phonenumber: {this.state.lawyers.phonenumber}
    <br />
    legaltype: {this.state.lawyers.legaltype}
    <br />
    birthdate: {this.state.lawyers.birthdate}
    <br />
    noOfPreviousCases: {this.state.lawyers.noOfPreviousCases}
    <br />
    gender: {this.state.lawyers.gender}
  </div>


  )
}

}



export default Lawyer;
 
     