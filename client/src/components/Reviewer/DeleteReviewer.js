import React, { Component } from 'react';
import './DeleteReviewer.css'



class DeleteReviewer extends Component {

  constructor() {
        super();
        this.delete = this.delete.bind(this);
 this.state={
      reviewers: []
    }
    }
    

   delete(id){
        return fetch('/api/Reviewer/'+id, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => console.log(data));
      }
      componentDidMount(){
        fetch('/api/Reviewer/')
        .then(res => res.json())
        .then(Reviewer => this.setState({reviewers: Reviewer.data}, () => console.log('Reviewer fetched',this.state.reviewers)));
      }
      render() {
        return (
          <div >
    <h2>Reviewer </h2> 
    <ul>
          {this.state.reviewers.map(reviewer =>
            <li key = {reviewer._id}
            > {reviewer.Username} <br/><button onClick = {() => {this.delete(reviewer._id)}}> Delete</button> 
            </li>
            )}
        </ul>
    
          </div>
        );
        }
    }

export default DeleteReviewer;