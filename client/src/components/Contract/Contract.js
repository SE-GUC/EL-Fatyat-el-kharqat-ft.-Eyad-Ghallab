import React, { Component } from 'react';

import './Contract.css';

class Contract extends Component {
    constructor(){
        super();
        this.state ={
            contracts:[]
        }
    
    }

    
    
    componentDidMount(){
  
        fetch('/api/Contract/')
        .then(res => res.json())
        .then(Contract => this.setState({contracts: Contract.data},()=> console.log('the contratcs',this.state.contracts)));
     
    }

render() {
       return (
         <div> 
       <h2> My Contracts</h2>


       <ul>
    {
        this.state.contracts.map( Contract  => <li key = {Contract._id}> 
        {Contract.First_party_name} <br/> 
        </li>
            )}
        </ul>  
      </div>
    )
  }
}

export default Contract;
