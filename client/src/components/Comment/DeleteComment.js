import React, { Component } from 'react';



class DeleteComment extends Component {

  constructor() {
        super();
        this.delete = this.delete.bind(this);
 this.state={
      comments: []
    }
    }
   delete(id){
        return fetch('/api/Comment/'+id, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => console.log(data));
      }
      componentDidMount(){
        fetch('/api/Comment')
        .then(res => res.json())
        .then(Comment => this.setState({comments: Comment.data}, () => console.log('Comments fetched',this.state.comments)));
      }
      render() {
        return (
          <div >
    <h2>Delete Comment</h2> 
    <ul>
          {this.state.comments.map(comment =>
            <li key = {comment._id}
            > {comment.name} <br/><button onClick = {() => {this.delete(comment._id)}}> Delete</button> 
            </li>
            )}
        </ul>
    
          </div>
        );
        }
    }

export default DeleteComment;