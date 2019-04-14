import React, { Component } from 'react';

import './Reviewer.css';
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Forms from './Forms';

class Reviewer extends Component {
    constructor(){
        super();
      
        this.state ={
            reviewers:[]
            

        }
    
    }

    
    componentDidMount(){
  
        fetch('/api/Reviewer/')
        .then(res => res.json())
        .then(Reviewer => this.setState({reviewers: Reviewer.data},()=> console.log('the Reviewer',this.state.reviewers)));
      
    }
<<<<<<< HEAD

    render(){
      return (
        <div>
          <h2>All Reviewers</h2>
          <ul>
            {this.state.reviewers.map(reviewer =>
              <li key = {reviewer._id}
              > {reviewer.Username}  
              
              </li>
              )}
          </ul> 
        </div>
      )
    }
=======
  
  
  
 

  render() {
    return (
      
      <div>
        
    <h2> My Reviewers
    </h2>
    <Router>
<Switch>
  <Route exact path = './Forms'Component={Forms}/>
</Switch>
</Router>
 <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input type="text" name="Name" value={this.Name} onChange={this.handleNameChange}/>
                    <br/>
                </label>
                <label>
                    password
                    <input type="text" name="Password" value={this.Password} onChange={this.handlePasswordChange}/>
                    <br/>
                </label>
                <label>
                    email
                    <input type="text" name="Email" value={this.Email} onChange={this.handleemailChange}/>
                    <br/>
                </label>
                <label>
                    username
                    <input type="text" name="Username" value={this.Username} onChange={this.handleUsernameChange}/>
                    <br/>
                </label>
                <label>
                    YearsOfExperience
                    <input type="text" name="yearsOfExperience" value={this.YearsOfExperience} onChange={this.handleYearsofexpChange}/>
                    <br/>
                </label>
                <label>
                    gender
                    <input type="text" name="Gender" value={this.Gender} onChange={this.handleGenderChange}/>
                    <br/>
                </label>
                
                <input type="submit" value="Create Reviewer" />
            </form> 

{

  <ul>
    
    { //this.state.SPC.map( SpcForm  => <li1 key = {SpcForm._id}> investorname: {SpcForm.investorname}</li1>,
     this.state.Reviewers.map( Reviewer  => <li key = {Reviewer._id}> Name: {Reviewer.Name}
       <button onClick= {() => {this.delete(Reviewer._id)}}> Delete </button>   
     <form onClick={() => {this.update(Reviewer._id)}}>      
     <label>
     Name
     <input type="text" name="Name" value={this.Name} onChange={this.handleNameChange}/>
     <br/>
 </label>
 <label>
     password
     <input type="text" name="Password" value={this.Password} onChange={this.handlePasswordChange}/>
     <br/>
 </label>
 <label>
     email
     <input type="text" name="Email" value={this.Email} onChange={this.handleemailChange}/>
     <br/>
 </label>
 <label>
     username
     <input type="text" name="Username" value={this.Username} onChange={this.handleUsernameChange}/>
     <br/>
 </label>
 <label>
     yearsOfExperience
     <input type="text" name="yearsOfExperience" value={this.YearsOfExperience} onChange={this.handleYearsofexpChange}/>
     <br/>
 </label>
 <label>
     gender
     <input type="text" name="Gender" value={this.Gender} onChange={this.handleGenderChange}/>
     <br/>
 </label>
 
 <input type="submit" value="update Reviewer" />
            </form>  
            </li> ) }
     </ul> 
  
 }

<Toolbar>
  <Link to= {'./Forms'}><Button color ="inherit"> view  Forms</Button></Link>
  </Toolbar>

  </div>

      
    );
>>>>>>> 323566300f46102d505e090996971ed1f0b3731b
  }
  
 

    

export default Reviewer;
