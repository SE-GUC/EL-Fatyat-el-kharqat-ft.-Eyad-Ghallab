import React, { Component } from 'react';
import './Lawyer.css';
class Workspace extends Component {
    constructor(){
            super()
            this.Approve=this.Approve.bind(this)
            this.state={
                SPC: [],
                SSC:[],
                Lawyer_review:""
        }
}

Approve(id){

var databody= {"Lawyer_review":"accepted"}
console.log(databody)

return fetch('http://localhost:5000/api/SPC/'+id, {
    method: 'PUT',
    body: JSON.stringify(databody),
    headers: {
        'Content-Type': 'application/json'
    },
})
.then(res => res.json())
.then(data => console.log(data)); 


}
Reject(id){
    var databody= {"Lawyer_review":"rejected"}
    return fetch('http://localhost:5000/api/SPC/'+id, {
        method: 'PUT',
        body: JSON.stringify(databody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data)); 
    
}




getssc(){
    fetch('/api/Lawyer/find/SSC')

.then(res => res.json())
.then(ssc => this.setState({SSC: ssc.data}, () => console.log('ssc fetched',this.state.SSC)));
       

}
getspc(){
    
    fetch('/api/Lawyer/find/SPC')

.then(res => res.json())
.then(spc => this.setState({SPC: spc.data}, () => console.log('spc fetched',this.state.SPC)));
       
}

render(){
        
    return(
        <div> 
            <h2>Unlocked forms</h2>
            
            <button onClick={()=>{this.getspc()}}>get untlocked SPC forms </button> 
            <ul>
      {
     this.state.SPC.map(spc => 
        <li key = {spc._id}>
      
         Facility_name: {spc.Facility_name}<br/> ,Governorate: {spc.Governorate}<br/> , City:{spc.City}<br/> , Facility_Address:{spc.Facility_Address}<br/> , Facility_Phone_Number:{spc.Facility_Phone_Number}<br/> , Fax:{spc.Fax}<br/> , Capital_Currency:{spc.Capital_Currency}<br/> ,capital:{spc.capital}<br/> ,investorname:{spc.investorname}<br/> ,Gender:{spc.Gender}<br/> ,Nationality:{spc.Nationality}<br/> ,
    TypeOf_IdentityProof: {spc.TypeOf_IdentityProof}<br/> ,investor_nationalid:{spc.investor_nationalid}<br/> ,BirthDate:{spc.BirthDate}<br/> ,
    Phone_Number:{spc.Phone_Number}<br/> ,Investor_Fax:{spc.Investor_Fax}<br/> ,email:{spc.email}<br/> ,Investor_Address:{spc.Investor_Address}<br/> ,
    Form_Date:{spc.Form_Date}<br/> ,Locked:{spc.Locked}<br/> ,Status:{spc.Status}<br/> ,is_the_external_entities_notified:{spc.is_the_external_entities_notified}<br/> ,
    Lawyer_review:{spc.Lawyer_review} <button onClick= {() => {this.Approve(spc._id)}}> Approve </button> <button onClick= {() => {this.Reject(spc._id)}}> Reject </button> 
              
            </li>)}
     </ul> 
     <button onClick={()=>{this.getssc()}}>get untlocked SSC forms </button> 
            <ul>
      {
     this.state.SSC.map(ssc => 
        <li key = {ssc._id}>
           Name: {ssc.Facility_name} 
         investor name:{ssc.investorname}


         Company_name: {ssc.Company_name}<br/> ,Governorate: {ssc.Governorate}<br/> , City:{ssc.City}<br/> , Company_Address:{ssc.Company_Address}<br/> , Company_Phone_Number:{ssc.Company_Phone_Number}<br/> , Fax:{ssc.Fax}<br/> , Capital_Currency:{ssc.Capital_Currency}<br/> ,capital:{ssc.capital}<br/> ,investorname:{ssc.investorname}<br/> ,Gender:{ssc.Gender}<br/> ,Nationality:{ssc.Nationality}<br/> ,
    TypeOf_IdentityProof: {ssc.TypeOf_IdentityProof}<br/> ,investor_nationalid:{ssc.investor_nationalid}<br/> ,BirthDate:{ssc.BirthDate}<br/> ,
    Phone_Number:{ssc.Phone_Number}<br/> ,Investor_Fax:{ssc.Investor_Fax}<br/> ,email:{ssc.email}<br/> 
    <button onClick= {() => {this.Approve(ssc._id)}}> Approve </button> <button onClick= {() => {this.Reject(ssc._id)}}> Reject </button> 
              
          
            </li>)}
     </ul> 
  
 }

        </div>
    )}
}
export default Workspace;