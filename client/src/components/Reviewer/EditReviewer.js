import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class EditReviewer extends Component {
    constructor(){
        super();
        this.handleName =  this.handleName.bind(this);
        this.handleUsername =  this.handleUsername.bind(this);
        this.handlePassword =  this.handlePassword.bind(this);
        this.handleEmail =  this.handleEmail.bind(this);
        this.handleYearsOfExperience=  this.handleYearsOfExperience.bind(this) ;
        this.handleGender=  this.handleGender.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.update=this.update.bind(this);

        this.state ={
            
            Password : "",
            Email:"",	
            Username:	"",		
            Gender:	"",	
            YearsOfExperience:"",	
            Name:"",
            reviewers:[],	

        }
    
    }
    componentDidMount(){
        fetch('/api/Reviewer/')
        .then(res => res.json())
        .then(Reviewer => this.setState({reviewers: Reviewer.data}, 
          () => console.log('Reviewer fetched',this.state.reviewers)));
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleName(e){
        this.setState({Name: e.target.value })
  
      }
      handlePassword(e){
        this.setState({Password: e.target.value })
  
      }
      handleEmail(e){
        this.setState({Email: e.target.value })
  
      }
      handleUsername(e){
        this.setState({Username: e.target.value })
  
      }
      handleGender(e){
        this.setState({Gender: e.target.value })
  
      }
      handleYearsOfExperience(e){
        this.setState({YearsOfExperience: e.target.value })
  
      }
    
      handleSubmit(e){
        e.preventDefault();
        let databody = {
            "Password":this.state.Password,	
            "Name":this.state.Name,	
            "Email":this.state.Email,	
            "Username":	this.state.Username,	
            "YearsOfExperience":	this.state.YearsOfExperience,	
            "Gender":	this.state.Gender,	
        }}
        update(id){
           
            console.log(this.state.Username)
             let databody 
         if (this.state.Name !== ""){
           databody = {"Name":this.state.Name}}
         if(this.state.Password !== ""){
           databody = {"Password":this.state.Password}}
           if(this.state.Email !== ""){
             databody = {"email":this.state.Email}}
             if(this.state.Username !== ""){
               databody = {"username":this.state.Username}}
               if(this.state.YearsOfExperience !== ""){
                 databody = {"YearsOfExperience":this.state.YearsOfExperience}}
                 if(this.state.Gender !== ""){
                   databody = {"gender":this.state.Gender}}
         
                           console.log(this.state.username)
             return fetch('/api/Reviewer/'+id, {
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
                  <h3 align="center">New Reviewer</h3>
                  <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                        <label> Name:  </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.Name}
                          onChange={this.handleName}
                          />
                          </div>
                         
                          <div className="form-group">
                        <label>Password:  </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.Password}
                          onChange={this.handlePassword}
                          />
                          </div>
                          <div className="form-group">
                        <label>Email:  </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.Email}
                          onChange={this.handleEmail}
                          />
                          </div>
    
                          <div className="form-group">
                        <label>User Name:  </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.Username}
                          onChange={this.handleUsername}
                          />
                          </div>
                          <div className="form-group">
                        <label>yearsOfExperience:  </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.YearsOfExperience}
                          onChange={this.handleYearsOfExperience}
                          />
                          </div>
           
            <ul>
    {this.state.reviewers.map(reviewer =>
      <li key = {reviewer._id}
      > Name: {reviewer.Name}
       <br/><button onClick = {() => {this.update(reviewer._id)}}> Update</button> 
      </li>
      )}
  </ul>
            </form>
            </div>
        )
      }
    }
  

export default EditReviewer;
    