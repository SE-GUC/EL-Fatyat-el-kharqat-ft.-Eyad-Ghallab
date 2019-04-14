import React, { Component } from 'react';
import './Lawyer.css';

class Lawyer extends Component {
  constructor(){
      super();
     
      this.state={
<<<<<<< HEAD
         lawyers: []
      
     
=======
         Lawyer: [],   
      username: "",
      password: "",
      fullname: "",
      birthdate: "",
      email: "",
      phonenumber:"",
      legaltype: "",
      gender:"",
      noOfPreviousCases: ""
  
>>>>>>> 323566300f46102d505e090996971ed1f0b3731b
      }
  }
  

<<<<<<< HEAD
=======
  handleSubmit(e){ 
    e.preventDefault();

    
    let databody = {
 "username":this.state.username,	
"password":this.state.password,	
"fullname":this.state.fullname,	
"birthdate":this.state.birthdate,	
"email":this.state.email,	
"phonenumber":this.state.phonenumber,	
"legaltype":this.state.legaltype,	
"gender":this.state.gender,	
"noOfPreviousCases":this.state.noOfPreviousCases,	
	
    }

    return fetch('/api/Lawyer/createlawyer', {
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
  //console.log(this.state.fullname)
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
   return fetch('http://localhost:5000/api/Lawyer/'+id, {
       method: 'PUT',
       body: JSON.stringify(databody),
       headers: {
           'Content-Type': 'application/json'
       },
   })
   .then(res => res.json())
   .then(data => console.log(data)); 
}


>>>>>>> 323566300f46102d505e090996971ed1f0b3731b
  componentDidMount(){
      fetch('/api/Lawyer/')
      .then(res => res.json())
<<<<<<< HEAD
      .then(Lawyer=> this.setState({lawyers:Lawyer.data}, ()=>console.log('Lawyers fetched..',
     this.state.lawyers)));
  }
    render() {
    return (
      <div>
      <h2>All Lawyers </h2>
      <ul>
      {this.state.lawyers.map( lawyer  => <li key = {lawyer._id}> 
        fullname: {lawyer.fullname} 
          
          </li>
          )}
      </ul> 
    </div>
  )
=======
      .then(Lawyer=> this.setState({Lawyer:Lawyer.data}, ()=>console.log('Lawyers fetched..',
     this.state.Lawyer)));
   
  }
    render() {
    return (
      <div >
          <h2>Lawyers</h2>
          <form onSubmit={this.handleSubmit}>
                <label>
                username
                    <input type="text" name=" username" value={this.username} onChange={this.handleusernameChange}/>
                    <br/>
                </label>
                <label>
                 password
                    <input type="text" name="password" value={this.password} onChange={this.handlepasswordChange}/>
                    <br/>
                </label>
                <label>
                fullname
                    <input type="text" name="fullname" value={this.fullname} onChange={this.handlefullnameChange}/>
                    <br/>
                </label>
                <label>
                birthdate
                    <input type="text" name="birthdate" value={this.birthdate} onChange={this.handlebirthdateChange}/>
                    <br/>
                </label>
                <label>
                phonenumber
                    <input type="text" name="phonenumber" value={this.phonenumber} onChange={this.handlephonenumberChange}/>
                    <br/>
                </label>
                <label>
                legaltype
                    <input type="text" name="legaltype" value={this.legaltype} onChange={this.handlelegaltypeChange}/>
                    <br/>
                </label>
                <label>
                gender
                    <input type="text" name="gender" value={this.gender} onChange={this.handlegenderChange}/>
                    <br/>
                </label>
                <label>
                noOfPreviousCases
                    <input type="text" name="noOfPreviousCases" value={this.noOfPreviousCases} onChange={this.handlenoOfPreviousCasesChange}/>
                    <br/>
                </label>
                <label>
                email
                    <input type="text" name="email" value={this.email} onChange={this.handleemailChange}/>
                    <br/>
                </label>
                <input type="submit" value="Create Lawyer" />
            </form> 

{
  
          <ul>
           
      {
     this.state.Lawyer.map( Lawyer => <li key = {Lawyer._id}> Name: {Lawyer.fullname} Number of previous cases: {Lawyer.noOfPreviousCases}<button onClick= {() => {this.delete(Lawyer._id)}}> Delete </button>   <form onClick={() => {this.update(Lawyer._id)}}> 
     <label>
                username
                    <input type="text" name=" username" value={this.username} onChange={this.handleusernameChange}/>
                    <br/>
                </label>
                <label>
                 password
                    <input type="text" name="password" value={this.password} onChange={this.handlepasswordChange}/>
                    <br/>
                </label>
                <label>
                fullname
                    <input type="text" name="fullname" value={this.fullname} onChange={this.handlefullnameChange}/>
                    <br/>
                </label>
                <label>
                birthdate
                    <input type="text" name="birthdate" value={this.birthdate} onChange={this.handlebirthdateChange}/>
                    <br/>
                </label>
                <label>
                phonenumber
                    <input type="text" name="phonenumber" value={this.phonenumber} onChange={this.handlephonenumberChange}/>
                    <br/>
                </label>
                <label>
                legaltype
                    <input type="text" name="legaltype" value={this.legaltype} onChange={this.handlelegaltypeChange}/>
                    <br/>
                </label>
                <label>
                gender
                    <input type="text" name="gender" value={this.gender} onChange={this.handlegenderChange}/>
                    <br/>
                </label>
                <label>
                noOfPreviousCases
                    <input type="text" name="noOfPreviousCases" value={this.noOfPreviousCases} onChange={this.handlenoOfPreviousCasesChange}/>
                    <br/>
                </label>
                <label>
                email
                    <input type="text" name="email" value={this.email} onChange={this.handleemailChange}/>
                    <br/>
                </label>    
 <input type="submit" value="update Lawyer" />
            </form>  
            </li>)}
     </ul> 
     
  
 }
 
  
      </div>
    );
  }
>>>>>>> 323566300f46102d505e090996971ed1f0b3731b
}
}



export default Lawyer;
 
     