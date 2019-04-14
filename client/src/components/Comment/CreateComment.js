import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


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
class CreateComment extends Component {

    constructor() {
       super(); 
       this.handlenameChange =  this.handlenameChange.bind(this);
       this.handlecommentChange =  this.handlecommentChange.bind(this);
       this.handleSubmit= this.handleSubmit.bind(this);
       this.state ={
        name : "",
        comment:"",
       
    }
}
  handlenameChange(e){
    this.setState({name: e.target.value });

  }
  handlecommentChange(e){
    this.setState({comment: e.target.value });
  };
  handleSubmit(e){
    e.preventDefault();
    let databody = {
        "name":this.state.name,	
        "comment":this.state.comment
    }	
    return fetch('/api/Comment', {
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
        
            <h3 align="center">Comment</h3>
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
          label="Comment"
          value={this.state.comment}
          onChange={this.handlecommentChange}
          
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
export default withStyles (styles)(CreateComment);
