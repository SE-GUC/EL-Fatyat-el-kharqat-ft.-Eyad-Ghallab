import React, { Component } from 'react';
import './Reviewer.css';
//import './SPC.css'

class Forms extends Component {
    constructor(){
        super();
        //this.sms = this.sms.bind(this)
    this.state={
      spcs:[],
      SSC:[],
     
      
    
    }
      }

      componentWillMount(){
        fetch('http://localhost:5000/api/Reviewer/find/SPC')
        .then(res => res.json())
        .then(SPCform => this.setState({spcs: SPCform.data}, () => console.log('SPC fetched',this.state.spcs)));
      }

      componentDidMount(){
        fetch('http://localhost:5000/api/Reviewer/find/SSC')
        .then(res => res.json())
        .then(ssc => this.setState({SSC: ssc.data}, () => console.log('SSC fetched' ,this.state.SSC)));
      }
    
       

   
  render (){

  return(

    <div>
    <h2>All accepted spc Forms</h2>
    <ul>
      {this.state.spcs.map(spc =>
        <li key = {spc._id}
        > Facility_name: {spc.Facility_name} 
        </li>
            )}
        </ul> 
        <h2>All accepted ssc Forms</h2>
        <ul>
          {this.state.SSC.map(ssc =>
            <li key = {ssc._id}
            >Company_name: {ssc.Company_name} 
            </li>
                )}
            </ul> 
      </div>
    )
  }
}


export default Forms;