
import React, { Component } from 'react';

 class EditSPC extends Component {
    constructor() {
        super();
        this.handleFacilityName = this.handleFacilityName.bind(this);
        this.handleGovernorate = this.handleGovernorate.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleFacilityAddress = this.handleFacilityAddress.bind(this);
        this.handleFacilityPhoneNumber = this.handleFacilityPhoneNumber.bind(this);
        this.handleFax = this.handleFax.bind(this);
        this.handleCapitalCurrency = this.handleCapitalCurrency.bind(this);
        this.handlecapital = this.handlecapital.bind(this);
        this.handleinvestorname = this.handleinvestorname.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.handleNationality = this.handleNationality.bind(this);
        this.handleTypeOfIdentityProof = this.handleTypeOfIdentityProof.bind(this);
        this.handleinvestornationalid = this.handleinvestornationalid.bind(this);
        this.handleBirthDate = this.handleBirthDate.bind(this);
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
        this.handleInvestorFax = this.handleInvestorFax.bind(this);
        this.handleemail = this.handleemail.bind(this);
        this.handleInvestorAddress = this.handleInvestorAddress.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.update=this.update.bind(this);

        this.state = { 
          Facility_name: '',
         Governorate: "",
          City:"",
          Facility_Address: '',
          Facility_Phone_Number: '',
          Fax: '',
          Capital_Currency: "",
          capital: '',
          investorname:'',
          Gender: "",
          Nationality: "",
          TypeOf_IdentityProof:"",
          investor_nationalid: '',
          BirthDate: '',
          Phone_Number: '',
          Investor_Fax:'',
          email:'',
          Investor_Address:'',
          spcs:[],
        
       }
     }
     update(id){
      console.log(this.state.Facility_name)
      let databody 
    if (this.state.Facility_name !== ""){
    databody = {"Facility_name":this.state.Facility_name}}
    if(this.state.Governorate !== ""){
    databody = {"Governorate":this.state.Governorate}}
    
    if(this.state.City !== ""){
      databody = {"City":this.state.City}}
      if(this.state.Facility_Address !== ""){
        databody = {"Facility_Address":this.state.Facility_Address}}
        if(this.state.Facility_Phone_Number !== ""){
          databody = {"Facility_Phone_Number":this.state.Facility_Phone_Number}}
          if(this.state.Fax !== ""){
            databody = {"Fax":this.state.Fax}}
            if(this.state.Capital_Currency !== ""){
              databody = {"Capital_Currency":this.state.Capital_Currency}}
              if(this.state.capital !== ""){
                databody = {"capital":this.state.capital}}
                if(this.state.investorname !== ""){
                  databody = {"investorname":this.state.investorname}}
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
                            if(this.state.Phone_Number !== ""){
                              databody = {"Phone_Number":this.state.Phone_Number}}
                              if(this.state.Investor_Fax !== ""){
                                databody = {"Investor_Fax":this.state.Investor_Fax}}
                                if(this.state.email !== ""){
                                  databody = {"email":this.state.email}}
                                  if(this.state.Investor_Address !== ""){
                                    databody = {"Investor_Address":this.state.Investor_Address}}
                    console.log(this.state.username)
    
       return fetch('/api/SPC/'+id, {
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
      fetch('/api/SPC')
      .then(res => res.json())
      .then(SPC => this.setState({spcs: SPC.data}, () => console.log('SPC fetched',this.state.spcs)));
    }
     handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleFacilityName(e) {
    this.setState({
      Facility_name: e.target.value
    });
  }
  handleGovernorate(e) {
    this.setState({
      Governorate: e.target.value
    })  
  }
  handleCity(e) {
    this.setState({
      City: e.target.value
    })
  }
handleFacilityAddress(e){
    this.setState({
        Facility_Address: e.target.value
      })
}
handleFacilityPhoneNumber(e){
    this.setState({
        Facility_Phone_Number: e.target.value
      })
}
handleFax(e){
    this.setState({
        Fax: e.target.value
      })
}
handleCapitalCurrency(e){
    this.setState({
        Capital_Currency: e.target.value
      })
}
handlecapital(e){
    this.setState({
        capital: e.target.value
      })
}
handleinvestorname(e){
    this.setState({
        investorname: e.target.value
      })
}
handleGender(e){
    this.setState({
        Gender: e.target.value
      })
}
handleNationality(e){
    this.setState({
        Nationality: e.target.value
      })
}
handleTypeOfIdentityProof(e){
    this.setState({
        TypeOf_IdentityProof: e.target.value
      })
}
handleinvestornationalid(e){
    this.setState({
        investor_nationalid: e.target.value
      })
}
handleBirthDate(e){
    this.setState({
        BirthDate: e.target.value
      })
}
handlePhoneNumber(e){
    this.setState({
        Phone_Number: e.target.value
      })
}
handleInvestorFax(e){
    this.setState({
        Investor_Fax: e.target.value
      })
}
handleemail(e){
    this.setState({
        email: e.target.value
      })

}
handleInvestorAddress(e){
    this.setState({
        Investor_Address: e.target.value
      })
}
  handleSubmit(e) {
    e.preventDefault();
    let databody  = {
      Facility_name: this.state.Facility_name,
      Governorate: this.state.Governorate,
      City: this.state.City,
      Facility_Address: this.state.Facility_Address,
      Facility_Phone_Number: this.state.Facility_Phone_Number,
      Fax: this.state.Fax,
      Capital_Currency: this.state.Capital_Currency,
      capital: this.state.capital,
      investorname:this.state.investorname,
      Gender: this.state.Gender,
      Nationality: this.state.Nationality,
      TypeOf_IdentityProof: this.state.TypeOf_IdentityProof,
      investor_nationalid: this.state.investor_nationalid,
      BirthDate: this.state.BirthDate,
      Phone_Number: this.state.Phone_Number,
      Investor_Fax:this.state.Investor_Fax,
      email:this.state.email,
      Investor_Address:this.state.Investor_Address
    };}
//     axios.post('http://localhost:5000/SPC/'+this.props.match.params.id, databody)
//     .then(res => console.log(res.data));

// this.props.history.push('/index');



render() {

  return (
    <div style={{ marginTop: 10 }}>
        <h3 align="center">New SPC Company</h3>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Facility Name:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.Facility_name}
                  onChange={this.handleFacilityName}
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
                <label>Facility Address:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.Facility_Address}
                  onChange={this.handleFacilityAddress}
                  />
            </div>
            <div className="form-group">
                <label>Facility Phone Number:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.Facility_Phone_Number}
                  onChange={this.handleFacilityPhoneNumber}
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
                  onChange={this.handleCapitalCurrency}
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
                  onChange={this.handleinvestornationalid}
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
                  onChange={this.handlePhoneNumber}
                  />
            </div>
            <div className="form-group">
                <label>Fax:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.Investor_Fax}
                  onChange={this.handleInvestorFax}
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
                <label>Address:  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.Investor_Address}
                  onChange={this.handleInvestorAddress}
                  />
            </div>
            <ul>
          {this.state.spcs.map(spc =>
            <li key = {spc._id}
            > {spc.Facility_name} <br/><button onClick = {() => {this.update(spc._id)}}> Update</button> 
            </li>
            )}
        </ul>
            {/* <div className="form-group">
                <input type="submit" 
                  value="Update" 
                  className="btn btn-primary"/>
            </div> */}
        </form>
    </div>
)
}
} 
export default EditSPC;
