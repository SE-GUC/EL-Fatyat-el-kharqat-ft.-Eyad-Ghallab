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
class EditExternalEntities extends Component {

 constructor() {
    super();
        
    
    this.handlenameChange=  this.handlenameChange.bind(this);
    this.handleusernameChange=  this.handleusernameChange.bind(this);
    this.handlepasswordChange=  this.handlepasswordChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
   

    this.state ={
        externalentities:[],
        name:"",
username:	"",	
password : ""  
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
handleSubmit(e){
  e.preventDefault();
  
} 
 componentDidMount(){
    fetch('/api/ExternalEntities')
    .then(res => res.json())
    .then(ExternalEntity => this.setState({externalentities: ExternalEntity.data}, () => console.log('External Entities fetched',this.state.externalentities)));
  }

  update(id){
    console.log(this.state.username)
     let databody 
 if (this.state.name !== ""){
   databody = {"name":this.state.name}}
 if(this.state.password !== ""){
   databody = {"password":this.state.password}}
     if(this.state.username !== ""){
       databody = {"username":this.state.username}}
                   console.log(this.state.username)
     return fetch('http://localhost:5000/api/ExternalEntities/'+id, {
         method: 'PUT',
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
        <ul>
          {this.state.externalentities.map(externalentity =>
            <li key = {externalentity._id}
            > {externalentity.name} <br/><button onClick = {() => {this.update(externalentity._id)}}> Update</button> 
            </li>
            )}
        </ul>
        </form>
        </div>
    )
  }
}
export default withStyles (styles)(EditExternalEntities);