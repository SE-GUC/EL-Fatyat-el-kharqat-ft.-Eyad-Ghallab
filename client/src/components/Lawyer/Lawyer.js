import React, { Component } from 'react';
import './Lawyer.css';

class Lawyer extends Component {
  constructor(){
      super();
     
      this.state={
         lawyers: []
      
     
      }
  }
  

  // componentDidMount(){
  //     fetch('/api/Lawyer/')
  //     .then(res => res.json())
  //     .then(Lawyer=> this.setState({lawyers:Lawyer.data}, ()=>console.log('Lawyers fetched..',
  //    this.state.lawyers)));
  componentDidMount() {
    
    fetch("/api/Lawyer/" + localStorage.getItem("userid"))
      .then(res => res.json())
      .then(law =>
        this.setState({ lawyers: law.data }, () =>
          console.log("the investors", this.state.lawyers)
        )
      );
  }
    render() {
    return (
    //   <div>
    //   <h2>All Lawyers </h2>
    //   <ul>
    //   {this.state.lawyers.map( lawyer  => <li key = {lawyer._id}> 
    //     fullname: {lawyer.fullname} 
          
    //       </li>
    //       )}
    //   </ul> 
    // </div>
    <div>
    <h2>My Profile</h2>
    username: {this.state.lawyers.username}
    <br />
    password: {this.state.lawyers.password}
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
 
     