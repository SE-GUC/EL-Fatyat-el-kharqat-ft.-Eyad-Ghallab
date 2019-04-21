import React, { Component } from 'react';

import './Form.css';
import Workspace from '../Workspace/Workspace';

class Form extends Component {
    
    constructor(){
        super();

    this.state ={
    Form:[]}    

  }
  
  





    

 get(id){
   fetch('/api/SPC/'+id)
   .then(res => res.json()) 
   .then(form => this.setState({Form: form.data}, ()=> console.log('form Fetched..',
   this.state.Form)));
}

  render() {
    return (
        
        <ul> {this.state.Form.map( form  => <li key = {form._id}> Facility_name: {form.Facility_name} ,Governorate: {form.Governorate}
         </li>)}
         <Workspace get={this.get} />
            
        </ul> 
    );
  }
}

export default Form;