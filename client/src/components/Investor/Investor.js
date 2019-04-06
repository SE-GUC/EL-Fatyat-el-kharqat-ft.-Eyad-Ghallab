import React, { Component } from 'react';

import './Investor.css';

class Investor extends Component {
    constructor(){
        super();
        
        this.handlebithdateChange =  this.handlebithdateChange.bind(this);
        this.handlecityChange =  this.handlecityChange.bind(this);
        this.handlecountryChange =  this.handlecountryChange.bind(this);
        this.handleemailChange =  this.handleemailChange.bind(this);
        this.handlegenderChange=  this.handlegenderChange.bind(this) ;
        this.handlejobtitleChange=  this.handlejobtitleChange.bind(this);
        this.handlemobilenumberChange=  this.handlemobilenumberChange.bind(this);
        this.handlenameChange=  this.handlenameChange.bind(this);
        this.handlenationalityChange=  this.handlenationalityChange.bind(this);
        this.handlepasswordChange=  this.handlepasswordChange.bind(this);
        this.handleusernameChange=  this.handleusernameChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.delete=this.delete.bind(this);
        this.update=this.update.bind(this);
        this.state ={
            Investors:[],
            password : "",
            name:"",
email:"",	
username:	"",	
nationality:""	,	
gender:	"",	
birthdate:"",	
city:"",	

country:	"",	
jobtitle:""	,	

mobilenumber:"" 	
           
        }
    
    }

    handlenameChange(e){
      this.setState({name: e.target.value })

    }
    handlepasswordChange(e){
      this.setState({password: e.target.value })

    }
    handleemailChange(e){
      this.setState({email: e.target.value })

    }
    handlejobtitleChange(e){
      this.setState({jobtitle: e.target.value })

    }
    handlecityChange(e){
      this.setState({city: e.target.value })

    }
    handlecountryChange(e){
      this.setState({country: e.target.value })

    }
    handleusernameChange(e){
      this.setState({username: e.target.value })

    }
    handlenationalityChange(e){
      this.setState({nationality: e.target.value })

    }
    handlegenderChange(e){
      this.setState({gender: e.target.value })

    }
    handlebithdateChange(e){
      this.setState({birthdate: e.target.value })

    }
    handlemobilenumberChange(e){
      this.setState({mobilenumber: e.target.value })

    }
    
