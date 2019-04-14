import React, {Component} from 'react';
import './SPC.css'
class SPC extends Component{
  constructor(){
    super();
this.state={
  spcs:[],
  payment:""

}
  }
  componentDidMount(){
    fetch('/api/SPC')
    .then(res => res.json())
    .then(SPC => this.setState({spcs: SPC.data}, () => console.log('SPC fetched',this.state.spcs)));
  }
  payment(id){
     
    if(this.state.payment !== ""){
         
        this.setState({payment: "" })}
    fetch('/api/SPC/'+ id+ '/find')
    .then(res => res.json())
    .then(pay => this.setState({payment: pay.data},()=> console.log('you should pay',this.state.payment)));
    // this.state.paymenet
// printString(this.state.paymenet)
 }

  render(){
    return (
      <div>
        <h2>All SPC Forms</h2>
        <ul>
          {this.state.spcs.map(spc =>
            <li key = {spc._id}
            > {spc.Facility_name}  <button onClick= {() => {this.payment(spc._id)}}>
            pay   </button>  
            </li>
            )}
        </ul> <h1>You Should pay: {this.state.payment}</h1>
      </div>
    )
  }
}
export default SPC;