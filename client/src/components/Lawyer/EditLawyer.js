import React, { Component } from 'react';


class EditLawyer extends Component {
    constructor(){
        super();
        this.handleusername =  this.handleusername.bind(this);
        this.handlepassword =  this.handlepassword.bind(this);
        this.handlefullname =  this.handlefullname.bind(this);
        this.handlebirthdate =  this.handlebirthdate.bind(this);
        this.handleemail=  this.handleemail.bind(this) ;
        this.handlephonenumber=  this.handlephonenumber.bind(this);
        this.handlelegaltype=  this.handlelegaltype.bind(this);
        this.handlegender=  this.handlegender.bind(this);
        this.handlenoOfPreviousCases=  this.handlenoOfPreviousCases.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.update=this.update.bind(this);
        
        this.state={
       
        username: "",
        password: "",
        fullname: "",
        birthdate: "",
        email: "",
        phonenumber:"",
        legaltype: "",
        gender:"",
        noOfPreviousCases: "",
        lawyers: [],
    
        }
    }
    componentDidMount(){
        fetch('/api/Lawyer/' + localStorage.getItem("userid"))
        .then(res => res.json())
        .then(Lawyer => this.setState({lawyers: Lawyer.data},
             () => console.log('Lawyer fetched',this.state.lawyers)));
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    handleusername(e){
        this.setState({username: e.target.value })
    
      }
      handlepassword(e){
        this.setState({ password: e.target.value })
    
      }
      handlefullname(e){
        this.setState({fullname: e.target.value })
    
      }
      handlebirthdate(e){
        this.setState({ birthdate: e.target.value })
    
      }
      handleemail(e){
        this.setState({email: e.target.value })
    
      }
      handlephonenumber(e){
        this.setState({ phonenumber: e.target.value })
    
      }
      handlelegaltype(e){
        this.setState({ legaltype: e.target.value })
    
      }
      handlegender(e){
        this.setState({gender: e.target.value })
    
      }
      handlenoOfPreviousCases(e){
        this.setState({noOfPreviousCases: e.target.value })
    
      }
      handleSubmit(e){ 
        e.preventDefault();
  }

        update(){
            console.log(this.state.fullname)
             let databody 
          if (this.state.username !== ""){
           databody = {"username":this.state.username}}
           if (this.state.fullname !== ""){
            databody = {"fullname":this.state.fullname}}
          if(this.state.password !== ""){
           databody = {"password":this.state.password}}
           if(this.state.birthdate !== ""){
             databody = {"birthdate":this.state.birthdate}}
             if(this.state.email !== ""){
               databody = {"email":this.state.email}}
               if(this.state.phonenumber !== ""){
                 databody = {"phonenumber":this.state.phonenumber}}
                 if(this.state.legaltype !== ""){
                   databody = {"legaltype":this.state.legaltype}}
                   if(this.state.gender !== ""){
                     databody = {"gender":this.state.gender}}
                     if(this.state.noOfPreviousCases!== ""){
                       databody = {"noOfPreviousCases":this.state.noOfPreviousCases}}
                       
                           console.log(this.state.username)
             return fetch('/api/Lawyer/'+ localStorage.getItem("userid"), {
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
                <h3 align="center">New Lawyer</h3>
                <form onSubmit={this.handleSubmit}>
        
                
                <div className="form-group">
                      <label>username:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.username}
                        onChange={this.handleusername}
                        />
                        </div>
        
                <div className="form-group">
                      <label> password:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.password}
                        onChange={this.handlepassword}
                        />
                        </div>
                        
                        <div className="form-group">
                      <label> fullname:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.fullname}
                        onChange={this.handlefullname}
                        />
                        </div>
                        
                        <div className="form-group">
                      <label> birthdate:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.birthdate}
                        onChange={this.handlebirthdate}
                        />
                        </div>
                  
                        <div className="form-group">
                      <label> email:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.email}
                        onChange={this.handleemail}
                        />
                        </div>
                        <div className="form-group">
                      <label> phonenumber:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.phonenumber}
                        onChange={this.handlephonenumber}
                        />
                        </div>
                        <div className="form-group">
                      <label> legaltype:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.legaltype}
                        onChange={this.handlelegaltype}
                        />
                        </div>
                        <div className="form-group">
                      <label> gender:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.gender}
                        onChange={this.handlegender}
                        />
                        </div>
                 
                        <button
            onClick={() => {
              this.update();
            }}
          >
            {" "}
            Update
          </button>
            </form>
            </div>
        )
      }
    }
  
    export default EditLawyer;   