import React, { Component } from 'react';
import './DeleteSSC.css'


class DeleteSSC extends Component {

  constructor() {
        super();
        this.delete = this.delete.bind(this);
 this.state={
      sscs: []
    }
    }
           

   delete(id){
        return fetch('/api/SSC/'+id, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => console.log(data));
      }
      componentDidMount(){
        fetch('/api/SSC/all')
        .then(res => res.json())
        .then(SSC => this.setState({sscs: SSC.data}, () => console.log('SSC fetched',this.state.sscs)));
      }
      render() {
        return (
          <div >
    <h2>SSC Forms</h2> 
    <ul>
          {this.state.sscs.map(ssc =>
            <li key = {ssc._id}
            > 
            {ssc.Company_name} <br/><button onClick = {() => {this.delete(ssc._id)}}> Delete</button> 
            </li>
            )}
        </ul>
    
          </div>
        );
        }
    }

export default DeleteSSC;