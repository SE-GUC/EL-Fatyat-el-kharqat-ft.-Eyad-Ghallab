import React, { Component } from 'react';
import './DeleteLawyer.css'




class DeleteLawyer extends Component {

    constructor() {
          super();
          this.delete = this.delete.bind(this);
   this.state={
        lawyers: []
      }
      }
      delete(id){
        return fetch('/api/Lawyer/'+id, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => console.log(data));
      }
      componentDidMount(){
        fetch('/api/Lawyer/')
        .then(res => res.json())
        .then(Lawyer => this.setState({lawyers: Lawyer.data}, () => console.log('Lawyer fetched',this.state.lawyers)));
      }
      render() {
        return (
          <div >
    <h2>Lawyer </h2> 
    <ul>
    {this.state.lawyers.map( lawyer  => <li key = {lawyer._id}> 
        {lawyer.username} 
         <br/><button onClick = {() => {this.delete(lawyer._id)}}> Delete</button> 
         
            </li>
            )}
        </ul>
    
          </div>
        );
        }
    }

export default DeleteLawyer;
      