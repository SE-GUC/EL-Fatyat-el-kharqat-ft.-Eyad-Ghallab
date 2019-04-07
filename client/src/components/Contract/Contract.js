import React, { Component } from 'react';

import './Contract.css';

class Contract extends Component {
    constructor(){
        super();
        this.handleFirst_party_nameChange =  this.handleFirst_party_nameChange.bind(this);
        this.handleSecond_party_nameChange =  this.handleSecond_party_nameChange.bind(this);
        this.handleFirst_party_addressChange =  this.handleFirst_party_addressChange.bind(this);
        this.handleSecond_party_addressChange =  this.handleSecond_party_addressChange.bind(this);
        this.handleDayChange =  this.handleDayChange.bind(this);
        this.handleMonthChange =  this.handleMonthChange.bind(this);
        this.handleYeareChange =  this.handleYeareChange.bind(this);
        this.handleTimeChange =  this.handleTimeChange.bind(this);
        this.handleCorporate_nameChange =  this.handleCorporate_nameChange.bind(this);
        this.handleCorporate_governorateChange =  this.handleCorporate_governorateChange.bind(this);
        this.handleCorporate_cityChange =  this.handleCorporate_cityChange.bind(this);
        this.handleCorporate_addressChange =  this.handleCorporate_addressChange.bind(this);
        this.handleCorporate_Phone_NumberChange =  this.handleCorporate_Phone_NumberChange.bind(this);
        this.handleInvestor_nameChange =  this.handleInvestor_nameChange.bind(this);
        this.handleInvestor_addressChange =  this.handleInvestor_addressChange.bind(this);
        this.handleCorporate_Phone_NumberChange=this.handleCorporate_Phone_NumberChange.bind(this);
        this.handleInvestor_nameChange=this.handleInvestor_nameChange.bind(this);
        this.handleInvestor_addressChange=this.handleInvestor_addressChange.bind(this);
        this.handleInvestor_IDChange=this.handleInvestor_IDChange.bind(this);
        this.handleInvestor_nationalityChange=this.handleInvestor_nationalityChange.bind(this);
        this.handleInvestor_DOBChange=this.handleInvestor_DOBChange.bind(this);
        this.handleInvestor_phone_numberChange=this.handleInvestor_phone_numberChange.bind(this);
        this.handleInvestor_FaxChange=this.handleInvestor_FaxChange.bind(this);
        this.handleInvestor_emailChange=this.handleInvestor_emailChange.bind(this);
        this.handleMain_business_activityChange=this.handleMain_business_activityChange.bind(this);
        this.handleOther_activitiesChange=this.handleOther_activitiesChange.bind(this);
        this.handleDuration_of_the_companyChange=this.handleDuration_of_the_companyChange.bind(this);
        this.handleCapital_CurrencyChange=this.handleCapital_CurrencyChange.bind(this);
        this.handleStatusChange= this.handleStatusChange.bind(this);
        this.handleType_of_formChange =  this.handleType_of_formChange.bind(this);
        
        this.handleSubmit= this.handleSubmit.bind(this);
        this.delete=this.delete.bind(this);
        this.state ={
            Contracts:[],

        First_party_name: "",
        Second_party_name:"",   
        First_party_address:"",  
        Second_party_address:"",
        Day:"",   
        Month:"",   
        Year:"", 
        Time:"",  
        Corporate_name:"",  
        Corporate_governorate:"",
        Corporate_city: "",
        Corporate_address: "",
        Corporate_Phone_Number: "",
        Investor_name:"",  
        Investor_address:"",  
        Investor_ID:"",
        Investor_nationality:"", 
        Investor_DOB:"", 
        Investor_phone_number:"",
        Investor_Fax: "",
        Investor_email: "",
        Main_business_activity: "",
        Other_activities: "",
        Duration_of_the_company: "",
        Initial_capital: "",
        Capital_Currency: "",
        Status:"",
        Type_of_form:""
           
        }
    
    }

