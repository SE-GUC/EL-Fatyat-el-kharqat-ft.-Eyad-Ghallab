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
class EditAdmin extends Component {

 constructor() {
    super();
    this.handlenameChange =  this.handlenameChange.bind(this);
    this.handleemailChange =  this.handleemailChange.bind(this);
    this.handleaddressChange =  this.handleaddressChange.bind(this);
    this.handleemailChange =  this.handleemailChange.bind(this);
    this.handleusernameChange=  this.handleusernameChange.bind(this) ;
    this.handlepasswordChange=  this.handlepasswordChange.bind(this);
   this.handleSubmit= this.handleSubmit.bind(this);
    this.state ={
    name:"",
    address : "",
    email:"",	
    username:	"",	
    password : "",
    showPassword: false,
    admins:[],
   }
 } 
 componentDidMount(){
    fetch('/api/Admin')
    .then(res => res.json())
    .then(admins=> this.setState({Admins: admins.data}, () => console.log('Admins fetched',this.state.Admins)));
  }
 handlenameChange(e){
    this.setState({name: e.target.value })

  }
  handleaddressChange(e){
      this.setState({address: e.target.value })

    }
  
  handleemailChange(e){
    this.setState({email: e.target.value })

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
    
} 
update(id){
    // e.preventDefault();
    console.log(this.state.username)
     let databody 
 if (this.state.name !== ""){
   databody = {"name":this.state.name}}
 if(this.state.password !== ""){
   databody = {"password":this.state.password}}
 
   if(this.state.email !== ""){
     databody = {"email":this.state.email}}
     if(this.state.username !== ""){
       databody = {"username":this.state.username}}
       if(this.state.address !== ""){
        databody = {"address":this.state.address}}
       
       
                   console.log(this.state.username)
     return fetch('/api/Admin/'+ localStorage.getItem("userid"), {
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
                <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="Address"
          value={this.state.address}
          onChange={this.handleaddressChange}
          
        />
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
        <ul>
        <button
            onClick={() => {
              this.update();
            }}
          >
            {" "}
            Update
          </button>
          </ul>
        </form>
        </div>
    )
  }
}
export default withStyles (styles)(EditAdmin);