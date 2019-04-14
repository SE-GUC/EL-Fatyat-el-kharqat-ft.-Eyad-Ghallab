import React, { Component } from 'react';

class EditSSC extends Component {
    constructor(){
        super();
        this.handleCompany_name= this.handleCompany_name.bind(this);
        this.handleGovernorate= this.handleGovernorate.bind(this);
        this.handleCity =  this.handleCity.bind(this);
        this.handleCompany_Address =  this.handleCompany_Address.bind(this);
        this.handleCompany_Phone_Number =  this.handleCompany_Phone_Number.bind(this);
        this.handleFax =  this.handleFax.bind(this);
        this.handleCapital_Currency=  this.handleCapital_Currency.bind(this) ;
        this.handlecapital=  this.handlecapital.bind(this);
        this.handleinvestorname=  this.handleinvestorname.bind(this);
        this.handleInvestor_type=  this.handleInvestor_type.bind(this);
        this.handleGender=  this.handleGender.bind(this);
        this.handleNationality=  this.handleNationality.bind(this);
        this.handleTypeOf_IdentityProof=  this.handleTypeOf_IdentityProof.bind(this);
        this.handleinvestor_nationalid= this.handleinvestor_nationalid.bind(this);
        this.handleBirthDate= this.handleBirthDate.bind(this);
        this.handleAddress= this.handleAddress.bind(this);
        this.handlePhone_Number= this.handlePhone_Number.bind(this);
        this.handleemail= this.handleemail.bind(this);
        this.handleBOD_Name= this.handleBOD_Name.bind(this);
        this.handleBOD_Investor_Type= this.handleBOD_Investor_Type.bind(this);
        this.handleBOD_Gender= this.handleBOD_Gender.bind(this);
        this.handleBOD_Nationality= this.handleBOD_Nationality.bind(this);
        this.handleBOD_TypeOfIdentityProof= this.handleBOD_TypeOfIdentityProof.bind(this);
        this.handleBOD_NationalID= this.handleBOD_NationalID.bind(this);
        this.handleBOD_BirthDate= this.handleBOD_BirthDate.bind(this);
        this.handleBOD_Address= this.handleBOD_Address.bind(this);
        this.handlePositionInBOD= this.handlePositionInBOD.bind(this);
        this.handleLawyer_review=this.handleLawyer_review.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.update=this.update.bind(this);
    

       this.state = { 
        Company_name: '',
        Governorate: "",
         City:"",
         Company_Address: '',
         Company_Phone_Number: '',
         Fax: '',
         Capital_Currency: "",
         capital: '',
         investorname:'',
         Investor_type:"",
         Gender: "",
         Nationality: "",
         TypeOf_IdentityProof:"",
         investor_nationalid: '',
         BirthDate: '',
         Address:"", 
         Phone_Number: '',
         email:"", 
         BOD_Name:"", 
         BOD_Investor_Type:"" ,
         BOD_Gender: "",
         BOD_Nationality:"", 
         BOD_TypeOfIdentityProof:"",
         BOD_NationalID: "",
         BOD_BirthDate: "",
         BOD_Address:"", 
         PositionInBOD: "",
         Lawyer_review:"",
         sscs:[],

         
       
      }
    }
   
   componentDidMount(){
     fetch('/api/SSC/all')
     .then(res => res.json())
     .then(SSC => this.setState({sscs: SSC.data}, () => console.log('SSC fetched',this.state.sscs)));
   }
    handleChange(event) {
       this.setState({value: event.target.value});
     }
     handleCompany_name(e){
        this.setState({Company_name: e.target.value })
    }
    handleGovernorate(e){
        this.setState({Governorate: e.target.value })
    }
    handleCity(e){
        this.setState({City: e.target.value })
    }
 
