import React, { Component } from 'react';

import './SSC.css';

class SSC extends Component {
    constructor(){
        super();
        this.handleCompany_nameChange= this.handleCompany_nameChange.bind(this);
        this.handleGovernorateChange= this.handleGovernorateChange.bind(this);
        this.handleCityChange =  this.handleCityChange.bind(this);
        this.handleCompany_AddressChange =  this.handleCompany_AddressChange.bind(this);
        this.handleCompany_Phone_NumberChange =  this.handleCompany_Phone_NumberChange.bind(this);
        this.handleFaxChange =  this.handleFaxChange.bind(this);
        this.handleCapital_CurrencyChange=  this.handleCapital_CurrencyChange.bind(this) ;
        this.handlecapitalChange=  this.handlecapitalChange.bind(this);
        this.handleinvestornameChange=  this.handleinvestornameChange.bind(this);
        this.handleInvestor_typeChange=  this.handleInvestor_typeChange.bind(this);
        this.handleGenderChange=  this.handleGenderChange.bind(this);
        this.handleNationalityChange=  this.handleNationalityChange.bind(this);
        this.handleTypeOf_IdentityProofChange=  this.handleTypeOf_IdentityProofChange.bind(this);
        this.handleinvestor_nationalidChange= this.handleinvestor_nationalidChange.bind(this);
        this.handleBirthDateChange= this.handleBirthDateChange.bind(this);
        this.handleAddressChange= this.handleAddressChange.bind(this);
        this.handlePhone_NumberChange= this.handlePhone_NumberChange.bind(this);
        this.handleemailChange= this.handleemailChange.bind(this);
        this.handleBOD_NameChange= this.handleBOD_NameChange.bind(this);
        this.handleBOD_Investor_TypeChange= this.handleBOD_Investor_TypeChange.bind(this);
        this.handleBOD_GenderChange= this.handleBOD_GenderChange.bind(this);
        this.handleBOD_NationalityChange= this.handleBOD_NationalityChange.bind(this);
        this.handleBOD_TypeOfIdentityProofChange= this.handleBOD_TypeOfIdentityProofChange.bind(this);
        this.handleBOD_NationalIDChange= this.handleBOD_NationalIDChange.bind(this);
        this.handleBOD_BirthDateChange= this.handleBOD_BirthDateChange.bind(this);
        this.handleBOD_AddressChange= this.handleBOD_AddressChange.bind(this);
        this.handlePositionInBODChange= this.handlePositionInBODChange.bind(this);
       
     
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state ={
            SSC:[],
            Company_name:"",
            Governorate:"", 
            City: "",
            Company_Address:"",
            Company_Phone_Number:"" ,
            Fax:"" ,
            Capital_Currency:"", 
            capital:"", 
            investorname:"",
            Investor_type:"", 
            Gender:"" ,
            Nationality:"", 
            TypeOf_IdentityProof:"" ,
            investor_nationalid:"" ,
            BirthDate:"",
            Address:"", 
            Phone_Number: "",
            email:"", 
            BOD_Name:"", 
            BOD_Investor_Type:"" ,
            BOD_Gender: "",
            BOD_Nationality:"", 
            BOD_TypeOfIdentityProof:"",
            BOD_NationalID: "",
            BOD_BirthDate: "",
            BOD_Address:"", 
            PositionInBOD: ""
        }
    
    }
    
    handleCompany_nameChange(e){
        this.setState({Company_name: e.target.value })
    }
    handleGovernorateChange(e){
        this.setState({Governorate: e.target.value })
    }
    handleCityChange(e){
        this.setState({City: e.target.value })
    }
 
