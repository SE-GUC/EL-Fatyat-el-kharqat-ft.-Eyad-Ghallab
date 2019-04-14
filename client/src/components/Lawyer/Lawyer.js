import React, { Component } from 'react';
import './Lawyer.css';

class Lawyer extends Component {
  constructor(){
      super();
     
      this.state={
         lawyers: []
      
     
      }
  }
  

  componentDidMount(){
      fetch('/api/Lawyer/')
      .then(res => res.json())
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
}
}



export default Lawyer;
 
     