    handleCompany_Address (e){
        this.setState({Company_Address: e.target.value })
    }
    handleCompany_Phone_Number(e){
        this.setState({Company_Phone_Number: e.target.value })
    }
    handleFax(e) {
        this.setState({Fax: e.target.value })
    }
    handleCapital_Currency(e){
        this.setState({Capital_Currency: e.target.value })
    }
    handlecapital(e){
        this.setState({capital: e.target.value })
    }
    handleinvestorname(e){
        this.setState({investorname: e.target.value })
    }
    handleInvestor_type(e){
        this.setState({Investor_type: e.target.value })
    }
    handleGender(e){
        this.setState({Gender: e.target.value })
    }
    handleNationality(e){
        this.setState({Nationality: e.target.value })
    }
    handleTypeOf_IdentityProof(e){
        this.setState({TypeOf_IdentityProof: e.target.value })
    }
    handleinvestor_nationalid(e){
        this.setState({investor_nationalid: e.target.value })
    }
    handleBirthDate(e){
        this.setState({BirthDate: e.target.value })
    }
    handleAddress(e){
        this.setState({Address: e.target.value })
    }
    handlePhone_Number(e){
        this.setState({Phone_Number: e.target.value })
    }
    handleemail(e){
        this.setState({email: e.target.value })
        
    }
    handleBOD_Name(e){
        this.setState({BOD_Name: e.target.value })
        
    }
    handleBOD_Investor_Type(e){
        this.setState({BOD_Investor_Type: e.target.value })
        
    }
    handleBOD_Gender(e){
        this.setState({BOD_Gender: e.target.value })
        
    }
    handleBOD_Nationality(e){
        this.setState({BOD_Nationality: e.target.value })
        
    }
    handleBOD_TypeOfIdentityProof(e){
        this.setState({BOD_TypeOfIdentityProof: e.target.value })
        
    }
    handleBOD_NationalID(e){
        this.setState({BOD_NationalID: e.target.value })
        
    }
    handleBOD_BirthDate(e){
        this.setState({BOD_BirthDate: e.target.value })

    }
    handleBOD_Address(e){
        this.setState({BOD_Address: e.target.value })

    }
    handlePositionInBOD(e){
        this.setState({PositionInBOD: e.target.value })

    }
    handleLawyer_review(e){
        this.setState({Lawyer_review: e.target.value })

    }

