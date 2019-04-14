import React, { Component } from 'react';
import superagent from 'superagent';
import './Login.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';


class Login extends Component {
  
  constructor(){
  super();
  
  this.state = {
   email:"",
   password:""
  }
}
  
handleemailChanged(event){
  this.setState({email : event.target.value});
}
handlePasswordChanged(event){
  this.setState({password : event.target.value});
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
.post('/api/investors/login')
.send({email: this.state.email, password : this.state.password})
.end((err,res) => {
if(err) {this.setState({errorMessage : "Authentication failed"});return;}
 console.log('res.body:',res.body);
 localStorage.setItem('token', res.body.token);
 //this.setState();
 this.forceUpdate();
});
}

isAuthenticated(){
  const token = localStorage.getItem('token');
   if(token && token.length > 10) {
     return true;
   }
   return false;
}
  render() {
    
    console.log(this.state);
    //{this.renderRedirect()}
    const isAlreadyAuthenticated = this.isAuthenticated();
    
    return (
     
      <div className = "Login">
     
      {isAlreadyAuthenticated ? <Redirect to = {{pathname : '/Investor'}} /> : (
        <form onSubmit = {this.submitForm.bind(this)}>
    <h2>Login Page</h2>
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


<Button variant="contained" color="primary" type= "submit"  >
        Login
        
      </Button>
     
    </form>
      )}
      </div>
    );
  }
}
export default Login;

