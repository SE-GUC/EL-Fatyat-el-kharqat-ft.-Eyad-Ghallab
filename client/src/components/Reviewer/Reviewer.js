import React, { Component } from 'react';

import './Reviewer.css';
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Forms from './Forms';

class Reviewer extends Component {
    constructor(){
        super();
        
        this.handleNameChange =  this.handleNameChange.bind(this);
        this.handleUsernameChange =  this.handleUsernameChange.bind(this);
        this.handlePasswordChange =  this.handlePasswordChange.bind(this);
        this.handleemailChange =  this.handleemailChange.bind(this);
        this.handleYearsofexpChange=  this.handleYearsofexpChange.bind(this) ;
        this.handleGenderChange=  this.handleGenderChange.bind(this);
        
        this.handleSubmit= this.handleSubmit.bind(this);
        this.delete=this.delete.bind(this);
        this.update=this.update.bind(this);
        this.state ={
            Reviewers:[],
            password : "",
            Email:"",	
            Username:	"",		
            Gender:	"",	
            YearsOfExperience:"",	
            Name:"",	

        }
    
    }

    handleNameChange(e){
      this.setState({Name: e.target.value })

    }
    handlePasswordChange(e){
      this.setState({Password: e.target.value })

    }
    handleemailChange(e){
      this.setState({Email: e.target.value })

    }
    handleUsernameChange(e){
      this.setState({Username: e.target.value })

    }
    handleGenderChange(e){
      this.setState({Gender: e.target.value })

    }
    handleYearsofexpChange(e){
      this.setState({YearsOfExperience: e.target.value })

    }
    
    
    
    delete(id){
      return fetch('/api/Reviewer/'+id, {
        method: 'DELETE',
       // body: JSON.stringify(databody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data));
    }

    handleSubmit(e){
      e.preventDefault();
      let databody = {
          "Password":this.state.Password,	
          "Name":this.state.Name,	
          "Email":this.state.Email,	
          "Username":	this.state.Username,	
          "YearsOfExperience":	this.state.YearsOfExperience,	
          "Gender":	this.state.Gender,	
      }
  
      return fetch('/api/Reviewer/', {
          method: 'POST',
          body: JSON.stringify(databody),
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => console.log(data)); 
  }



  update(id){
   // e.preventDefault();
   console.log(this.state.Username)
    let databody 
if (this.state.Name !== ""){
  databody = {"Name":this.state.Name}}
if(this.state.password !== ""){
  databody = {"Password":this.state.Password}}
  if(this.state.Email !== ""){
    databody = {"email":this.state.Email}}
    if(this.state.Username !== ""){
      databody = {"username":this.state.Username}}
      if(this.state.YearsOfExperience !== ""){
        databody = {"YearsOfExperience":this.state.YearsOfExperience}}
        if(this.state.Gender !== ""){
          databody = {"gender":this.state.Gender}}

                  console.log(this.state.username)
    return fetch('http://localhost:5000/api/Reviewer/'+id, {
        method: 'PUT',
        body: JSON.stringify(databody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data)); 
}


    componentDidMount(){
  
        fetch('/api/Reviewer/')
        .then(res => res.json())
        .then(Reviewer => this.setState({Reviewers: Reviewer.data},()=> console.log('the Reviewer',this.state.Reviewers)));
      
    }
  
  
  
 

  render() {
    return (
      
      <div>
        
    <h2> My Reviewers
    </h2>
    <Router>
<Switch>
  <Route exact path = './Forms'Component={Forms}/>
</Switch>
</Router>
 <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input type="text" name="Name" value={this.Name} onChange={this.handleNameChange}/>
                    <br/>
                </label>
                <label>
                    password
                    <input type="text" name="Password" value={this.Password} onChange={this.handlePasswordChange}/>
                    <br/>
                </label>
                <label>
                    email
                    <input type="text" name="Email" value={this.Email} onChange={this.handleemailChange}/>
                    <br/>
                </label>
                <label>
                    username
                    <input type="text" name="Username" value={this.Username} onChange={this.handleUsernameChange}/>
                    <br/>
                </label>
                <label>
                    YearsOfExperience
                    <input type="text" name="yearsOfExperience" value={this.YearsOfExperience} onChange={this.handleYearsofexpChange}/>
                    <br/>
                </label>
                <label>
                    gender
                    <input type="text" name="Gender" value={this.Gender} onChange={this.handleGenderChange}/>
                    <br/>
                </label>
                
                <input type="submit" value="Create Reviewer" />
            </form> 

{

  <ul>
    
    { //this.state.SPC.map( SpcForm  => <li1 key = {SpcForm._id}> investorname: {SpcForm.investorname}</li1>,
     this.state.Reviewers.map( Reviewer  => <li key = {Reviewer._id}> Name: {Reviewer.Name}
       <button onClick= {() => {this.delete(Reviewer._id)}}> Delete </button>   
     <form onClick={() => {this.update(Reviewer._id)}}>      
     <label>
     Name
     <input type="text" name="Name" value={this.Name} onChange={this.handleNameChange}/>
     <br/>
 </label>
 <label>
     password
     <input type="text" name="Password" value={this.Password} onChange={this.handlePasswordChange}/>
     <br/>
 </label>
 <label>
     email
     <input type="text" name="Email" value={this.Email} onChange={this.handleemailChange}/>
     <br/>
 </label>
 <label>
     username
     <input type="text" name="Username" value={this.Username} onChange={this.handleUsernameChange}/>
     <br/>
 </label>
 <label>
     yearsOfExperience
     <input type="text" name="yearsOfExperience" value={this.YearsOfExperience} onChange={this.handleYearsofexpChange}/>
     <br/>
 </label>
 <label>
     gender
     <input type="text" name="Gender" value={this.Gender} onChange={this.handleGenderChange}/>
     <br/>
 </label>
 
 <input type="submit" value="update Reviewer" />
            </form>  
            </li> ) }
     </ul> 
  
 }

<Toolbar>
  <Link to= {'./Forms'}><Button color ="inherit"> view  Forms</Button></Link>
  </Toolbar>

  </div>

      
    );
  }
}

    

export default Reviewer;
