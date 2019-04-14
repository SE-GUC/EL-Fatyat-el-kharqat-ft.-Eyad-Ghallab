import React, {Component} from 'react';

import './SPC.css'

class UnlockedForms extends Component{
    constructor(){
      super();
  this.state={
    spcs:[],}}
    componentDidMount(){
        fetch('/api/Lawyer/find/SPC')
        
        // .then(res => res.json())
        //     .then(spc => this.setState({spcs: spc.data}, () => console.log('spc fetched',this.state.spcs)))
        //     //.where(({Locked:false}).sort({Form_Date: -1}));
          
          
        
        }
get(){
     
if(this.state.spcs.Locked !== "true"){
    fetch('/api/Lawyer/find/SPC')
    .then(res => res.json())
            .then(spc => this.setState({spcs: spc.data}, () => console.log('spc fetched',this.state.spcs)));
            // this.state.paymenet             
   
}
   
        // printString(this.state.paymenet)
         }      
        render(){
            return(
                <div>
                    <ul>
                    <h1>
      {
     this.state.spcs.map( SPC => 
     <li key = {SPC._id}>
      Name: {SPC.Facility_name} 
      investor name:{SPC.investorname}
      Locked:{SPC.Locked}
              
            </li>)}
            </h1>
     </ul> 
                    </div> 


            )
        }
}

export default UnlockedForms;