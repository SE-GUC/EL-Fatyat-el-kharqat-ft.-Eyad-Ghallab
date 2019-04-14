import React, { Component } from 'react';
import './Lawyer.css';
class Workspace extends Component {
    constructor(){
            super()
            this.state={
                SPC: [],
                SSC:[],
        }
}
get(){
    fetch('/api/Lawyer/find/SSC')

.then(res => res.json())
.then(ssc => this.setState({SSC: ssc.data}, () => console.log('ssc fetched',this.state.SSC)));
       

}
get(){
    
    fetch('/api/Lawyer/find/SPC')

.then(res => res.json())
.then(spc => this.setState({SPC: spc.data}, () => console.log('spc fetched',this.state.SPC)));
       
}

render(){
        
    return(
        <div> 
            <h2>Unlocked forms</h2>
            
            <button onClick={()=>{this.get()}}>get untlocked SPC forms </button> 
            <ul>
      {
     this.state.SPC.map(spc => 
        <li key = {spc._id}>
         Name: {spc.Facility_name} 
         investor name:{spc.investorname}
         
              
            </li>)}
     </ul> 
     <button onClick={()=>{this.get()}}>get untlocked SSC forms </button> 
            <ul>
      {
     this.state.SSC.map(ssc => 
        <li key = {ssc._id}>
         Name: {ssc.Facility_name} 
         investor name:{ssc.investorname}
         
              
            </li>)}
     </ul> 
  
 }

        </div>
    )}
}
export default Workspace;