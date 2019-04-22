import React, {  Component} from "react";
import './Admin.css';

class Admin1 extends Component {
    constructor(){
        super();
        this.handlenameChange =  this.handlenameChange.bind(this);
        this.handleemailChange =  this.handleemailChange.bind(this);
        this.handleaddressChange =  this.handleaddressChange.bind(this);
        this.handleemailChange =  this.handleemailChange.bind(this);
        this.handleusernameChange=  this.handleusernameChange.bind(this) ;
        this.handlepasswordChange=  this.handlepasswordChange.bind(this);
       this.handleSubmit= this.handleSubmit.bind(this);
        this.state ={
            Admin:[],
            
            name:"",
            address : "",
email:"",	
username:	"",	
password : "",

        }
    
    }

    handlenameChange(e){
      this.setState({name: e.target.value })

    }
    handleaddressChange(e){
        this.setState({address: e.target.value })
  
      }
    
    handleemailChange(e){
      this.setState({email: e.target.value })

    }
   
    handleusernameChange(e){
      this.setState({username: e.target.value })

    }
    handlepasswordChange(e){
        this.setState({password: e.target.value })
  
      }
    


    handleSubmit(e){
      e.preventDefault();
      let databody = {
         	
"name":this.state.name,	
"address":this.state.address,
"email":this.state.email,	
"username":	this.state.username,
"password":this.state.password,	
	
      }
  
      return fetch('/api/Admin', {
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
       if(this.state.address !== ""){
        databody = {"address":this.state.address}}
       
       
                   console.log(this.state.username)
     return fetch('http://localhost:5000/api/Admin/'+id, {
         method: 'PUT',
         body: JSON.stringify(databody),
         headers: {
             'Content-Type': 'application/json'
         },
     })
     .then(res => res.json())
     .then(data => console.log(data)); 
 }
 delete(id){
    return fetch('/api/Admin/'+id, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      },
  })
  .then(res => res.json())
  .then(data => console.log(data));
  }
  
  
       
    componentDidMount(){
       
       
        fetch ('/api/Admin')
        .then (res =>res.json())
        .then (Admin =>this.setState({Admin:Admin.data},()=> console.log('Admin fetched..',Admin)));


    }
    render(){
        
        return(
            <div>
                <h2>My Admins</h2>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input type="text" name="name" value={this.name} onChange={this.handlenameChange}/>
                </label>
                <label>
                    address
                    <input type="text" name="address" value={this.address} onChange={this.handleaddressChange}/>
                </label>
                
                <label>
                    email
                    <input type="text" name="email" value={this.email} onChange={this.handleemailChange}/>
                </label>
                <label>
                    username
                    <input type="text" name="username" value={this.username} onChange={this.handleusernameChange}/>
                </label>
                <label>
                    password
                    <input type="text" name="password" value={this.password} onChange={this.handlepasswordChange}/>
                </label>
                
                <input type="submit" value="Create new Admin" />
            </form> 
            
{

    <ul>
        {
       this.state.Admin.map( Admin  => <li key = {Admin._id}> Name: {Admin.name} <button onClick= {() => {this.delete(Admin._id)}}> Delete </button>   
       <form onClick={() => {this.update(Admin._id)}}> 
       <label>
       name
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
       address
       <input type="text" name="address" value={this.address} onChange={this.handleaddressChange}/>
       <br/>
   </label>
   
   <input type="submit" value="update Admin" />
              </form>  
              </li>)}
       </ul> 
    
   }
                
{
 <ul>
     {this.state.Admin.map( Ad  => <li key = {Ad._id}> Name: {Ad.name}</li>)}
    </ul> 
}
                </div>

        );
    }
   
    
}
export default Admin1;