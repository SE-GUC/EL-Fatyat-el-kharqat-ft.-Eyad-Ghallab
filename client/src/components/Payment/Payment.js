

import React, { Component } from 'react';
import './Payment.css';





class payment extends Component {
  constructor(){
      super();



      this.state ={
          payments:[]
          

 
      }}
  
  componentDidMount(){
      fetch('/api/payment')
      .then(res => res.json())
      .then(payment=> this.setState({payments:payment.data}, ()=>console.log('payments fetched..',this.state.
      payments)));
  }
  render(){
    return (
      <div>
        <h2>All Payments </h2>
        <ul>
        {this.state.payments.map( payment  => <li key = {payment._id}> 
        Firstname: {payment.Firstname} ,Lastname: {payment.Lastname} ,CVC: {payment.CVC} 
            
            </li>
            )}
        </ul> 
      </div>
    )
  }
}



export default payment;
   
 