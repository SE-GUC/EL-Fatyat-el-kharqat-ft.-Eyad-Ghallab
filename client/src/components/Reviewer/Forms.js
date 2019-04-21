import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import './Reviewer.css';



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

//import './SPC.css'

class Forms extends Component {
    constructor(){
        super();
        //this.sms = this.sms.bind(this)
    this.state={
      spcs:[],
      SSC:[],
     
      
    
    }
      }

      componentWillMount(){
        fetch('/api/Reviewer/find/SPC')
        .then(res => res.json())
        .then(SPCform => this.setState({spcs: SPCform.data}, () => console.log('SPC fetched',this.state.spcs)));
      }

      componentDidMount(){
        fetch('/api/Reviewer/find/SSC')
        .then(res => res.json())
        .then(ssc => this.setState({SSC: ssc.data}, () => console.log('SSC fetched' ,this.state.SSC)));
      }
      view(){
        
        //e.preventDefault();
        console.log("why the hell");
        var databody = { Lawyer_review: "accepted" };
        console.log(databody);
    
        return fetch("/api/SPC/" + localStorage.getItem("id"), {
          method: "PUT",
          body: JSON.stringify(databody),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => res.json())
          .then(data => console.log(data));
    
    }
    
       

   
  render (){

  return(

    <div>
    <h2>All accepted spc Forms by Lawyer </h2>
    <ul>
    
      {this.state.spcs.map(spc =>
        <li key = {spc._id}
        > Facility_name: {spc.Facility_name} 
        </li>
            )}
        </ul> 
        <h2>All accepted ssc Forms by Lawyer </h2>
        <ul>
          {this.state.SSC.map(ssc =>
            <li key = {ssc._id}
            >Company_name: {ssc.Company_name}
            <button
              onClick={() => {
                this.view();
              }}
            >
              view
            </button> 
            </li>
                )}
            </ul> 
            
      </div>
    )
  }
}


export default withStyles (styles)(Forms); 