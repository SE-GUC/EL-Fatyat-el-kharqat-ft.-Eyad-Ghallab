import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});
class CreatingReviewer extends Component {
    constructor(){
        super();
        
        this.handleName =  this.handleName.bind(this);
        this.handleUsername =  this.handleUsername.bind(this);
        this.handlePassword =  this.handlePassword.bind(this);
        this.handleEmail =  this.handleEmail.bind(this);
        this.handleYearsOfExperience=  this.handleYearsOfExperience.bind(this) ;
        this.handleGender=  this.handleGender.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
       

        this.state ={
            Reviewer:[],
            Password : "",
            Email:"",	
            Username:	"",		
            Gender:	"",	
            YearsOfExperience:"",	
            Name:"",	

        }
    
    }
    
    handleName(e){
        this.setState({Name: e.target.value })
  
      }
      handlePassword(e){
        this.setState({Password: e.target.value })
  
      }
      handleEmail(e){
        this.setState({Email: e.target.value })
  
      }
      handleUsername(e){
        this.setState({Username: e.target.value })
  
      }
      handleGender(e){
        this.setState({Gender: e.target.value })
  
      }
      handleYearsOfExperience(e){
        this.setState({YearsOfExperience: e.target.value })
  
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
    render() {
   
  
  
        return (
          <div style={{ marginTop: 10 }}>
              <h3 align="center">New Reviewer</h3>
              <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                    <label> Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Name}
                      onChange={this.handleName}
                      />
                      </div>
                    
                      <div className="form-group">
                    <label>Password:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Password}
                      onChange={this.handlePassword}
                      />
                      </div>

                      <div className="form-group">
                    <label>Email:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Email}
                      onChange={this.handleEmail}
                      />
                      </div>

                      <div className="form-group">
                    <label>User Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Username}
                      onChange={this.handleUsername}
                      />
                      </div>
                      <div className="form-group">
                    <label>yearsOfExperience:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.YearsOfExperience}
                      onChange={this.handleYearsOfExperience}
                      />
                      </div>
                      <FormControl >
          <InputLabel htmlFor="Gender">Gender</InputLabel> <br/>
          <Select
            value={this.state.Gender}
            onChange={this.handleGender}
           
          >
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Male"}>Male</MenuItem>
          </Select>
        </FormControl>
        
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
export default withStyles (styles)(CreatingReviewer); 
