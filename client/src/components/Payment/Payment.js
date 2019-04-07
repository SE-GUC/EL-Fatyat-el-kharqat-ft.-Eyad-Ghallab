import React, { Component } from 'react';
import './Payment.css';


class payment extends Component {
  constructor(){
      super();



      this.handleCard_typeChange =  this.handleCard_typeChange.bind(this);
      this.handleCard_noChange =  this.handleCard_noChange.bind(this);
      this.handleAmountChange =  this.handleAmountChange.bind(this);
      this.handleFirstnameChange =  this.handleFirstnameChange.bind(this);
      this.handleLastnameChange=  this.handleLastnameChange.bind(this) ;
      this.handleEmailChange=  this.handleEmailChange.bind(this);
      this.handlePhone_numberChange=  this.handlePhone_numberChange.bind(this);
      this.handleStreet_AddressChange=  this.handleStreet_AddressChange.bind(this);
      this.handleCityChange=  this.handleCityChange.bind(this);
      this.handleState_RegionChange=  this.handleState_RegionChange.bind(this);
      this.handleExpire_dateChange=  this.handleExpire_dateChange.bind(this);
      this.handleCVCChange=  this.handleCVCChange.bind(this);
      this.handleCountryChange=  this.handleCountryChange.bind(this);
      this.handlePostal_ZipcodeChange=  this.handlePostal_ZipcodeChange.bind(this);

      this.handleSubmit= this.handleSubmit.bind(this);

      this.delete=this.delete.bind(this);
      this.update=this.update.bind(this);

      this.state ={
          payment:[],
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
          Postal_Zipcode:""
         
      }
  
  }

  handleCard_typeChange(e){
    this.setState({Card_type: e.target.value })

  }
  handleCard_noChange(e){
    this.setState({Card_no: e.target.value })

  }
  handleAmountChange(e){
    this.setState({Amount: e.target.value })

  }
  handleFirstnameChange(e){
    this.setState({Firstname: e.target.value })

  }
  handleLastnameChange(e){
    this.setState({Lastname: e.target.value })

  }
  handleEmailChange(e){
    this.setState({Email: e.target.value })

  }
  handlePhone_numberChange(e){
    this.setState({Phone_number: e.target.value })

  }
  handleStreet_AddressChange(e){
    this.setState({Street_Address: e.target.value })

  }

