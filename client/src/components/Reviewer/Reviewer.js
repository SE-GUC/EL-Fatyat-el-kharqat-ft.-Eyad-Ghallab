import React, { Component } from 'react';

import './Reviewer.css';
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Forms from './Forms';

class Reviewer extends Component {
    constructor(){
        super();
      
        this.state ={
            reviewers:[]
            

        }
    
    }

    
    // componentDidMount(){
  
    //     fetch('/api/Reviewer/')
    //     .then(res => res.json())
    //     .then(Reviewer => this.setState({reviewers: Reviewer.data},()=> console.log('the Reviewer',this.state.reviewers)));
      
    // }

    componentDidMount() {
    
      fetch("/api/Reviewer/" + localStorage.getItem("userid"))
        .then(res => res.json())
        .then(Rev =>
          this.setState({ reviewers: Rev.data }, () =>
            console.log("the Reviewers", this.state.reviewers)
          )
        );
    }

    render(){
      return (
        // <div>
        //   <h2>All Reviewers</h2>
        //   <ul>
        //     {this.state.reviewers.map(reviewer =>
        //       <li key = {reviewer._id}
        //       > {reviewer.Username}  
              
        //       </li>
        //       )}
        //   </ul> 
        // </div>

        <div>
    <h2>My Profile</h2>
    name: {this.state.reviewers.name}
    <br />
    email: {this.state.reviewers.email}
    <br />
    password: {this.state.reviewers.password}
    <br />
    yearsOfExperience: {this.state.reviewers.yearsOfExperience}
    <br />
    username: {this.state.reviewers.username}
    <br />
    gender: {this.state.reviewers.gender}
    
  </div>
      )
    }
  }
  
 

    

export default Reviewer;
