import React, { Component } from 'react';

import './Investor.css';

class Investor extends Component {
    constructor(){
        super();
        this.state ={
            Investors:[]
           
        }
    
    }
    componentDidMount(){
  
        fetch('/api/investors/')
        .then(res => res.json())
        .then(investors => this.setState({Investors: investors.data},()=> console.log('the investors',this.state.Investors)));
      //   var int = this.state.investors[1];
      // console.log (int)
    //  // res.json({data: this.state.investors})
    }
  render() {
 //  var {Investors} =  this.state;
    return (
      <div>
    <h2> My Investors</h2>
{
 <ul>
     {this.state.Investors.map( investor  => <li key = {investor._id}> Name: {investor.name}</li>)}
    </ul> 
}
      </div>
    );
  }
}

export default Investor;
