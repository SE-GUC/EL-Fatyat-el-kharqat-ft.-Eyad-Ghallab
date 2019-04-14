import React, { Component } from 'react';
import superagent from 'superagent';
import './Register.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';


class Register extends Component {
  
  constructor(){
  super();
  
  this.state = {
   email:"",
   password:"",
   name:"",
   username:"",
   nationality: "",
   gender:"", 
   birthdate:"",  
   city:"", 
   country:"", 
   jobtitle:"", 
   mobilenumber:""
  }
}
  
handleemailChanged(event){
  this.setState({email : event.target.value});
}
handlePasswordChanged(event){
  this.setState({password : event.target.value});
}

handlenameChanged(event){
    this.setState({name : event.target.value});
  }
handleusernameChanged(event){
    this.setState({username : event.target.value});
  }

handlenationalityChanged(event){
    this.setState({nationality : event.target.value});
 }

 handlegenderChanged(event){
    this.setState({gender : event.target.value});
 }

 handlebirthdateChanged(event){
    this.setState({birthdate : event.target.value});
 }

 handlecityChanged(event){
    this.setState({city : event.target.value});
 }

 handlecountryChanged(event){
    this.setState({country : event.target.value});
 }

 handlejobtitleChanged(event){
    this.setState({jobtitle : event.target.value});
 }

 handlemobilenumberChanged(event){
    this.setState({mobilenumber : event.target.value});
 }
HandleButtonClick(){
  this.setState();
}

// setRedirect = () => {
//   this.setState({
//     redirect: true
//   })
// }
// renderRedirect = () => {
//   if (this.state.redirect) {
//     return <Redirect to='/Investor' />
//   }
// }


submitForm(event){
event.preventDefault();
superagent
.post('/api/investors/register')
.send({email: this.state.email, password : this.state.password,username:this.state.username, name:this.state.name,nationality:this.state.nationality, gender:this.state.gender,birthdate:this.state.birthdate,city:this.state.city,country:this.state.country ,jobtitle:this.state.jobtitle ,mobilenumber:this.state.mobilenumber})
.end((err,res) => {
if(err) {this.setState({errorMessage : "Registeration failed"});return;}
 console.log('res.body:',res.body);
 localStorage.setItem('token', res.body.token);
 //this.setState();
 this.forceUpdate();
});
}

isAuthenticated(){
    const token = localStorage.getItem('token');
   if(token != null) {
     return true;
   }
   return false;
}
  render() {
    
    console.log(this.state);
    //{this.renderRedirect()}
    const isAlreadyAuthenticated = this.isAuthenticated();
    
    return (
     
      <div className = "Register">
     {isAlreadyAuthenticated ? <Redirect to = {{pathname : '/Login'}} /> : (
     <form onSubmit = {this.submitForm.bind(this)}>
    <h2>Register Page</h2>
  
   

<TextField
          id="standard-name-input"
          label="name"
          type="name"
          margin="normal"   
          value = {this.state.name} 
          onChange = {this.handlenameChanged.bind(this)} /> <br></br>


<TextField
          id="standard-username-input"
          label="username"
          type="username"
          margin="normal"   
          value = {this.state.username} 
          onChange = {this.handleusernameChanged.bind(this)} /> <br></br>
  
<TextField
          id="standard-Email-input"
          label="Email"
          type="Email"
          margin="normal"   
          value = {this.state.email} 
          onChange = {this.handleemailChanged.bind(this)} /> <br></br>
     
<TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        value = {this.state.password}
        onChange = {this.handlePasswordChanged.bind(this)}
      /><br></br>

<TextField
          id="standard-nationality-input"
          label="nationality"
          type="nationality"
          margin="normal"   
          value = {this.state.nationality} 
          onChange = {this.handlenationalityChanged.bind(this)} /> <br></br>


<TextField
          id="standard-gender-input"
          label="gender"
          type="gender"
          margin="normal"   
          value = {this.state.gender} 
          onChange = {this.handlegenderChanged.bind(this)} /> <br></br>


<TextField
          id="standard-birthdate-input"
          label="birthdate"
          type="birthdate"
          margin="normal"   
          value = {this.state.birthdate} 
          onChange = {this.handlebirthdateChanged.bind(this)} /> <br></br>          

<TextField
          id="standard-city-input"
          label="city"
          type="city"
          margin="normal"   
          value = {this.state.city} 
          onChange = {this.handlecityChanged.bind(this)} /> <br></br>

<TextField
          id="standard-country-input"
          label="country"
          type="country"
          margin="normal"   
          value = {this.state.country} 
          onChange = {this.handlecountryChanged.bind(this)} /> <br></br>   

<TextField
          id="standard-jobtitle-input"
          label="jobtitle"
          type="jobtitle"
          margin="normal"   
          value = {this.state.jobtitle} 
          onChange = {this.handlejobtitleChanged.bind(this)} /> <br></br>                  

<TextField
          id="standard-mobilenumber-input"
          label="mobilenumber"
          type="mobilenumber"
          margin="normal"   
          value = {this.state.mobilenumber} 
          onChange = {this.handlemobilenumberChanged.bind(this)} /> <br></br>                  


<Button variant="contained" color="primary" type= "submit"  >
        Register
        
      </Button>
     
    </form>
     )}
      </div>
    );
  }
}
export default Register;
