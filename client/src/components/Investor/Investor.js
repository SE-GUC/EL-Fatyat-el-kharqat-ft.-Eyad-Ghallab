import React, {Component} from 'react';

class Investor extends Component{
  constructor(){
    super();
this.state={
  investors:[]
}
  }
  
  componentDidMount(){
  
    fetch('/api/investors/')
    .then(res => res.json())
    .then(Investors => this.setState({investors: Investors.data},()=> console.log('the investors',this.state.investors)));
  //   var int = this.state.investors[1];
  // console.log (int)
//  // res.json({data: this.state.investors})
}
  render(){
    return (
      <div>
        <h2>All Investors</h2>
        <ul>
          {this.state.investors.map(investor =>
            <li key = {investor._id}
            > {investor.name}
            </li>
            )}
        </ul>
      </div>
    )
  }
}
export default Investor;










































