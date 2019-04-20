import React, { Component } from 'react';


class EditPayment extends Component {
    constructor(){
        super();
  
        this.handleCard_type =  this.handleCard_type.bind(this);
        this.handleCard_no =  this.handleCard_no.bind(this);
        this.handleAmount =  this.handleAmount.bind(this);
        this.handleFirstname =  this.handleFirstname.bind(this);
        this.handleLastname=  this.handleLastname.bind(this) ;
        this.handleEmail=  this.handleEmail.bind(this);
        this.handlePhone_number=  this.handlePhone_number.bind(this);
        this.handleStreet_Address=  this.handleStreet_Address.bind(this);
        this.handleCity=  this.handleCity.bind(this);
        this.handleState_Region=  this.handleState_Region.bind(this);
        this.handleExpire_date=  this.handleExpire_date.bind(this);
        this.handleCVC=  this.handleCVC.bind(this);
        this.handleCountry=  this.handleCountry.bind(this);
        this.handlePostal_Zipcode=  this.handlePostal_Zipcode.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.update=this.update.bind(this);
        this.state ={
            
            Card_type : "",
            Card_no:"",
            Amount:"",	
            Firstname:	"",	
            Lastname:""	,	
            Email:	"",	
            Phone_number:"",	
            Street_Address:"",	
  
            City:	"",	
            State_Region:""	,	
  
            Expire_date:"" 	,
            CVC:"",
            Country:"",
            Postal_Zipcode:"",
            payments:[],
           
        }
    
    }
    componentDidMount(){
        fetch('/api/payment/')
        .then(res => res.json())
        .then(Payment => this.setState({payments: Payment.data},
             () => console.log('Payment fetched',this.state.payments)));
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleCard_type(e){
        this.setState({Card_type: e.target.value })
    
      }
      handleCard_no(e){
        this.setState({Card_no: e.target.value })
    
      }
      handleAmount(e){
        this.setState({Amount: e.target.value })
    
      }
      handleFirstname(e){
        this.setState({Firstname: e.target.value })
    
      }
      handleLastname(e){
        this.setState({Lastname: e.target.value })
    
      }
      handleEmail(e){
        this.setState({Email: e.target.value })
    
      }
      handlePhone_number(e){
        this.setState({Phone_number: e.target.value })
    
      }
      handleStreet_Address(e){
        this.setState({Street_Address: e.target.value })
    
      }
    
      handleCity(e){
        this.setState({City: e.target.value })
    
      }
      handleState_Region(e){
        this.setState({State_Region: e.target.value })
    
      }
      handleExpire_date(e){
        this.setState({Expire_date: e.target.value })
    
      }
      handleCVC(e){
        this.setState({CVC: e.target.value })
    
      }
      handleCountry(e){
        this.setState({Country: e.target.value })
    
      }
      handlePostal_Zipcode(e){
        this.setState({Postal_Zipcode: e.target.value })
    
      }  
      handleSubmit(e){
        e.preventDefault();
        let databody = {
            "Card_type":this.state.Card_type,	
    "Card_no":this.state.Card_no,	
    "Amount":this.state.Amount,	
    "Firstname":	this.state.Firstname,	
    "Lastname":	this.state.Lastname,	
    "Email":	this.state.Email,	
    "Phone_number":	this.state.Phone_number,	
    "City":this.state.City,	
    "Street_Address":	this.state.Street_Address,	
    "State_Region":	this.state.State_Region,	
    "Expire_date": 	this.state.Expire_date,	
    "CVC":this.state.CVC,
    "Country":this.state.Country,
    "Postal_Zipcode":this.state.Postal_Zipcode,
        
}}
update(id){
    // e.preventDefault();
    console.log(this.state.Firstname)
     let databody 
  if (this.state.Card_type !== ""){
   databody = {"Card_type":this.state.Card_type}}
  if(this.state.Card_no !== ""){
   databody = {"Card_no":this.state.Card_no}}
   if(this.state.Amount !== ""){
     databody = {"Amount":this.state.Amount}}
     if(this.state.Firstname !== ""){
       databody = {"Firstname":this.state.Firstname}}
       if(this.state.Lastname !== ""){
         databody = {"Lastname":this.state.Lastname}}
         if(this.state.Email !== ""){
           databody = {"Email":this.state.Email}}
           if(this.state.Phone_number !== ""){
             databody = {"Phone_number":this.state.Phone_number}}
             if(this.state.City !== ""){
               databody = {"City":this.state.City}}
               if(this.state.Street_Address !== ""){
                 databody = {"Street_Address":this.state.Street_Address}}
                 if(this.state.State_Region !== ""){
                   databody = {"State_Region":this.state.State_Region}}
                   if(this.state.Expire_date !== ""){
                    databody = {"Expire_date":this.state.Expire_date}}
                    if(this.state.CVC !== ""){
                      databody = {"CVC":this.state.CVC}}
                      if(this.state.Country !== ""){
                        databody = {"Country":this.state.Country}}
                        if(this.state.Postal_Zipcode !== ""){
                          databody = {"Postal_Zipcode":this.state.Postal_Zipcode}}
                          
  
                   console.log(this.state.Firstname)
                        
                   return fetch('/api/payment/'+id, {
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
          <h3 align="center">New Payment</h3>
          <form onSubmit={this.handleSubmit}>

          
          <div className="form-group">
                <label> Card No:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state. Card_no}
                  onChange={this.handleCard_no}
                  />
                  </div>

          <div className="form-group">
                <label> Card type:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.Card_type}
                  onChange={this.handleCard_type}
                  />
                  </div>

                  <div className="form-group">
                <label> Amount:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.Amount}
                  onChange={this.handleAmount}
                  />
                  </div>

                  <div className="form-group">
                <label> Firstname:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.Firstname}
                  onChange={this.handleFirstname}
                  />
                  </div>

                  <div className="form-group">
                <label> Lastname:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.Lastname}
                  onChange={this.handleLastname}
                  />
                  </div>


                  <div className="form-group">
                <label> Email:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.Email}
                  onChange={this.handleEmail}
                  />
                  </div>


                  <div className="form-group">
                <label> Phone number:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.Phone_number}
                  onChange={this.handlePhone_number}
                  />
                  </div>


                  <div className="form-group">
                <label> Street Address:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.Street_Address}
                  onChange={this.handleStreet_Address}
                  />
                  </div>
                  <div className="form-group">
                <label> City:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.City}
                  onChange={this.handleCity}
                  />
                  </div>

                  

                  <div className="form-group">
                <label> State Region:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.State_Region}
                  onChange={this.handleState_Region}
                  />
                  </div>

                  <div className="form-group">
                <label> Expire_date:  </label>
                <input 
                  type="date" 
                  className="form-control" 
                  value={this.state.Expire_date}
                  onChange={this.handleExpire_date}
                  />
                  </div>

                  <div className="form-group">
                <label> CVC:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.CVC}
                  onChange={this.handleCVC}
                  />
                  </div>

                  <div className="form-group">
                <label>Country:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.Country}
                  onChange={this.handleCountry}
                  />
                  </div>

                  <div className="form-group">
                <label>Postal Zipcode:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.Postal_Zipcode}
                  onChange={this.handlePostal_Zipcode}
                  />
                  </div>

        

                  <ul>
                  
    {this.state.payments.map( payment  =>
         <li key = {payment._id}> 
        {payment.Firstname} 
         <br/><button onClick = {() => {this.update(payment._id)}}> Update</button> 
         
            </li>
            )}
        </ul>
       </form>
   </div>
)
}
       
}
export default EditPayment;