    handleCompany_AddressChange (e){
        this.setState({Company_Address: e.target.value })
    }
    handleCompany_Phone_NumberChange(e){
        this.setState({Company_Phone_Number: e.target.value })
    }
    handleFaxChange(e) {
        this.setState({Fax: e.target.value })
    }
    handleCapital_CurrencyChange(e){
        this.setState({Capital_Currency: e.target.value })
    }
    handlecapitalChange(e){
        this.setState({capital: e.target.value })
    }
    handleinvestornameChange(e){
        this.setState({investorname: e.target.value })
    }
    handleInvestor_typeChange(e){
        this.setState({Investor_type: e.target.value })
    }
    handleGenderChange(e){
        this.setState({Gender: e.target.value })
    }
    handleNationalityChange(e){
        this.setState({Nationality: e.target.value })
    }
    handleTypeOf_IdentityProofChange(e){
        this.setState({TypeOf_IdentityProof: e.target.value })
    }
    handleinvestor_nationalidChange(e){
        this.setState({investor_nationalid: e.target.value })
    }
    handleBirthDateChange(e){
        this.setState({BirthDate: e.target.value })
    }
    handleAddressChange(e){
        this.setState({Address: e.target.value })
    }
    handlePhone_NumberChange(e){
        this.setState({Phone_Number: e.target.value })
    }
    handleemailChange(e){
        this.setState({email: e.target.value })
        
    }
    handleBOD_NameChange(e){
        this.setState({BOD_Name: e.target.value })
        
    }
    handleBOD_Investor_TypeChange(e){
        this.setState({BOD_Investor_Type: e.target.value })
        
    }
    handleBOD_GenderChange(e){
        this.setState({BOD_Gender: e.target.value })
        
    }
    handleBOD_NationalityChange(e){
        this.setState({BOD_Nationality: e.target.value })
        
    }
    handleBOD_TypeOfIdentityProofChange(e){
        this.setState({BOD_TypeOfIdentityProof: e.target.value })
        
    }
    handleBOD_NationalIDChange(e){
        this.setState({BOD_NationalID: e.target.value })
        
    }
    handleBOD_BirthDateChange(e){
        this.setState({BOD_BirthDate: e.target.value })

    }
    handleBOD_AddressChange(e){
        this.setState({BOD_Address: e.target.value })

    }
    handlePositionInBODChange(e){
        this.setState({PositionInBOD: e.target.value })

    }



