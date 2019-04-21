import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import './Reviewer.css';
import Button from '@material-ui/core/Button';
//import Login from './Login/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DeleteReviewer from './DeleteReviewer';

//import { set } from 'mongoose';

import { Redirect } from "react-router-dom";



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


class Forms extends Component {
  
    constructor(){
      
        super();
        this.Approve = this.Approve.bind(this);

    this.state={
      spcs:[],
      SSC:[],
      spcforms:"",
      spcforms1:[],

    
          SPC: [],
          SSC: [],
          isSSC: true,
          Lawyer_review: "",
          id: false,
          idssc: false
      }}
      local(id) {
        localStorage.setItem("id", id);
    
        this.setState({ id: true });
      }
 
  yourfunc(id){
    
    fetch('/api/SPC/name/'+id, {
     method: 'GET',
     headers: {
         'Content-Type': 'application/json'
     },
 })
 .then(res => res.json())
 .then(spcform => this.setState({spcforms: spcform.data}, 
   () => console.log('spc form fetched',this.state.spcforms)));
   localStorage.setItem("contract", this.state.spcforms);

console.log(this.state.spcforms);

this.set(id)
 }


set(id){
 let databody = {
   
     
     "Corporate_name":
     localStorage.getItem("contract"),
    // "form_id":id
 }

  fetch('/api/contractFinal', {
     method: 'POST',
     body: JSON.stringify(databody),
     headers: {
         'Content-Type': 'application/json'
     }
 })
 .then(res => res.json())
 .then(data => console.log(data)); 
 console.log('Done')

 
  }
  
  
      

      componentWillMount(){
        fetch('/api/Reviewer/find/SPC')}
      localssc(id) {
        localStorage.setItem("sscid", id);
    
        this.setState({ idssc: true });
      }
      Approve(id) {
        var databody = { Lawyer_review: "accepted" };
        console.log(databody);
    
        return fetch("/api/SPC/" + id, {
          method: "PUT",
          body: JSON.stringify(databody),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => res.json())
          .then(data => console.log(data));
      }
      Reject(id) {
        var databody = { Lawyer_review: "rejected" };
        return fetch("/api/SPC/" + id, {
          method: "PUT",
          body: JSON.stringify(databody),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => res.json())
          .then(data => console.log(data));
      }
    
      getspc(){
        fetch('/api/Reviewer/find/SPC')
        .then(res => res.json())
        .then(SPCform => this.setState({spcs: SPCform.data}, () => console.log('SPC fetched',this.state.spcs)));
      }

      getssc(){
        fetch('/api/Reviewer/find/SSC')
        .then(res => res.json())
        .then(ssc => this.setState({SSC: ssc.data}, () => console.log('SSC fetched' ,this.state.SSC)));
      }
    
    yourfunc1(id){
      fetch('/api/SSC/companyname/'+id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(sscform => this.setState({sscforms: sscform.data}, 
      () => console.log('ssc form fetched',this.state.sscforms)));
      localStorage.setItem("contractS", this.state.sscforms);
   
   console.log(this.state.sscforms);
   
   this.set1(id)

    }  
    
    set1(id){
      let databody = {
   
     
        "Corporate_name":
        localStorage.getItem("contractS"),
       // "form_id":id
    }
   
     fetch('/api/contractFinal', {
        method: 'POST',
        body: JSON.stringify(databody),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data)); 
    console.log('Done')
   

    }
   
   
  render (){
    

  return(
    

    <div>
    <h2>All accepted spc Forms</h2>
    <ul>
      {this.state.spcs.map(spc =>
        <li key = {spc._id}
        
        > Facility_name: {spc.Facility_name} 
        <Button onClick={() => this.yourfunc(spc._id)}>Create Contract</Button> 
        </li>
            )}
        </ul> 
        <h2>All accepted ssc Forms</h2>
        <ul>
          {this.state.SSC.map(ssc =>
            <li key = {ssc._id}
            >Company_name: {ssc.Company_name}
            <Button onClick={() => this.yourfunc1(ssc._id)}>Create Contract</Button> 
            </li>
                )}
            </ul> 
        
          <h2> forms</h2>
  
          <button
            onClick={() => {
              this.getspc();
            }}
          >
            SPC forms{" "}
          </button>
          <ul>
            {this.state.SPC.map(spc => (
              <li key={spc._id}>
                Facility_name: {spc.Facility_name}
                <br />
                Form_Date:{spc.Form_Date}
                <br />
                <button
                  onClick={() => {
                    this.local(spc._id);
                  }}
                >
                  {" "}
                  Review Company{" "}
                </button>
              </li>
            ))}
          </ul>
          {this.state.id ? <Redirect to={{ pathname: "/myspc" }} /> : <h1 />}
  
          <button
            onClick={() => {
              this.getssc();
            }}
          >
             SSC forms{" "}
          </button>
          <ul>
            {this.state.SSC.map(ssc => (
              <li key={ssc._id}>
                Company_name: {ssc.Company_name}
                <br />
                Form_Date:{ssc.Formdate}
                <br />
                <button
                  onClick={() => {
                    this.localssc(ssc._id);
                  }}
                >
                  {" "}
                  Review Company{" "}
                </button>
              </li>
            ))}
          </ul>
          {this.state.idssc ? <Redirect to={{ pathname: "/myssc" }} /> : <h1 />}
      </div>
    );
  }
}



export default withStyles (styles)(Forms); 