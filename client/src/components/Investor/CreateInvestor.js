import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  textField: {
    flexBasis: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});
class CreateInvestor extends Component {

 constructor() {
    super();
    this.handlebithdateChange =  this.handlebithdateChange.bind(this);
    this.handlecityChange =  this.handlecityChange.bind(this);
    this.handlecountryChange =  this.handlecountryChange.bind(this);
    this.handleemailChange =  this.handleemailChange.bind(this);
    this.handlegenderChange=  this.handlegenderChange.bind(this) ;
    this.handlejobtitleChange=  this.handlejobtitleChange.bind(this);
    this.handlemobilenumberChange=  this.handlemobilenumberChange.bind(this);
    this.handlenameChange=  this.handlenameChange.bind(this);
    this.handlenationalityChange=  this.handlenationalityChange.bind(this);
    this.handlepasswordChange=  this.handlepasswordChange.bind(this);
    this.handleusernameChange=  this.handleusernameChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
    this.delete=this.delete.bind(this);
    this.update=this.update.bind(this);
    this.state ={
        password : "",
        name:"",
email:"",	
username:	"",	
nationality:""	,	
gender:	"",	
birthdate:"",	
city:"",	

country:	"",	
jobtitle:""	,	

mobilenumber:"" 	
       
    }

}

handlenameChange(e){
  this.setState({name: e.target.value })

}
handlepasswordChange(e){
  this.setState({password: e.target.value })

}
handleemailChange(e){
  this.setState({email: e.target.value })

}
handlejobtitleChange(e){
  this.setState({jobtitle: e.target.value })

}
handlecityChange(e){
  this.setState({city: e.target.value })

}
handlecountryChange(e){
  this.setState({country: e.target.value })

}
handleusernameChange(e){
  this.setState({username: e.target.value })

}
handlenationalityChange(e){
  this.setState({nationality: e.target.value })

}
handlegenderChange(e){
  this.setState({gender: e.target.value })

}
handlebithdateChange(e){
  this.setState({birthdate: e.target.value })

}
handlemobilenumberChange(e){
  this.setState({mobilenumber: e.target.value })

}

handleSubmit(e){
    e.preventDefault();
    let databody = {
        "password":this.state.password,	
"name":this.state.name,	
"email":this.state.email,	
"username":	this.state.username,	
"nationality":	this.state.nationality,	
"gender":	this.state.gender,	
"birthdate":	this.state.birthdate,	
"city":this.state.city,	

"country":	this.state.country,	
"jobtitle":	this.state.jobtitle,	

"mobilenumber": 	this.state.mobilenumber,	
    }

    return fetch('/api/investors/', {
        method: 'POST',
        body: JSON.stringify(databody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data)); 
}
  render() {
   
    
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Admin</h3>
            <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="Name"
          value={this.state.name}
          onChange={this.handlenameChange}
          
        />
        </div> 
        <div className="form-group">
        <FormControl >
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handlepasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </div> 
        <div className="form-group">
                <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="Email"
          value={this.state.email}
          onChange={this.handleemailChange}
          
        />
        </div> 
        <div className="form-group">
                <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="User Name"
          value={this.state.username}
          onChange={this.handleusernameChange}
          
        />
        </div>
        <div className="form-group">
                <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="Nationality"
          value={this.state.username}
          onChange={this.handleusernameChange}
          
        />
        </div>
        <div className="form-group">
                <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="User Name"
          value={this.state.username}
          onChange={this.handleusernameChange}
          
        />
        </div>
        <div className="form-group">
                <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="User Name"
          value={this.state.username}
          onChange={this.handleusernameChange}
          
        />
        </div>
        <div className="form-group">
                <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="User Name"
          value={this.state.username}
          onChange={this.handleusernameChange}
          
        />
        </div>
        <div className="form-group">
                <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="User Name"
          value={this.state.username}
          onChange={this.handleusernameChange}
          
        />
        </div>
        <div className="form-group">
                    <input type="submit" 
                      value="Submit" 
                      className="btn btn-primary"/>
                </div>
        </form>
        </div>
    )
  }
}
export default withStyles (styles)(CreateInvestor);