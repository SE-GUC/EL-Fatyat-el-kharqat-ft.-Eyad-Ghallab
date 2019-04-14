import React, { Component } from 'react';
import './DeleteContract.css'


class DeleteContract extends Component {

  constructor() {
        super();
        this.delete = this.delete.bind(this);
 this.state={
      Contracts: []
    }
    }
   delete(id){
        return fetch('/api/Contract/'+id, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => console.log(data));
      }
       
    componentDidMount(){
  
        fetch('/api/Contract')
        .then(res => res.json())
        .then(Contract => this.setState({Contracts: Contract.data},()=> console.log('Contract fetched',this.state.Contracts)));
     
    }
      render() {
        return (
          <div >
    <h2>Contract </h2> 
    <ul>
    {
        this.state.Contracts.map( contract  => <li key = {contract._id}> 
        {contract.First_party_name} <br/><button onClick = {() => {this.delete(contract._id)}}> Delete</button> 
        </li>
            )}
        </ul>  
    
          </div>
        );
        }
    }

export default DeleteContract;