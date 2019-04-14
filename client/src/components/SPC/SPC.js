import React, {Component} from 'react';
import './SPC.css'

class SPC extends Component{
 
 
 
  constructor(){
    super();
    this.sms = this.sms.bind(this)
this.state={
  spcs:[],
  paymenet:"",
  
  number: 0,
  msg:""
 

}

  }
  
  
  componentDidMount(){
    fetch('/api/SPC')
    .then(res => res.json())
    .then(SPC => this.setState({spcs: SPC.data}, () => console.log('SPC fetched',this.state.spcs)));
  }
  paymenet(id){
     
    if(this.state.paymenet !== ""){
         
        this.setState({paymenet: "" })}
    fetch('/api/SPC/'+ id+ '/find')
    .then(res => res.json())
    .then(pay => this.setState({paymenet: pay.data},()=> console.log('you should pay',this.state.paymenet)));
    // this.state.paymenet
// printString(this.state.paymenet)
 }
 
 sms(num,mssg) {
  //e.preventDefault();
  let databody  = {
    "number": num,
   "msg":mssg
    
  };

  return fetch('/api/SPC/msg', {
      method: 'POST',
      body: JSON.stringify(databody),
      headers: {
          'Content-Type': 'application/json'
      },
  })
  .then(res => res.json())
  .then(data => console.log(data)); 
  
  
  
  
}




  render(){
    return (
      <div>
        <h2>All SPC Forms</h2>
        <ul>
          {this.state.spcs.map(spc =>
            <li key = {spc._id}
            > {spc.Phone_Number} 
             <button onClick= {() => {this.paymenet(spc._id)}}>
            pay   </button>  
            <button onClick= {() => {this.sms(spc.Phone_Number,this.state.paymenet)}}>

             pay the fees 
            </button>  
            
            </li>
            )}
        </ul> <h1>You Should pay: {this.state.paymenet}</h1>
        
        
       
       
   
  
      </div>
    )
  }
}
export default SPC;