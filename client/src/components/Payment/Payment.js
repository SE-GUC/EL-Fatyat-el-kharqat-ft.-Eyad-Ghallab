import React, { Component } from 'react';
import './Payment.css';


class payment extends Component {
  constructor(){
      super();
      this.state={
         payment: []
      }
  }
  componentDidMount(){
      fetch('/api/payment')
      .then(res => res.json())
      .then(payment=> this.setState({payment:payment.data}, ()=>console.log('payments fetched..',
      payment)));
  }
    render() {
    return (
      <div >
          <h2>payments</h2>
          {
 <ul>
     {this.state.payment.map( payment  => <li key = {payment._id}> Name: {payment.Firstname}</li>)}
    </ul> 


}
      
      </div>
    );
  }
}

export default payment;

