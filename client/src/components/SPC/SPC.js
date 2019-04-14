import React, {Component} from 'react';
import './SPC.css'
class SPC extends Component{
  constructor(){
    super();
this.state={
  spcs:[],
 
}
  }
  componentDidMount(){
    fetch('/api/SPC/all')
    .then(res => res.json())
    .then(SPC => this.setState({spcs: SPC.data}, () => console.log('SPC fetched',this.state.spcs)));
  }
  
  render(){
    return (
      <div>
        <h2>All SPC Forms</h2>
        <ul>
          {this.state.spcs.map(spc =>
            <li key = {spc._id}
            > {spc.Facility_name}
            </li>
            )}
        </ul>
        
      </div>
    )
  }
}
export default SPC;