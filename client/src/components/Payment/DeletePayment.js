import React, { Component } from 'react';
import './DeletePayment.css'



class DeletePayment extends Component {

    constructor() {
          super();
          this.delete = this.delete.bind(this);
   this.state={
        payments: []
      }
      }
      delete(id){
        return fetch('/api/payment/'+id, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => console.log(data));
      }
      componentDidMount(){
        fetch('/api/payment/')
        .then(res => res.json())
        .then(Payment => this.setState({payments: Payment.data}, () => console.log('Payment fetched',this.state.payments)));
      }
      render() {
        return (
          <div >
    <h2>Payment </h2> 
    <ul>
    {this.state.payments.map( payment  => <li key = {payment._id}> 
        {payment.Firstname} 
         <br/><button onClick = {() => {this.delete(payment._id)}}> Delete</button> 
         
            </li>
            )}
        </ul>
    
          </div>
        );
        }
    }

export default DeletePayment;
      