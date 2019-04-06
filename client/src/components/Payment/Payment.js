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
                </label>
                <label>
                Card_no
                    <input type="text" name="Card_no" value={this.Card_no} onChange={this.handleCard_noChange}/>
                </label>
                <label>
                Amount
                    <input type="text" name="Amount" value={this.Amount} onChange={this.handleAmountChange}/>
                </label>
                <label>
                Firstname
                    <input type="text" name="Firstname" value={this.Firstname} onChange={this.handleFirstnameChange}/>
                </label>
                <label>
                Lastname
                    <input type="text" name="Lastname" value={this.Lastname} onChange={this.handleLastnameChange}/>
                </label>
                <label>
                Email
                    <input type="text" name="Email" value={this.Email} onChange={this.handleEmailChange}/>
                </label>
                <label>
                Phone_number
                    <input type="text" name="Phone_number" value={this.Phone_number} onChange={this.handlePhone_numberChange}/>
                </label>
                <label>
                city
                    <input type="text" name="City" value={this.City} onChange={this.handleCityChange}/>
                </label>
                <label>
                Street_Address
                    <input type="text" name="Street_Address" value={this.Street_Address} onChange={this.handleStreet_AddressChange}/>
                </label>
                <label>
                State_Region
                    <input type="text" name="State_Region" value={this.State_Region} onChange={this.handleState_RegionChange}/>
                </label>
                <label>
                Expire_date
                    <input type="text" name="Expire_date" value={this.Expire_date} onChange={this.handleExpire_dateChange}/>
                </label>
                
                <label>
                CVC
                    <input type="text" name="CVC" value={this.CVC} onChange={this.handleCVCChange}/>
                </label>
                <label>
                Country
                    <input type="text" name="Country" value={this.Country} onChange={this.handleCountryChange}/>
                </label>
                <label>
                Postal_Zipcode
                    <input type="text" name="Postal_Zipcode" value={this.Postal_Zipcode} onChange={this.handlePostal_ZipcodeChange}/>
                </label>
                





                <input type="submit" value="Add to DB" />
            </form> 


          {
 <ul>
     {this.state.payment.map( payment  => <li key = {payment._id}> Name: {payment.Firstname}</li>)}
    </ul> 


}
      
      </div>
    );
  }
}

export default payment;