    handleFirst_party_nameChange(e){
      this.setState({First_party_name: e.target.value })

    }
    handleSecond_party_nameChange(e){
      this.setState({Second_party_name: e.target.value })

    }
    handleFirst_party_addressChange(e){
      this.setState({First_party_address: e.target.value })

    }
    handleSecond_party_addressChange(e){
      this.setState({Second_party_address: e.target.value })

    }
    handleDayChange(e){
      this.setState({Day: e.target.value })

    }
    handleMonthChange(e){
      this.setState({Month: e.target.value })

    }
    handleYeareChange(e){
      this.setState({Year: e.target.value })

    }
    handleTimeChange(e){
      this.setState({Time: e.target.value })

    }
    handleCorporate_nameChange(e){
      this.setState({Corporate_name: e.target.value })

    }
    handleCorporate_governorateChange(e){
      this.setState({Corporate_governorate: e.target.value })

    }
    handleCorporate_cityChange(e){
      this.setState({Corporate_city: e.target.value })

    }
    handleCorporate_addressChange(e){
        this.setState({Corporate_address: e.target.value })
  
      }
      handleCorporate_Phone_NumberChange(e){
        this.setState({Corporate_Phone_Number: e.target.value })
  
      }
      handleInvestor_nameChange(e){
        this.setState({Investor_name: e.target.value })
  
      }
      handleInvestor_addressChange(e){
        this.setState({Investor_address: e.target.value })
  
      }
      handleInvestor_IDChange(e){
        this.setState({Investor_ID: e.target.value })
  
      }
      handleInvestor_nationalityChange(e){
        this.setState({Investor_nationality: e.target.value })
  
      }
      handleInvestor_DOBChange(e){
        this.setState({Investor_DOB: e.target.value })
  
      }
      handleInvestor_phone_numberChange(e){
        this.setState({Investor_phone_number: e.target.value })
  
      }
      handleInvestor_FaxChange(e){
        this.setState({Investor_Fax: e.target.value })
  
      }
      handleInvestor_emailChange(e){
        this.setState({Investor_email: e.target.value })
  
      }
      handleMain_business_activityChange(e){
        this.setState({Main_business_activity: e.target.value })
  
      }
      handleOther_activitiesChange(e){
        this.setState({Other_activities: e.target.value })
  
      }
      handleDuration_of_the_companyChange(e){
        this.setState({Duration_of_the_company: e.target.value })
  
      }
      handleCapital_CurrencyChange(e){
        this.setState({Capital_Currency: e.target.value })
  
      }
      handleStatusChange(e){
        this.setState({Status: e.target.value })
  
      }
      handleType_of_formChange(e){
        this.setState({Type_of_form: e.target.value })
  
      }

    
    delete(id){
      return fetch('/api/Contract/'+id, {
        method: 'DELETE',
       // body: JSON.stringify(databody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data));
    }

    handleSubmit(e){
      e.preventDefault();
      let databody = {

            "First_party_name": this.state.First_party_name,
            "Second_party_name": this.state.Second_party_name,
            "First_party_address": this.state.First_party_address,
            "Second_party_address": this.state.Second_party_address,
            "Day": this.state.Day,
            "Month": this.state.Month,
            "Year": this.state.Year,
            "Time": this.state.Time,
            "Corporate_name": this.state.Corporate_name,
            "Corporate_governorate": this.state.Corporate_governorate,
            "Corporate_city": this.state.Corporate_city,
            "Corporate_address": this.state.Corporate_address,
            "Corporate_Phone_Number": this.state.Corporate_Phone_Number,
            "Investor_name": this.state.Investor_name,
            "Investor_address": this.state.Investor_address,
            "Investor_ID": this.state.Investor_ID,
            "Investor_nationality": this.state.Investor_nationality,
            "Investor_DOB": this.state.Investor_DOB,
            "Investor_phone_number": this.state.Investor_phone_number,
            "Investor_Fax": this.state.Investor_Fax,
            "Investor_email": this.state.Investor_email,
            "Main_business_activity": this.state.Main_business_activity,
            "Other_activities": this.state.Other_activities,
            "Duration_of_the_company": this.state.Duration_of_the_company,
            "Initial_capital": this.state.Initial_capital,
            "Capital_Currency":this.state.Capital_Currency,
            "Status": this.state.Status,
            "Type_of_form":this.state.Type_of_form,

      }
  
      return fetch('/api/Contract/', {
          method: 'POST',
          body: JSON.stringify(databody),
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => console.log(data)); 
  }


  update(id){
    console.log(this.state.First_party_name)
     let databody 
     
    

 if (this.state.First_party_name !== ""){
   databody = {"First_party_name":this.state.First_party_name}}
 if(this.state.Second_party_name !== ""){
   databody = {"Second_party_name":this.state.Second_party_name}}
   if(this.state.First_party_address !== ""){
     databody = {"First_party_address":this.state.First_party_address}}
     if(this.state.Second_party_address !== ""){
       databody = {"Second_party_address":this.state.Second_party_address}}
       if(this.state.Day !== ""){
         databody = {"Day":this.state.Day}}
         if(this.state.Month !== ""){
           databody = {"Month":this.state.Month}}
           if(this.state.Year !== ""){
             databody = {"Year":this.state.Year}}
             if(this.state.Time !== ""){
               databody = {"Time":this.state.Time}}
               if(this.state.Corporate_name !== ""){
                 databody = {"Corporate_name":this.state.Corporate_name}}
                 if(this.state.Corporate_governorate !== ""){
                    databody = {"Corporate_governorate":this.state.Corporate_governorate}}
                 if(this.state.Corporate_city !== ""){
                    databody = {"Corporate_city":this.state.Corporate_city}}
                 if(this.state.Corporate_address !== ""){
                    databody = {"Corporate_address":this.state.Corporate_address}}
                 if(this.state.Corporate_Phone_Number !== ""){
                    databody = {"Corporate_Phone_Number":this.state.Corporate_Phone_Number}}
                 if(this.state.Investor_name !== ""){
                    databody = {"Investor_name":this.state.Investor_name}}
                 if(this.state.Investor_address !== ""){
                    databody = {"Investor_address":this.state.Investor_address}}
                 if(this.state.Investor_ID !== ""){
                    databody = {"Investor_ID":this.state.Investor_ID}}
                 if(this.state.Investor_nationality !== ""){
                    databody = {"Investor_nationality":this.state.Investor_nationality}}
                 if(this.state.Investor_DOB !== ""){
                    databody = {"Investor_DOB":this.state.Investor_DOB}}
                 if(this.state.Investor_phone_number !== ""){
                    databody = {"Investor_phone_number":this.state.Investor_phone_number}}
                 if(this.state.Investor_Fax !== ""){
                    databody = {"Investor_Fax":this.state.Investor_Fax}}
                 if(this.state.Investor_email !== ""){
                    databody = {"Investor_email":this.state.Investor_email}}
                 if(this.state.Main_business_activity !== ""){
                    databody = {"Main_business_activity":this.state.Main_business_activity}}
                 if(this.state.Other_activities !== ""){
                    databody = {"Other_activities":this.state.Other_activities}}
                 if(this.state.Duration_of_the_company !== ""){
                    databody = {"Duration_of_the_company":this.state.Duration_of_the_company}}
                 if(this.state.Initial_capital !== ""){
                    databody = {"Initial_capital":this.state.Initial_capital}}
                 if(this.state.Capital_Currency !== ""){
                    databody = {"Capital_Currency":this.state.Capital_Currency}}
                 if(this.state.Status !== ""){
                    databody = {"Status":this.state.Status}}
                 if(this.state.Type_of_form !== ""){
                    databody = {"Type_of_form":this.state.Type_of_form}}

                   console.log(this.state.username)
     return fetch('http://localhost:5000/api/Contract/'+id, {
         method: 'PUT',
         body: JSON.stringify(databody),
         headers: {
             'Content-Type': 'application/json'
         },
     })
     .then(res => res.json())
     .then(data => console.log(data)); 
 }
  
  
    
    componentDidMount(){
  
        fetch('/api/Contract/')
        .then(res => res.json())
        .then(Contract => this.setState({Contracts: Contract.data},()=> console.log('the contratcs',this.state.Contracts)));
     
    }
//   render() {
//     return (
//       <div>
        
//     <h2> My Contracts</h2>

//  <form onSubmit={this.handleSubmit}>
               
//                 <input type="submit" value="Create Contract" />
//             </form> 

// {

//   <ul>
//       {
//       this.state.Contracts.map( Contracts  => <li key = {Contracts._id}> First party name: {Contracts.First_party_name} Second party name: {Contracts.Second_party_name}<button onClick= {() => {this.delete(Contracts._id)}}> Delete </button> </li>)}
//       <form onClick={() => {this.update(Contract._id)}}> 
      
//                 <input type="submit" value="Update Contract" />
//             </form> 
//      </ul> 
  
//  }
//       </div>
//     );
//   }
// }

render() {
    //  var {Investors} =  this.state;
       return (
         <div>
           
       <h2> My Contracts</h2>
   
    <form onSubmit={this.handleSubmit}>
    <label>
                First_party_name
                    <input type="text" name="First_party_name" value={this.First_party_name} onChange={this.handlenameChange}/>
                    <br/>
                </label>
                <label>
                Second_party_name
                    <input type="text" name="Second_party_name" value={this.Second_party_name} onChange={this.handlepasswordChange}/>
                    <br/>
                </label>
                <label>
                First_party_address
                    <input type="text" name="First_party_address" value={this.First_party_address} onChange={this.handleemailChange}/>
                    <br/>
                </label>
                <label>
                Second_party_address
                    <input type="text" name="Second_party_address" value={this.Second_party_address} onChange={this.handleusernameChange}/>
                    <br/>
                </label>
                <label>
                Day
                    <input type="text" name="Day" value={this.Day} onChange={this.handlenationalityChange}/>
                    <br/>
                </label>
                <label>
                Month
                    <input type="text" name="Month" value={this.Month} onChange={this.handlegenderChange}/>
                    <br/>
                </label>
                <label>
                Year
                    <input type="text" name="Year" value={this.Year} onChange={this.handlebithdateChange}/>
                    <br/>
                </label>
                <label>
                Corporate_name
                    <input type="text" name="Corporate_name" value={this.Corporate_name} onChange={this.handlecityChange}/>
                    <br/>
                </label>
                <label>
                Corporate_governorate
                    <input type="text" name="Corporate_governorate" value={this.Corporate_governorate} onChange={this.handlecountryChange}/>
                    <br/>
                </label>
                <label>
                Corporate_city
                    <input type="text" name="Corporate_city" value={this.Corporate_city} onChange={this.handlejobtitleChange}/>
                    <br/>
                </label>
                <label>
                Corporate_address
                    <input type="text" name="Corporate_address" value={this.Corporate_address} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
                <label>
                Corporate_Phone_Number
                    <input type="text" name="Corporate_Phone_Number" value={this.Corporate_Phone_Number} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
                 <label>
                 Corporate_address
                    <input type="text" name="Corporate_address" value={this.Corporate_address} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
                <label>
                Investor_name
                    <input type="text" name="Investor_name" value={this.Corporate_Phone_Number} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
                <label>
                Investor_address
                    <input type="text" name="Investor_address" value={this.Investor_address} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
            <label>
            Investor_ID
                    <input type="text" name="Investor_ID" value={this.Investor_ID} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
                <label>
                Investor_nationality
                    <input type="text" name="Investor_nationality" value={this.Investor_nationality} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
                <label>
                Investor_DOB
                    <input type="text" name="Investor_DOB" value={this.Investor_DOB} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
                <label>
                Investor_phone_number
                    <input type="text" name="Investor_phone_number" value={this.Investor_phone_number} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
                <label>
                Investor_Fax
                    <input type="text" name="Investor_Fax" value={this.Investor_Fax} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
                <label>
                Investor_email
                    <input type="text" name="Investor_email" value={this.Investor_email} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
            
            <label>
            Main_business_activity
                    <input type="text" name="Main_business_activity" value={this.Main_business_activity} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
           
            <label>
            Other_activities
                    <input type="text" name="Other_activities" value={this.Other_activities} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
            <label>
            Duration_of_the_company
                    <input type="text" name="Duration_of_the_company" value={this.Duration_of_the_company} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
          
            <label>
            Initial_capital
                    <input type="text" name="Initial_capital" value={this.Initial_capital} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
           
            <label>
            Capital_Currency
                    <input type="text" name="Capital_Currency" value={this.Capital_Currency} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
          
            <label>
            Status
                    <input type="text" name="Status" value={this.Status} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
        
            <label>
            Type_of_form
                    <input type="text" name="Type_of_form" value={this.Type_of_form} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
                   <input type="submit" value="Create Contract" />
               </form> 
   
   {
   
     <ul>
         {
        this.state.Contracts.map( Contracts  => <li key = {Contracts._id}> First party name: {Contracts.First_party_name} Second party name: {Contracts.Second_party_name} <button onClick= {() => {this.delete(Contracts._id)}}> Delete </button>   
        <form onClick={() => {this.update(Contracts._id)}}> 
        <label>
                First_party_name
                    <input type="text" name="First_party_name" value={this.First_party_name} onChange={this.handleFirst_party_nameChange}/>
                    <br/>
                </label>
                <label>
                Second_party_name
                    <input type="text" name="Second_party_name" value={this.Second_party_name} onChange={this.handleSecond_party_nameChange}/>
                    <br/>
                </label>
                <label>
                First_party_address
                    <input type="text" name="First_party_address" value={this.First_party_address} onChange={this.handleFirst_party_addressChange}/>
                    <br/>
                </label>
                <label>
                Second_party_address
                    <input type="text" name="Second_party_address" value={this.Second_party_address} onChange={this.handleSecond_party_addressChange}/>
                    <br/>
                </label>
                <label>
                Day
                    <input type="text" name="Day" value={this.Day} onChange={this.handleDayChange}/>
                    <br/>
                </label>
                <label>
                Month
                    <input type="text" name="Month" value={this.Month} onChange={this.handleMonthChange}/>
                    <br/>
                </label>
                <label>
                Year
                    <input type="text" name="Year" value={this.Year} onChange={this.handleYearChange}/>
                    <br/>
                </label>
                <label>
                Corporate_name
                    <input type="text" name="Corporate_name" value={this.Corporate_name} onChange={this.handleCorporate_nameChange}/>
                    <br/>
                </label>
                <label>
                Corporate_governorate
                    <input type="text" name="Corporate_governorate" value={this.Corporate_governorate} onChange={this.handleCorporate_governorateChange}/>
                    <br/>
                </label>
                <label>
                Corporate_city
                    <input type="text" name="Corporate_city" value={this.Corporate_city} onChange={this.handleCorporate_cityChange}/>
                    <br/>
                </label>
                <label>
                Corporate_address
                    <input type="text" name="Corporate_address" value={this.Corporate_address} onChange={this.handleCorporate_addressChange}/>
                    <br/>
                </label>
                <label>
                Corporate_Phone_Number
                    <input type="text" name="Corporate_Phone_Number" value={this.Corporate_Phone_Number} onChange={this.handleCorporate_Phone_NumberChange}/>
                    <br/>
                </label>
                 <label>
                 Corporate_address
                    <input type="text" name="Corporate_address" value={this.Corporate_address} onChange={this.handleCorporate_addressChange}/>
                    <br/>
                </label>
                <label>
                Investor_name
                    <input type="text" name="Investor_name" value={this.Corporate_Phone_Number} onChange={this.handleCorporate_Phone_NumberChange}/>
                    <br/>
                </label>
                <label>
                Investor_address
                    <input type="text" name="Investor_address" value={this.Investor_address} onChange={this.handleInvestor_addressChange}/>
                    <br/>
                </label>
            <label>
            Investor_ID
                    <input type="text" name="Investor_ID" value={this.Investor_ID} onChange={this.handleInvestor_IDChange}/>
                    <br/>
                </label>
                <label>
                Investor_nationality
                    <input type="text" name="Investor_nationality" value={this.Investor_nationality} onChange={this.handleInvestor_nationalityChange}/>
                    <br/>
                </label>
                <label>
                Investor_DOB
                    <input type="text" name="Investor_DOB" value={this.Investor_DOB} onChange={this.handleInvestor_DOBChange}/>
                    <br/>
                </label>
                <label>
                Investor_phone_number
                    <input type="text" name="Investor_phone_number" value={this.Investor_phone_number} onChange={this.handleInvestor_phone_numberChange}/>
                    <br/>
                </label>
                <label>
                Investor_Fax
                    <input type="text" name="Investor_Fax" value={this.Investor_Fax} onChange={this.handleInvestor_FaxChange}/>
                    <br/>
                </label>
                <label>
                Investor_email
                    <input type="text" name="Investor_email" value={this.Investor_email} onChange={this.handleInvestor_emailChange}/>
                    <br/>
                </label>
            
            <label>
            Main_business_activity
                    <input type="text" name="Main_business_activity" value={this.Main_business_activity} onChange={this.handleMain_business_activityChange}/>
                    <br/>
                </label>
           
            <label>
            Other_activities
                    <input type="text" name="Other_activities" value={this.Other_activities} onChange={this.handleOther_activitiesChange}/>
                    <br/>
                </label>
            <label>
            Duration_of_the_company
                    <input type="text" name="Duration_of_the_company" value={this.Duration_of_the_company} onChange={this.handleDuration_of_the_companyChange}/>
                    <br/>
                </label>
          
            <label>
            Initial_capital
                    <input type="text" name="Initial_capital" value={this.Initial_capital} onChange={this.handleInitial_capitalChange}/>
                    <br/>
                </label>
           
            <label>
            Capital_Currency
                    <input type="text" name="Capital_Currency" value={this.Capital_Currency} onChange={this.handleCapital_CurrencyChange}/>
                    <br/>
                </label>
          
            <label>
            Status
                    <input type="text" name="Status" value={this.Status} onChange={this.handleStatusChange}/>
                    <br/>
                </label>
        
            <label>
            Type_of_form
                    <input type="text" name="Type_of_form" value={this.Type_of_form} onChange={this.handleType_of_formChange}/>
                    <br/>
                </label>
    <input type="submit" value="update Contract" />
               </form>  
               </li>)}
        </ul> 
     
    }
         </div>
       );
     }
   }

export default Contract;
