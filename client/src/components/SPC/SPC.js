import React, {Component} from 'react';
import './SPC.css'

class SPC extends Component{
 
 
 
  constructor(){
    super();
    this.sms = this.sms.bind(this)
this.state={
  spcs:[],
<<<<<<< HEAD
  payment:""
=======
  paymenet:"",
  
  number: 0,
  msg:""
 
>>>>>>> 323566300f46102d505e090996971ed1f0b3731b

}

  }
 
  
  
  componentDidMount(){
    fetch('/api/SPC/all')
    .then(res => res.json())
    .then(SPC => this.setState({spcs: SPC.data}, () => console.log('SPC fetched',this.state.spcs)));
  }
<<<<<<< HEAD
  payment(id){
=======
  
  paymenet(id){
>>>>>>> 323566300f46102d505e090996971ed1f0b3731b
     
    if(this.state.payment !== ""){
         
        this.setState({payment: "" })}
    fetch('/api/SPC/'+ id+ '/find')
    .then(res => res.json())
    .then(pay => this.setState({payment: pay.data},()=> console.log('you should pay',this.state.payment)));
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
            {this.state.spcs.map(spc => <li key = {spc._id}> {spc.Facility_name}</li>)}
          
        </ul>
        <h2>Pay</h2>
        <ul>
          {this.state.spcs.map(spc =>
            <li key = {spc._id}
<<<<<<< HEAD
            > {spc.Facility_name}  <button onClick= {() => {this.payment(spc._id)}}>
=======
            > {spc.Phone_Number} 
             <button onClick= {() => {this.paymenet(spc._id)}}>
>>>>>>> 323566300f46102d505e090996971ed1f0b3731b
            pay   </button>  
            <button onClick= {() => {this.sms(spc.Phone_Number,this.state.paymenet)}}>

             pay the fees 
            </button>  
            
            </li>
            )}
<<<<<<< HEAD
        </ul> <h1>You Should pay: {this.state.payment}</h1>
=======
        </ul> <h1>You Should pay: {this.state.paymenet}</h1>
        
        
       
       
       
        
          
       
   
  
>>>>>>> 323566300f46102d505e090996971ed1f0b3731b
      </div>
    )
  }
}
export default SPC;