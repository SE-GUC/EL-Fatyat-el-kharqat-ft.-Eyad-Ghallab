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
class CreatingLawyer extends Component {
    constructor(){
        super();
        this.handleusername =  this.handleusername.bind(this);
        this.handlepassword =  this.handlepassword.bind(this);
        this.handlefullname =  this.handlefullname.bind(this);
        this.handlebirthdate =  this.handlebirthdate.bind(this);
        this.handleemail=  this.handleemail.bind(this) ;
        this.handlephonenumber=  this.handlephonenumber.bind(this);
        this.handlelegaltype=  this.handlelegaltype.bind(this);
        this.handlegender=  this.handlegender.bind(this);
        this.handlenoOfPreviousCases=  this.handlenoOfPreviousCases.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        
        this.state={
        lawyer: [],
        username: "",
        password: "",
        fullname: "",
        birthdate: "",
        email: "",
        phonenumber:"",
        legaltype: "",
        gender:"",
        noOfPreviousCases: ""
    
        }
    }
    handleusername(e){
        this.setState({username: e.target.value })
    
      }
      handlepassword(e){
        this.setState({ password: e.target.value })
    
      }
      handlefullname(e){
        this.setState({fullname: e.target.value })
    
      }
      handlebirthdate(e){
        this.setState({ birthdate: e.target.value })
    
      }
      handleemail(e){
        this.setState({email: e.target.value })
    
      }
      handlephonenumber(e){
        this.setState({ phonenumber: e.target.value })
    
      }
      handlelegaltype(e){
        this.setState({ legaltype: e.target.value })
    
      }
      handlegender(e){
        this.setState({gender: e.target.value })
    
      }
      handlenoOfPreviousCases(e){
        this.setState({noOfPreviousCases: e.target.value })
    
      }
      handleSubmit(e){ 
        e.preventDefault();
    
        
        let databody = {
     "username":this.state.username,	
    "password":this.state.password,	
    "fullname":this.state.fullname,	
    "birthdate":this.state.birthdate,	
    "email":this.state.email,	
    "phonenumber":this.state.phonenumber,	
    "legaltype":this.state.legaltype,	
    "gender":this.state.gender,	
    "noOfPreviousCases":this.state.noOfPreviousCases,	
        
        }

      return fetch('/api/Lawyer/createlawyer', {
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
        <h3 align="center">New Lawyer</h3>
        <form onSubmit={this.handleSubmit}>

        
        <div className="form-group">
              <label>username:  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state. username}
                onChange={this.handleusername}
                />
                </div>

        <div className="form-group">
              <label> password:  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.password}
                onChange={this.handlepassword}
                />
                </div>
                
                <div className="form-group">
              <label> fullname:  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.fullname}
                onChange={this.handlefullname}
                />
                </div>
                
                <div className="form-group">
              <label> birthdate:  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.birthdate}
                onChange={this.handlebirthdate}
                />
                </div>
          
                <div className="form-group">
              <label> email:  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.email}
                onChange={this.handleemail}
                />
                </div>
                <div className="form-group">
              <label> phonenumber:  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.phonenumber}
                onChange={this.handlephonenumber}
                />
                </div>
                <div className="form-group">
              <label> legaltype:  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.legaltype}
                onChange={this.handlelegaltype}
                />
                </div>
                <FormControl >
          <InputLabel htmlFor="Gender">Gender</InputLabel> <br/>
          <Select
            value={this.state.gender}
            onChange={this.handlegender}
           
          >
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Male"}>Male</MenuItem>
          </Select>
        </FormControl>
                <div className="form-group">
              <label> noOfPreviousCases:  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.noOfPreviousCases}
                onChange={this.handlenoOfPreviousCases}
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
export default withStyles (styles)(CreatingLawyer);
