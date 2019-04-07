import React, { Component } from 'react';
import './SPC.css';

class SPC extends Component {
  constructor(){
    super();
    this.state={
      spcs: []
    }
  }
  componentDidMount(){
    fetch('/api/SPC')
    .then(res => res.json())
    .then(spcs => this.setState({spcs}, () => console.log ('SPC Forms fetched' , 
    spcs)));
  }
  render() {
    return (
      <div >
<h2>SPC FORM</h2>
<ul>
  {this.state.spcs.map(spc =>
    <li key = {spc._id}>{spc.Facility_name} </li>)}
</ul>
      </div>
    );
  }
}

export default SPC;