    handleSubmit(e){
      e.preventDefault();
      let databody = {
        "Company_name":this.state.Company_name,
        "Governorate":this.state.Governorate, 
        "City": this.state.City,
        "Company_Address":this.state.Company_Address,
        "Company_Phone_Number":this.state.Company_Phone_Number,
        "Fax":this.state.Fax ,
        "Capital_Currency":this.state.Capital_Currency, 
        "capital":this.state.capital, 
        "investorname":this.state.investorname,
        "Investor_type":this.state.Investor_type, 
        "Gender":this.state.Gender ,
        "Nationality":this.state.Nationality, 
        "TypeOf_IdentityProof":this.state.TypeOf_IdentityProof,
        "investor_nationalid":this.state.investor_nationalid ,
        "BirthDate":this.state.BirthDate,
        "Address":this.state.Address, 
        "Phone_Number": this.state.Phone_Number,
        "email":this.state.email, 
        "BOD_Name":this.state.BOD_Name, 
        "BOD_Investor_Type":this.state.BOD_Investor_Type ,
        "BOD_Gender": this.state.BOD_Gender,
        "BOD_Nationality":this.state.BOD_Nationality, 
        "BOD_TypeOfIdentityProof":this.state.BOD_TypeOfIdentityProof,
        "BOD_NationalID":this.state.BOD_NationalID,
        "BOD_BirthDate": this.state.BirthDate,
        "BOD_Address":this.state.BOD_Address, 
        "PositionInBOD": this.state.PositionInBOD
    
      }
  
      return fetch('/api/SSC/', {
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
  
        fetch('/api/SSC/all')
        .then(res => res.json())
        .then(ssc => this.setState({SSC: ssc.data},()=> console.log('the SSC Forms',this.state.SSC)));

    }
  render() {
    return (
      <div>
    <h2> SSC Forms </h2>
    <form onSubmit={this.handleSubmit}>
                <label>
                    Company_Name
                    <input type="text" name="Company_name" value={this.Company_name} onChange={this.handleCompany_nameChange}/>
                </label>
                <label>
                Governorate
                    <input type="text" name="Governorate" value={this.Governorate} onChange={this.handleGovernorateChange}/>
                </label>
                <label>
                    City
                    <input type="text" name="City" value={this.City} onChange={this.handleCityChange}/>
                </label>
              
                <label>
                    Company_Address
                    <input type="text" name="Company_Address" value={this.Company_Address} onChange={this.handleCompany_AddressChange}/>
                </label>
                <label>
                    Company_Phone_Number
                    <input type="text" name="Company_Phone_Number" value={this.Company_Phone_Number} onChange={this.handleCompany_Phone_NumberChange}/>
                </label>
                <label>
                   Fax
                    <input type="text" name="Fax" value={this.Fax} onChange={this.handleFaxChange}/>
                </label>
                <label>
                 Capital_Currency
                    <input type="text" name=" Capital_Currency" value={this.Capital_Currency} onChange={this.handleCapital_CurrencyChange}/>
                </label>
                <label>
                capital
                    <input type="text" name="capital" value={this.capital} onChange={this.handlecapitalChange}/>
                </label>
                <label>
                investorname
                    <input type="text" name="investorname" value={this.investorname} onChange={this.handleinvestornameChange}/>
                </label>
                <label>
                Investor_type
                    <input type="text" name="Investor_type" value={this.Investor_type} onChange={this.handleInvestor_typeChange}/>
                </label>
                <label>
                Gender
                    <input type="text" name="Gender" value={this.Gender} onChange={this.handleGenderChange}/>
                </label>
                <label>
                Nationality
                    <input type="text" name="Nationality" value={this.Nationality} onChange={this.handleNationalityChange}/>
                </label>
                <label>
                TypeOf_IdentityProof
                    <input type="text" name="TypeOf_IdentityProof" value={this.TypeOf_IdentityProof} onChange={this.handleTypeOf_IdentityProofChange}/>
                </label>
                <label>
                investor_nationalid
                    <input type="text" name="investor_nationalid" value={this.investor_nationalid} onChange={this.handleinvestor_nationalidChange}/>
                </label>
                <label>
                BirthDate
                    <input type="text" name="BirthDate" value={this.BirthDate} onChange={this.handleBirthDateChange}/>
                </label>
                <label>
                Address
                    <input type="text" name="Address" value={this.Address} onChange={this.handleAddressChange}/>
                </label>
                <label>
                Phone_Number
                    <input type="text" name="Phone_Number" value={this.Phone_Number} onChange={this.handlePhone_NumberChange}/>
                </label>
                <label>
                email
                    <input type="text" name="email" value={this.email} onChange={this.handleemailChange}/>
                </label>
                <label>
                BOD_Name
                    <input type="text" name="BOD_Name" value={this.BOD_Name} onChange={this.handleBOD_NameChange}/>
                </label>
                <label>
                BOD_Investor_Type
                    <input type="text" name="BOD_Investor_Type" value={this.BOD_Investor_Type} onChange={this.handleBOD_Investor_TypeChange}/>
                </label>
                <label>
                BOD_Gender
                    <input type="text" name="BOD_Gender" value={this.BOD_Gender} onChange={this.handleBOD_GenderChange}/>
                </label>
                <label>
                BOD_Nationality
                    <input type="text" name="BOD_Nationality" value={this.BOD_Nationality} onChange={this.handleBOD_NationalityChange}/>
                </label>
                <label>
                BOD_TypeOfIdentityProof
                    <input type="text" name="BOD_TypeOfIdentityProof" value={this.BOD_TypeOfIdentityProof} onChange={this.handleBOD_TypeOfIdentityProofChange}/>
                </label>
                <label>
                BOD_NationalID
                    <input type="text" name="BOD_NationalID" value={this.BOD_NationalID} onChange={this.handleBOD_NationalIDChange}/>
                </label>
                <label>
                BOD_BirthDate
                    <input type="text" name="BOD_BirthDate" value={this.BOD_BirthDate} onChange={this.handleBOD_BirthDateChange}/>
                </label>
                <label>
                BOD_Address
                    <input type="text" name="BOD_Address" value={this.BOD_Address} onChange={this.handleBOD_AddressChange}/>
                </label>
                <label>
                PositionInBOD
                    <input type="text" name="PositionInBOD" value={this.PositionInBOD} onChange={this.handlePositionInBODChange}/>
                </label>

                <input type="submit" value="Add to DB" />
            </form> 
{
 <ul>
     {this.state.SSC.map( ssc  => <li key = {ssc._id}> Name: {ssc.Company_name}</li>)}
    </ul> 
}
      </div>
    );
  }
}

export default SSC;

        

 




