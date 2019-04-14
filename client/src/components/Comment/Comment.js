import React, {Component} from 'react';
class Comment extends Component{
  constructor(){
    super();
this.state={
  comments:[]
}
  }
  componentDidMount(){
    fetch('/api/Comment')
    .then(res => res.json())
    .then(Comment => this.setState({comments: Comment.data}, () => console.log('Comments fetched',this.state.comments)));
  }
  render(){
    return (
      <div>
        <h2>All Comments</h2>
        <ul>
          {this.state.comments.map(comment =>
            <li key = {comment._id}
            > {comment.name}
            </li>
            )}
        </ul>
      </div>
    )
  }
}
export default Comment;