import React, { Component } from 'react';
import './Lawyer.css';
class Workspace extends Component {
    constructor(){
            super()
            this.state={
                SPC: [],
        }
}
componentDidMount(){
    
    fetch('/api/Lawyer/find/SPC')
    .then(res => res.json())
    .then(SPC => this.setState({SPC: SPC.data},()=>console.log('Lawyers fetched..',
    this.state.SPC)));
}

render(){
        
    return(
        <div> 
            <ul>
      {
     this.state.SPC.map( SPC => <li key = {SPC._id}> Name: {SPC.Facility_name} Facility Phone Number: {SPC.Facility_Phone_Number}  
     
 
              
            </li>)}
     </ul> 
  
 }

        </div>
    )}
}
export default Workspace;