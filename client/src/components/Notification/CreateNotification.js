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
class CreateNotification extends Component {

    constructor() {
        super();
        this.handleinvestor_EmailChange = this.handleinvestor_EmailChange.bind(this);
        this.handleMSGChange = this.handleMSGChange.bind(this);
        this.handlereviewer_NameChange = this.handlereviewer_NameChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          investor_Email: "",
          MSG:"",
          reviewer_Name:""
    
        }
      }
      
      handleinvestor_EmailChange(e){
          this.setState({investor_Email: e.target.value})
      }
      
      handleMSGChange(e){
        this.setState({MSG: e.target.value})
    }
    
    handlereviewer_NameChange(e){
        this.setState({reviewer_Name: e.target.value})
    }
  handleSubmit(e){
    e.preventDefault();
    let databody = {
        "investor_Email":this.state.investor_Email,
        "MSG": this.state.MSG,
        "reviewer_Name": this.state.reviewer_Name,
    }

    return fetch('/api/Notification/', {
        method:'POST',
        body: JSON.stringify(databody),
        headers:{
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data));
}

  render() {
   
    
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Notification</h3>
            <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="Email"
          value={this.state.investor_Email}
          onChange={this.handleinvestor_EmailChange}
          
        />
        </div> 
        <br/>
        <div className="form-group">
                <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="Message"
          value={this.state.MSG}
          onChange={this.handleMSGChange}
          
        />
        </div> 
        <br/>
        <div className="form-group">
                <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="Reviewer"
          value={this.state.reviewer_Name}
          onChange={this.handlereviewer_NameChange}
          
        />
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
export default withStyles (styles)(CreateNotification);
