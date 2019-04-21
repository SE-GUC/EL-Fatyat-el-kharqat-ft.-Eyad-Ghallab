import React, { Component } from 'react';
import './Workspace.css';
import {Redirect} from 'react-router-dom';
import Form from '../Form/Form';
import {BrowserRouter as Router,Switch,Route,Link}from 'react-router-dom';


class Workspace extends Component{
  
  constructor(){
    
    super();
    
  
   
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
     {this.state.Formm.map( form  => <li key = {form._id}> Facility_name: {form.Facility_name} 
    Form_Date:{form.Form_Date}

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