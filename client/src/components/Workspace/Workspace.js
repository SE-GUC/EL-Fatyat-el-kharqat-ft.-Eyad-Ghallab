import React, { Component } from 'react';
import './Workspace.css';
import {Redirect} from 'react-router-dom';
import Form from '../Form/Form';
import {BrowserRouter as Router,Switch,Route,Link}from 'react-router-dom';


class Workspace extends Component{
  
  constructor(){
    
    super();
    
  
    //this.Show=this.Show.bind(this);
    this.state ={
      Formm:[],
      Facility_name : "",
      Governorate:"",
      Locked: "",
      capital:"",
   
   
    City:"",
    Facility_Address: "", 
    Facility_Phone_Number: "",  
    Fax: "",
    Capital_Currency:"", 
 
    investorname:"", 
    Gender: "",
    Nationality:"", 
    TypeOf_IdentityProof:"",
    investor_nationalid: "",
    BirthDate: "",
    Phone_Number: "",
    Investor_Fax: "",
    email: "",
    Investor_Address:"", 
    Form_Date:"",
 
    Status: "",
    is_the_external_entities_notified:"", 
    Lawyer_review:""

      
  }
 
}




componentDidMount(){

    fetch('/api/SPC/')
    .then(res => res.json())
    .then(Form => this.setState({Formm: Form.data},()=> console.log('form',this.state.Form)));
}




render() {
       return (
         <div className="Workspace">
         <ul>
     {this.state.Formm.map( form  => <li key = {form._id}> Facility_name: {form.Facility_name} ,Governorate: {form.Governorate}, City:{form.City}, Facility_Address:{form.Facility_Address}, Facility_Phone_Number:{form.Facility_Phone_Number}, Fax:{form.Fax}, Capital_Currency:{form.Capital_Currency},capital:{form.capital},investorname:{form.investorname},Gender:{form.Gender},Nationality:{form.Nationality},
    TypeOf_IdentityProof: {form.TypeOf_IdentityProof},investor_nationalid:{form.investor_nationalid},BirthDate:{form.BirthDate},
    Phone_Number:{form.Phone_Number},Investor_Fax:{form.Investor_Fax},email:{form.email},Investor_Address:{form.Investor_Address},
    Form_Date:{form.Form_Date},Locked:{form.Locked},Status:{form.Status},is_the_external_entities_notified:{form.is_the_external_entities_notified},
    Lawyer_review:{form.Lawyer_review}

     <Link to={'Form'}>
           <button onClick= {() => {this.props.get(form._id)}} variant="contained" color="primary"type="submit">Go to this form naw</button></Link>
            </li>)}
      
         
        
     </ul> 
         <Router>
           <Switch>
             <Route exact path='/Form' component={Form}/>
             
             </Switch>
           </Router>
           
         </div>
         ); 
         
              
}

}



export default Workspace;