import React, { Component } from 'react';



class EditContract extends Component {
    constructor(){
        super();
        this.handleFirst_party_name =  this.handleFirst_party_name.bind(this);
            this.handleSecond_party_name =  this.handleSecond_party_name.bind(this);
            this.handleFirst_party_address =  this.handleFirst_party_address.bind(this);
            this.handleSecond_party_address =  this.handleSecond_party_address.bind(this);
            this.handleDay =  this.handleDay.bind(this);
            this.handleMonth =  this.handleMonth.bind(this);
            this.handleYear =  this.handleYear.bind(this);
            this.handleCorporate_name =  this.handleCorporate_name.bind(this);
            this.handleCorporate_governorate =  this.handleCorporate_governorate.bind(this);
            this.handleCorporate_city =  this.handleCorporate_city.bind(this);
            this.handleCorporate_address =  this.handleCorporate_address.bind(this);
            this.handleCorporate_Phone_Number =  this.handleCorporate_Phone_Number.bind(this);
            this.handleInvestor_name =  this.handleInvestor_name.bind(this);
            this.handleInvestor_address =  this.handleInvestor_address.bind(this);
            this.handleInvestor_ID=this.handleInvestor_ID.bind(this);
            this.handleInvestor_nationality=this.handleInvestor_nationality.bind(this);
            this.handleInvestor_BOD=this.handleInvestor_BOD.bind(this);
            this.handleInvestor_phone_number=this.handleInvestor_phone_number.bind(this);
            this.handleInvestor_Fax=this.handleInvestor_Fax.bind(this);
            this.handleInvestor_email=this.handleInvestor_email.bind(this);
            this.handleMain_business_activity=this.handleMain_business_activity.bind(this);
            this.handleOther_activities=this.handleOther_activities.bind(this);
            this.handleDuration_of_the_company=this.handleDuration_of_the_company.bind(this);
            this.handleCapital_Currency=this.handleCapital_Currency.bind(this);
            this.handleStatus= this.handleStatus.bind(this);
            this.handleType_of_form = this.handleType_of_form.bind(this);
            this.handleSubmit= this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.update=this.update.bind(this);
            
            this.state ={
            
            First_party_name:"",
            Second_party_name:"",   
            First_party_address:"",  
            Second_party_address:"",
            Day:"",   
            Month:"",   
            Year:"", 
            Corporate_name:"",  
            Corporate_governorate:"",
            Corporate_city:"",
            Corporate_address:"",
            Corporate_Phone_Number:"",
            Investor_name:"",  
            Investor_address:"",  
            Investor_ID:"",
            Investor_nationality:"", 
            Investor_DOB:"", 
            Investor_phone_number:"",
            Investor_Fax:"",
            Investor_email:"",
            Main_business_activity:"",
            Other_activities:"",
            Duration_of_the_company:"",
            Initial_capital: 50000,
            Capital_Currency:"",
            Status:"",
            Type_of_form:"",
            contracts:[],
               
            }
        
        }
        componentDidMount(){
          fetch('/api/Contract')
          .then(res => res.json())
          .then(Contract => this.setState({contracts: Contract.data}, () =>
           console.log('Contract fetched',this.state.contracts)));
        }
        handleChange(event) {
          this.setState({value: event.target.value});
        }
        handleFirst_party_name(e){
          this.setState({First_party_name: e.target.value })
    
        }
        handleSecond_party_name(e){
          this.setState({Second_party_name: e.target.value })
    
        }
        handleFirst_party_address(e){
          this.setState({First_party_address: e.target.value })
    
        }
        handleSecond_party_address(e){
          this.setState({Second_party_address: e.target.value })
    
        }
        handleDay(e){
          this.setState({Day: e.target.value })
    
        }
        handleMonth(e){
          this.setState({Month: e.target.value })
    
        }
        handleYear(e){
          this.setState({Year: e.target.value })
    
        }
       