    handleSubmit(e){
        e.preventDefault();
        let databody = {
          Company_name:this.state.Company_name,
          Governorate:this.state.Governorate, 
          City: this.state.City,
          Company_Address:this.state.Company_Address,
          Company_Phone_Number:this.state.Company_Phone_Number,
          Fax:this.state.Fax ,
          Capital_Currency:this.state.Capital_Currency, 
          capital:this.state.capital, 
          investorname:this.state.investorname,
          Investor_type:this.state.Investor_type, 
          Gender:this.state.Gender ,
          Nationality:this.state.Nationality, 
          TypeOf_IdentityProof:this.state.TypeOf_IdentityProof,
          investor_nationalid:this.state.investor_nationalid ,
          BirthDate:this.state.BirthDate,
          Address:this.state.Address, 
          Phone_Number: this.state.Phone_Number,
          email:this.state.email, 
          BOD_Name:this.state.BOD_Name, 
          BOD_Investor_Type:this.state.BOD_Investor_Type ,
          BOD_Gender: this.state.BOD_Gender,
          BOD_Nationality:this.state.BOD_Nationality, 
          BOD_TypeOfIdentityProof:this.state.BOD_TypeOfIdentityProof,
          BOD_NationalID:this.state.BOD_NationalID,
          BOD_BirthDate: this.state.BirthDate,
          BOD_Address:this.state.BOD_Address, 
          PositionInBOD: this.state.PositionInBOD,
          Lawyer_review: this.state.Lawyer_review
      
        }}
        update(id){
            console.log(this.state.Company_name)
             let databody 
         if (this.state.Company_name !== ""){
           databody = {"Company_name":this.state.Company_name}}
         if(this.state.Governorate !== ""){
           databody = {"Governorate":this.state.Governorate}}
        if(this.state.City !== ""){
            databody = {"City":this.state.City}}
        if(this.state.Company_Address !== ""){
            databody = {"Company_Address":this.state.Company_Address}}
         if(this.state.Company_Phone_Number !== ""){
            databody = {"Company_Phone_Number":this.state.Company_Phone_Number}}
        if(this.state.Fax !== ""){
            databody = {"Fax":this.state.Fax}}
        if(this.state.Capital_Currency !== ""){
            databody = {"Capital_Currency":this.state.Capital_Currency}}
         if(this.state.capital !== ""){
            databody = {"capital":this.state.capital}}
        if(this.state.investorname !== ""){
            databody = {"investorname":this.state.investorname}}
         if(this.state.Investor_type !== ""){
            databody = {"Investor_type":this.state.Investor_type}}
        if(this.state.Gender !== ""){
            databody = {"Gender":this.state.Gender}}
        if(this.state.Nationality !== ""){
             databody = {"Nationality":this.state.Nationality}}
         if(this.state.TypeOf_IdentityProof !== ""){
             databody = {"TypeOf_IdentityProof":this.state.TypeOf_IdentityProof}}
         if(this.state.investor_nationalid !== ""){
            databody = {"investor_nationalid":this.state.investor_nationalid}}
         if(this.state.BirthDate !== ""){
             databody = {"BirthDate":this.state.BirthDate}}
         if(this.state.Address !== ""){
            databody = {"Address":this.state.Address}}
        if(this.state.Phone_Number !== ""){
        databody = {"Phone_Number":this.state.Phone_Number}}
       if(this.state.email !== ""){
           databody = {"email":this.state.email}}
        if(this.state.BOD_Name !== ""){
            databody = {"BOD_Name":this.state.BOD_Name}}
         if(this.state.BOD_Investor_Type !== ""){
            databody = {"BOD_Investor_Type":this.state.BOD_Investor_Type}}
          if(this.state.BOD_Gender !== ""){
            databody = {"BOD_Gender":this.state.BOD_Gender}}
        if(this.state.BOD_Nationality !== ""){
            databody = {"BOD_Nationality":this.state.BOD_Nationality}}
       if(this.state.BOD_TypeOfIdentityProof !== ""){
          databody = {"BOD_TypeOfIdentityProof":this.state.BOD_TypeOfIdentityProof}}
     if(this.state.BOD_NationalID !== ""){
          databody = {"BOD_NationalID":this.state.BOD_NationalID}}
      if(this.state.BOD_BirthDate !== ""){
         databody = {"BOD_BirthDate":this.state.BOD_BirthDate}}
    if(this.state.BOD_Address !== ""){
        databody = {"BOD_Address":this.state.BOD_Address}}
    if(this.state.PositionInBOD !== ""){
        databody = {"PositionInBOD":this.state.PositionInBOD}}
    if(this.state.Lawyer_review !== ""){
        databody = {"Lawyer_review":this.state.Lawyer_review}}
                                                                                               
    console.log(this.state.Company_name)
   
       return fetch('http://localhost:5000/api/SSC/'+id, {
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
       <h3 align="center">Update SSC Company</h3>
       <form onSubmit={this.handleSubmit}>
           <div className="form-group">
               <label>Company Name:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.Company_name}
                 onChange={this.handleCompany_name}
                 />
                 </div>
                 
                 <div className="form-group">
                 <label>Governorate:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.Governorate}
                 onChange={this.handleGovernorate}
                 />
                 </div>
                 <div className="form-group">
                 <label>City:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.City}
                 onChange={this.handleCity}
                 />
                 </div>
           
          
           <div className="form-group">
               <label>Company  Address:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.Company_Address}
                 onChange={this.handleCompany_Address}
                 />
           </div>
           <div className="form-group">
               <label>Company Phone Number:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.Company_Phone_Number}
                 onChange={this.handleCompany_Phone_Number}
                 />
           </div>
           <div className="form-group">
               <label>Fax:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.Fax}
                 onChange={this.handleFax}
                 />
           </div>
           
           <div className="form-group">
               <label>Capital Currency::  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.Capital_Currency}
                 onChange={this.handleCapital_Currency}
                 />
           </div>
       
           
           <div className="form-group">
               <label>Capital:  </label>
               <input 
                 type="number" 
                 className="form-control" 
                 value={this.state.capital}
                 onChange={this.handlecapital}
                 />
           </div>
           <div className="form-group">
               <label>Investor Name:  </label>
               <input 
                 type="test" 
                 className="form-control" 
                 value={this.state.investorname}
                 onChange={this.handleinvestorname}
                 />
           </div>
           
           <div className="form-group">
               <label>Gender  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.Gender}
                 onChange={this.handleGender}
                 />
           </div>
           
                 
          
           <div className="form-group">
               <label>Nationality:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.Nationality}
                 onChange={this.handleNationality}
                 />
           </div>
                
           
           <div className="form-group">
               <label>TypeOf_IdentityProof:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.TypeOf_IdentityProof}
                 onChange={this.handleTypeOfIdentityProof}
                 />
           </div>
                 
           
           <div className="form-group">
               <label>National ID:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.investor_nationalid}
                 onChange={this.handleinvestor_nationalid}
                 />
           </div>
           <div className="form-group">
               <label>BirthDate:  </label>
               <input 
                 type="date" 
                 className="form-control" 
                 value={this.state.BirthDate}
                 onChange={this.handleBirthDate}
                 />
           </div>
           <div className="form-group">
               <label> Phone Number:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.Phone_Number}
                 onChange={this.handlePhone_Number}
                 />
           </div>
           <div className="form-group">
               <label>Email:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.email}
                 onChange={this.handleemail}
                 />
           </div>
           <div className="form-group">
               <label>BOD Name:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.BOD_Name}
                 onChange={this.handleBOD_Name}
                 />
           </div>
           <div className="form-group">
               <label>BOD Investor Type:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.BOD_Investor_Type}
                 onChange={this.handleBOD_Investor_Type}
                 />
           </div>
           <div className="form-group">
               <label>BOD Gender:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.BOD_Gender}
                 onChange={this.handleBOD_Gender}
                 />
           </div>
           <div className="form-group">
               <label>BOD Nationality:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.BOD_Nationality}
                 onChange={this.handleBOD_Nationality}
                 />
           </div>
           <div className="form-group">
               <label>BOD TypeOf_IdentityProof:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.BOD_TypeOfIdentityProof}
                 onChange={this.handleBOD_TypeOfIdentityProof}
                 />
           </div>
           <div className="form-group">
               <label>BOD NationalId:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.BOD_NationalID}
                 onChange={this.handleBOD_NationalID}
                 />
           </div>
           <div className="form-group">
               <label>BOD NationalId:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.BOD_NationalID}
                 onChange={this.handleBOD_NationalID}
                 />
           </div>
           <div className="form-group">
               <label>BOD BirthDate:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.BOD_BirthDate}
                 onChange={this.handleBOD_BirthDate}
                 />
           </div>
           <div className="form-group">
               <label>PositionInBOD:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.PositionInBOD}
                 onChange={this.handlePositionInBOD}
                 />
           </div>
           <div className="form-group">
               <label>Lawyer_review:  </label>
               <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.Lawyer_review}
                 onChange={this.handleLawyer_review}
                 />
           </div>

           
           <ul>
         {this.state.sscs.map(ssc =>
           <li key = {ssc._id}
           > {ssc.Company_name} 
           <br/><button onClick = {() => {this.update(ssc._id)}}> Update</button> 
           </li>
           )}
       </ul>
       </form>
   </div>
)
}
} 
export default EditSSC;
