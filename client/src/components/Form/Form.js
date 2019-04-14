import React, { Component } from 'react';

import './Form.css';
import Workspace from '../Workspace/Workspace';

class Form extends Component {
    
    constructor(){
        super();

    this.state ={
    Form:[]}    
//     Facility_name:"",
//     Governorate:"",
//     City:"",
//     Facility_Address: "", 
//     Facility_Phone_Number: "",  
//     Fax: "",
//     Capital_Currency:"", 
//     capital: "",
//     investorname:"", 
//     Gender: "",
//     Nationality:"", 
//     TypeOf_IdentityProof:"",
//     investor_nationalid: "",
//     BirthDate: "",
//     Phone_Number: "",
//     Investor_Fax: "",
//     email: "",
//     Investor_Address:"", 
//     Form_Date:"",
//     Locked:"",
//     Status: "",
//     is_the_external_entities_notified:"", 
//     Lawyer_review:""

    
  }
  
  


// setItems(){
//     Facility_name:x.Facility_name;
//     Governorate:x.Governorate;
//     City:x.City;
//     Facility_Address: x.Facility_Address; 
//     Facility_Phone_Number: x.Facility_Phone_Number; 
//     Fax:x.Fax;
//     Capital_Currency:x.Capital_Currency; 
//     capital: x.capital;
//     investorname:x.investorname;
//     Gender: x.Gender;
//     Nationality:x.Nationality;
//     TypeOf_IdentityProof:x.TypeOf_IdentityProof;
//     investor_nationalid: x.investor_nationalid;
//     BirthDate: x.BirthDate;
//     Phone_Number: x.Phone_Number;
//     Investor_Fax: x.Investor_Fax;
//     email: x.email;
//     Investor_Address:x.Investor_Address; 
//     Form_Date:x.Form_Date;
//     Locked:x.Locked;
//     Status: x.Status;
//     is_the_external_entities_notified:x.is_the_external_entities_notified; 
//     Lawyer_review:x.Lawyer_review

//   }





    

 get(id){
   fetch('/api/SPC/'+id)
   .then(res => res.json()) 
   .then(form => this.setState({Form: form.data}, ()=> console.log('form Fetched..',
   this.state.Form)));
}

  render() {
    return (
        
        <ul> {this.state.Form.map( form  => <li key = {form._id}> Facility_name: {form.Facility_name} ,Governorate: {form.Governorate}
         </li>)}
         <Workspace get={this.get} />
            
        </ul> 
    );
  }
}

export default Form;