        handleCorporate_name(e){
          this.setState({Corporate_name: e.target.value })
    
        }
        handleCorporate_governorate(e){
          this.setState({Corporate_governorate: e.target.value })
    
        }
        handleCorporate_city(e){
          this.setState({Corporate_city: e.target.value })
    
        }
        handleCorporate_address(e){
            this.setState({Corporate_address: e.target.value })
      
          }
          handleCorporate_Phone_Number(e){
            this.setState({Corporate_Phone_Number: e.target.value })
      
          }
          handleInvestor_name(e){
            this.setState({Investor_name: e.target.value })
      
          }
          handleInvestor_address(e){
            this.setState({Investor_address: e.target.value })
      
          }
          handleInvestor_ID(e){
            this.setState({Investor_ID: e.target.value })
      
          }
          handleInvestor_nationality(e){
            this.setState({Investor_nationality: e.target.value })
      
          }
          handleInvestor_BOD(e){
            this.setState({Investor_DOB: e.target.value })
      
          }
          handleInvestor_phone_number(e){
            this.setState({Investor_phone_number: e.target.value })
      
          }
          handleInvestor_Fax(e){
            this.setState({Investor_Fax: e.target.value })
      
          }
          handleInvestor_email(e){
            this.setState({Investor_email: e.target.value })
      
          }
          handleMain_business_activity(e){
            this.setState({Main_business_activity: e.target.value })
      
          }
          handleOther_activities(e){
            this.setState({Other_activities: e.target.value })
      
          }
          handleDuration_of_the_company(e){
            this.setState({Duration_of_the_company: e.target.value })
      
          }
          handleCapital_Currency(e){
            this.setState({Capital_Currency: e.target.value })
      
          }
          handleStatus(e){
            this.setState({Status: e.target.value })
      
          }
          handleType_of_form(e){
            this.setState({Type_of_form: e.target.value })
      
          }
    
    
        handleSubmit(e){
          e.preventDefault();
          let databody={
           " First_party_name":this.state.First_party_address,
            "Second_party_name":this.state.Second_party_name,   
            "First_party_address":this.state.First_party_address,  
            "Second_party_address":this.state.Second_party_address,
            "Day":this.state.Day,   
            "Month":this.state.Month,   
            "Year":this.state.Year, 
            "Corporate_name":this.state.Corporate_name,  
            "Corporate_governorate":this.state.Corporate_governorate,
            "Corporate_city":this.state.Corporate_city,
            "Corporate_address":this.state.Corporate_address,
            "Corporate_Phone_Number":this.state.Corporate_Phone_Number,
            "Investor_name":this.state.Investor_name,  
            "Investor_address":this.state.Investor_address,  
            "Investor_ID":this.state.Investor_ID,
            "Investor_nationality":this.state.Investor_nationality, 
            "Investor_DOB":this.state.Investor_DOB, 
            "Investor_phone_number":this.state.Investor_phone_number,
            "Investor_Fax":this.state.Investor_Fax,
            "Investor_email":this.state.Investor_email,
            "Main_business_activity":this.state.Main_business_activity,
           "Other_activities":this.state.Other_activities,
           "Duration_of_the_company":this.state.Duration_of_the_company,
            "Initial_capital": this.state.Initial_capital,
            "Capital_Currency":this.state.Capital_Currency,
            "Status":this.state.Status,
            "Type_of_form":this.state.Type_of_form,



          }
        }
          
