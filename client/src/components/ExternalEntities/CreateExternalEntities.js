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
class CreateExternalEntities extends Component {

 constructor() {
  super();
    this.handlenameChange=  this.handlenameChange.bind(this);
        this.handleusernameChange=  this.handleusernameChange.bind(this);
        this.handlepasswordChange=  this.handlepasswordChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
       

        this.state ={
            
            name:"",
            username:"",	
            password :""  
        }
    
    }

    handlenameChange(e){
      this.setState({name: e.target.value })

    }
    handleusernameChange(e){
        this.setState({username: e.target.value })
  
      }
    handlepasswordChange(e){
      this.setState({password: e.target.value })

    }

  
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };

  handleSubmit(e){
    e.preventDefault();
    let databody = {
           
        "name":this.state.name,		
        "username":	this.state.username,	
        "password":this.state.password,
  
    }
    return fetch('/api/ExternalEntities', {
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
            <h3 align="center">External Entities</h3>
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
        <br/>
        <div className="form-group">
                <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="User Name"
          value={this.state.username}
          onChange={this.handleusernameChange}
          
        />
        </div> 
        <br/>
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
        <br/>
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
export default withStyles (styles)(CreateExternalEntities);