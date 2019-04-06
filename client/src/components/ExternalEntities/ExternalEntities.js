import React, { Component } from 'react';

import './ExternalEntities.css';

class ExternalEntities extends Component {
    constructor(){
        super();
        
    
        this.handlenameChange=  this.handlenameChange.bind(this);
        this.handleusernameChange=  this.handleusernameChange.bind(this);
        this.handlepasswordChange=  this.handlepasswordChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.state ={
            ExternalEntities:[],
            
            name:"",
	
username:	"",	
password : ""
	
           
        }
    
    }

    handlenameChange(e){
      this.setState({name: e.target.value })

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
"username":	this.state.username,	
"password":this.state.password,
      }
  
      return fetch('/api/ExternalEntities/', {
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
  
        fetch('/api/ExternalEntities/')
        .then(res => res.json())
        .then(ExternalEntities => this.setState({ExternalEntities: ExternalEntities.data},()=> console.log('the External Entities',this.state.ExternalEntities)));
 
    }
  render() {

    return (
      <div>
    <h2> My External Entities</h2>

 <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input type="text" name="name" value={this.name} onChange={this.handlenameChange}/>
                </label>
                <label>
                    username
                    <input type="text" name="username" value={this.username} onChange={this.handleusernameChange}/>
                </label>
                <label>
                    password
                    <input type="text" name="password" value={this.password} onChange={this.handlepasswordChange}/>
                </label>              
                <input type="submit" value="Add to DB" />
            </form> 

{
  <ul>
      {
     this.state.ExternalEntities.map( ExternalEntities  => <li key = {ExternalEntities._id}> Name: {ExternalEntities.name}</li>)}
     </ul> 
 }
      </div>
    );
  }
}

export default ExternalEntities;