          update(id){
                 console.log(this.state.Corporate_name)
                  let databody ;
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
             
                                 console.log(this.state.Corporate_name)
                  return fetch('api/Contract/'+id, {
                      method: 'PUT',
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
                        <h3 align="center">Update Contract</h3>
                        <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                <label>First party name:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.First_party_name}
                  onChange={this.handleFirst_party_name}
                  />
                  </div>

                  <div className="form-group">
                <label>Second party name:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.Second_party_name}
                  onChange={this.handleSecond_party_name}
                  />
                  </div>
                  <div className="form-group">
                <label>First party address:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.First_party_address}
                  onChange={this.handleFirst_party_address}
                  />
                  </div>
                  <div className="form-group">
                <label>Second party address:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.Second_party_address}
                  onChange={this.handleSecond_party_address}
                  />
                  </div>
                  <div className="form-group">
                <label>Day:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Day}
                      onChange={this.handleDay}
                  />
                  </div>
                  <div className="form-group">
                <label>Month:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Month}
                      onChange={this.handleMonth}
                  />
                  </div>
                  <div className="form-group">
                <label>Year:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Year}
                      onChange={this.handleYear}
                  />
                  </div>
                  <div className="form-group">
                <label>Corporate name:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Corporate_name}
                      onChange={this.handleCorporate_name}
                  />
                  </div>
                  <div className="form-group">
                <label>Corporate governorate:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Corporate_governorate}
                      onChange={this.handleCorporate_governorate}
                  />
                  </div>
                   
                
        <div className="form-group">
                <label>Corporate city:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Corporate_city}
                      onChange={this.handleCorporate_city}
                  />
                  </div>
                  <div className="form-group">
                <label>Corporate address:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Corporate_address}
                      onChange={this.handleCorporate_address}
                  />
                  </div>
                  <div className="form-group">
                <label>Corporate Phone Number:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Corporate_Phone_Number}
                      onChange={this.handleCorporate_Phone_Number}
                  />
                  </div>
                  <div className="form-group">
                <label>Investor Name:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Investor_name}
                      onChange={this.handleInvestor_name}
                  />
                  </div>
                  <div className="form-group">
                <label>Investor address:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Investor_address}
                      onChange={this.handleInvestor_address}
                  />
                  </div>
                  <div className="form-group">
                <label>Investor ID:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Investor_ID}
                      onChange={this.handleInvestor_ID}
                  />
                  </div>
       
                  <div className="form-group">
                <label>Investor Nationality:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Investor_nationality}
                      onChange={this.handleIInvestor_nationality}
                  />
                  </div>
                  <div className="form-group">
                <label>Investor BOD:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Investor_BOD}
                      onChange={this.handleIInvestor_BOD}
                  />
                  </div>
                  <div className="form-group">
                <label>Investor phone number:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Investor_phone_number}
                      onChange={this.handleInvestor_phone_number}
                  />
                  </div>
                  <div className="form-group">
                <label>Investor Fax:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Investor_Fax}
                      onChange={this.handleInvestor_Fax}
                  />
                  </div>
                  <div className="form-group">
                <label>Investor Email:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Investor_email}
                      onChange={this.handleInvestor_email}
                  />
                  </div>
                  <div className="form-group">
                <label>Main business activity:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Main_business_activity}
                      onChange={this.handleMain_business_activity}
                  />
                  </div>
                  <div className="form-group">
                <label>Other Activities :  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Other_activities}
                      onChange={this.handleOther_activities}
                  />
                  </div>
                  <div className="form-group">
                <label>Duration of the company:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Duration_of_the_company}
                      onChange={this.handleDuration_of_the_company}
                  />
                  </div>
                  <div className="form-group">
                <label>Initial capital:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Initial_capital}
                      onChange={this.handleInitial_capital}
                  />
                  </div>
                  <div className="form-group">
                <label>Capital Currency:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Capital_Currency}
                      onChange={this.handleCapital_Currency}
                  />
                  </div>
               
                  <div className="form-group">
                <label>Type of form:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                      value={this.state.Type_of_form}
                      onChange={this.handleType_of_form}
                  />
                  </div>
      
           




           
            <ul>
            {
        this.state.contracts.map( contract  =>
         <li key = {contract._id}>
         First_party_address: {contract.First_party_address} 
          <br/><button onClick= {() => {this.update(contract._id)}}> Update </button> 
          </li>
           )}
       </ul>
       </form>
   </div>
)
}
} 
export default EditContract;