    delete(id){
      return fetch('/api/investors/'+id, {
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
          "password":this.state.password,	
"name":this.state.name,	
"email":this.state.email,	
"username":	this.state.username,	
"nationality":	this.state.nationality,	
"gender":	this.state.gender,	
"birthdate":	this.state.birthdate,	
"city":this.state.city,	

"country":	this.state.country,	
"jobtitle":	this.state.jobtitle,	

"mobilenumber": 	this.state.mobilenumber,	
      }
  
      return fetch('/api/investors/', {
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
   console.log(this.state.username)
    let databody 
if (this.state.name !== ""){
  databody = {"name":this.state.name}}
if(this.state.password !== ""){
  databody = {"password":this.state.password}}

  if(this.state.email !== ""){
    databody = {"email":this.state.email}}
    if(this.state.username !== ""){
      databody = {"username":this.state.username}}
      if(this.state.nationality !== ""){
        databody = {"nationality":this.state.nationality}}
        if(this.state.gender !== ""){
          databody = {"gender":this.state.gender}}
          if(this.state.birthdate !== ""){
            databody = {"birthdate":this.state.birthdate}}
            if(this.state.country !== ""){
              databody = {"country":this.state.country}}
              if(this.state.jobtitle !== ""){
                databody = {"jobtitle":this.state.jobtitle}}
                if(this.state.mobilenumber !== ""){
                  databody = {"mobilenumber":this.state.mobilenumber}}
                  console.log(this.state.username)
    return fetch('http://localhost:5000/api/Investors/'+id, {
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
  
        fetch('/api/investors/')
        .then(res => res.json())
        .then(investors => this.setState({Investors: investors.data},()=> console.log('the investors',this.state.Investors)));
      //   var int = this.state.investors[1];
      // console.log (int)
    //  // res.json({data: this.state.investors})
    }
  render() {
 //  var {Investors} =  this.state;
    return (
      <div>
        
    <h2> My Investors</h2>

 <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input type="text" name="name" value={this.name} onChange={this.handlenameChange}/>
                    <br/>
                </label>
                <label>
                    password
                    <input type="text" name="password" value={this.password} onChange={this.handlepasswordChange}/>
                    <br/>
                </label>
                <label>
                    email
                    <input type="text" name="email" value={this.email} onChange={this.handleemailChange}/>
                    <br/>
                </label>
                <label>
                    username
                    <input type="text" name="username" value={this.username} onChange={this.handleusernameChange}/>
                    <br/>
                </label>
                <label>
                    nationality
                    <input type="text" name="nationality" value={this.nationality} onChange={this.handlenationalityChange}/>
                    <br/>
                </label>
                <label>
                    gender
                    <input type="text" name="gender" value={this.gender} onChange={this.handlegenderChange}/>
                    <br/>
                </label>
                <label>
                    birthdate
                    <input type="text" name="birthdate" value={this.birthdate} onChange={this.handlebithdateChange}/>
                    <br/>
                </label>
                <label>
                    city
                    <input type="text" name="city" value={this.city} onChange={this.handlecityChange}/>
                    <br/>
                </label>
                <label>
                    country
                    <input type="text" name="country" value={this.country} onChange={this.handlecountryChange}/>
                    <br/>
                </label>
                <label>
                    jobtitle
                    <input type="text" name="jobtitle" value={this.jobtitle} onChange={this.handlejobtitleChange}/>
                    <br/>
                </label>
                <label>
                    mobilenumber
                    <input type="text" name="mobilenumber" value={this.mobilenumber} onChange={this.handlemobilenumberChange}/>
                    <br/>
                </label>
                <input type="submit" value="Create Investor" />
            </form> 

{

  <ul>
      {
     this.state.Investors.map( investor  => <li key = {investor._id}> Name: {investor.name} <button onClick= {() => {this.delete(investor._id)}}> Delete </button>   
     <form onClick={() => {this.update(investor._id)}}> 
     <label>
     Name
     <input type="text" name="name" value={this.name} onChange={this.handlenameChange}/>
     <br/>
 </label>
 <label>
     password
     <input type="text" name="password" value={this.password} onChange={this.handlepasswordChange}/>
     <br/>
 </label>
 <label>
     email
     <input type="text" name="email" value={this.email} onChange={this.handleemailChange}/>
     <br/>
 </label>
 <label>
     username
     <input type="text" name="username" value={this.username} onChange={this.handleusernameChange}/>
     <br/>
 </label>
 <label>
     nationality
     <input type="text" name="nationality" value={this.nationality} onChange={this.handlenationalityChange}/>
     <br/>
 </label>
 <label>
     gender
     <input type="text" name="gender" value={this.gender} onChange={this.handlegenderChange}/>
     <br/>
 </label>
 <label>
     birthdate
     <input type="text" name="birthdate" value={this.birthdate} onChange={this.handlebithdateChange}/>
     <br/>
 </label>
 <label>
     city
     <input type="text" name="city" value={this.city} onChange={this.handlecityChange}/>
     <br/>
 </label>
 <label>
     country
     <input type="text" name="country" value={this.country} onChange={this.handlecountryChange}/>
     <br/>
 </label>
 <label>
     jobtitle
     <input type="text" name="jobtitle" value={this.jobtitle} onChange={this.handlejobtitleChange}/>
     <br/>
 </label>
 <label>
     mobilenumber
     <input type="text" name="mobilenumber" value={this.mobilenumber} onChange={this.handlemobilenumberChange}/>
     <br/>
 </label>    
 <input type="submit" value="update Investor" />
            </form>  
            </li>)}
     </ul> 
  
 }
      </div>
    );
  }
}

export default Investor;