  handleCityChange(e){
    this.setState({City: e.target.value })

  }
  handleState_RegionChange(e){
    this.setState({State_Region: e.target.value })

  }
  handleExpire_dateChange(e){
    this.setState({Expire_date: e.target.value })

  }
  handleCVCChange(e){
    this.setState({CVC: e.target.value })

  }
  handleCountryChange(e){
    this.setState({Country: e.target.value })

  }
  handlePostal_ZipcodeChange(e){
    this.setState({Postal_Zipcode: e.target.value })

  }
  delete(id){
    return fetch('/api/payment/'+id, {
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
    }

    return fetch('/api/payment/', {
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
   return fetch('http://localhost:5000/api/payment/'+id, {
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
      fetch('/api/payment')
      .then(res => res.json())
      .then(payment=> this.setState({payment:payment.data}, ()=>console.log('payments fetched..',
      payment)));
  }
    render() {
    return (
      <div >
          <h2>The Payments</h2>
          <form onSubmit={this.handleSubmit}>
                <label>
                Card_type
                    <input type="text" name="Card_type" value={this.Card_type} onChange={this.handleCard_typeChange}/>
                    <br/>
                </label>
                <label>
                Card_no
                    <input type="text" name="Card_no" value={this.Card_no} onChange={this.handleCard_noChange}/>
                    <br/>
                </label>
                <label>
                Amount
                    <input type="text" name="Amount" value={this.Amount} onChange={this.handleAmountChange}/>
                    <br/>
                </label>
                <label>
                Firstname
                    <input type="text" name="Firstname" value={this.Firstname} onChange={this.handleFirstnameChange}/>
                    <br/>
                </label>
                <label>
                Lastname
                    <input type="text" name="Lastname" value={this.Lastname} onChange={this.handleLastnameChange}/>
                    <br/>
                </label>
                <label>
                Email
                    <input type="text" name="Email" value={this.Email} onChange={this.handleEmailChange}/>
                    <br/>
                </label>
                <label>
                Phone_number
                    <input type="text" name="Phone_number" value={this.Phone_number} onChange={this.handlePhone_numberChange}/>
                    <br/>
                </label>
                <label>
                city
                    <input type="text" name="City" value={this.City} onChange={this.handleCityChange}/>
                    <br/>
                </label>
                <label>
                Street_Address
                    <input type="text" name="Street_Address" value={this.Street_Address} onChange={this.handleStreet_AddressChange}/>
                    <br/>
                </label>
                <label>
                State_Region
                    <input type="text" name="State_Region" value={this.State_Region} onChange={this.handleState_RegionChange}/>
                    <br/>
                </label>
                <label>
                Expire_date
                    <input type="text" name="Expire_date" value={this.Expire_date} onChange={this.handleExpire_dateChange}/>
                    <br/>
                </label>
                <label>
                CVC
                    <input type="text" name="CVC" value={this.CVC} onChange={this.handleCVCChange}/>
                    <br/>
                </label>
                <label>
                Country
                    <input type="text" name="Country" value={this.Country} onChange={this.handleCountryChange}/>
                    <br/>
                </label>
                <label>
                Postal_Zipcode
                    <input type="text" name="Postal_Zipcode" value={this.Postal_Zipcode} onChange={this.handlePostal_ZipcodeChange}/>
                </label>
                <br/>
                <input type="submit" value="create payment" />
            </form> 


          {
 <ul>
     {this.state.payment.map( payment  => <li key = {payment._id}> Firstname: {payment.Firstname} ,Lastname: {payment.Lastname} ,CVC: {payment.CVC} <button onClick= {() => {this.delete(payment._id)}}> Delete </button> 
     <form onClick={() => {this.update(payment._id)}}> 
               <label>
                Card_type
                    <input type="text" name="Card_type" value={this.Card_type} onChange={this.handleCard_typeChange}/>
                    <br/>
                </label>
                <label>
                Card_no
                    <input type="text" name="Card_no" value={this.Card_no} onChange={this.handleCard_noChange}/>
                    <br/>
                </label>
                <label>
                Amount
                    <input type="text" name="Amount" value={this.Amount} onChange={this.handleAmountChange}/>
                    <br/>
                </label>
                <label>
                Firstname
                    <input type="text" name="Firstname" value={this.Firstname} onChange={this.handleFirstnameChange}/>
                    <br/>
                </label>
                <label>
                Lastname
                    <input type="text" name="Lastname" value={this.Lastname} onChange={this.handleLastnameChange}/>
                    <br/>
                </label>
                <label>
                Email
                    <input type="text" name="Email" value={this.Email} onChange={this.handleEmailChange}/>
                    <br/>
                </label>
                <label>
                Phone_number
                    <input type="text" name="Phone_number" value={this.Phone_number} onChange={this.handlePhone_numberChange}/>
                    <br/>
                </label>
                <label>
                city
                    <input type="text" name="City" value={this.City} onChange={this.handleCityChange}/>
                    <br/>
                </label>
                <label>
                Street_Address
                    <input type="text" name="Street_Address" value={this.Street_Address} onChange={this.handleStreet_AddressChange}/>
                    <br/>
                </label>
                <label>
                State_Region
                    <input type="text" name="State_Region" value={this.State_Region} onChange={this.handleState_RegionChange}/>
                    <br/>
                </label>
                <label>
                Expire_date
                    <input type="text" name="Expire_date" value={this.Expire_date} onChange={this.handleExpire_dateChange}/>
                    <br/>
                </label>
                <label>
                CVC
                    <input type="text" name="CVC" value={this.CVC} onChange={this.handleCVCChange}/>
                    <br/>
                </label>
                <label>
                Country
                    <input type="text" name="Country" value={this.Country} onChange={this.handleCountryChange}/>
                    <br/>
                </label>
                <label>
                Postal_Zipcode
                    <input type="text" name="Postal_Zipcode" value={this.Postal_Zipcode} onChange={this.handlePostal_ZipcodeChange}/>
                    <br/>
                </label>
                
                <input type="submit" value="update payment" />
            </form>  
            </li>)}
     </ul> 

}
      
      </div>
    );
  }
}

export default payment;

