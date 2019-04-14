import React, { Component } from 'react';

import './Comment.css';

class Comment extends Component {
    constructor(){
        super();
        
        this.handlenameChange =  this.handlenameChange.bind(this);
        this.handlecommentChange =  this.handlecommentChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.delete=this.delete.bind(this);
        this.state ={
            Comment:[],
            name : "",
            comment:"",
            updatedName: "",
            updatedComment: "",
        }
    }
      handlenameChange(e){
        this.setState({name: e.target.value });
  
      }
      handlecommentChange(e){
        this.setState({comment: e.target.value });
      }

      handlenameUpdateChange(e){
        this.setState({updatedName: e.target.value });
  
      }
      handlecommentUpdateChange(e){
        this.setState({updatedComment: e.target.value });
      }

      delete(id){
        return fetch('/api/Comment/'+id, {
          method: 'DELETE',
         // body: JSON.stringify(databody),
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then( res => {if (res){
        fetch('/api/Comment/')
            .then(res => res.json())
            .then(Comment => this.setState({Comment: Comment.data},()=> console.log('comment',this.state.Comment)))
      }}
      );
          
      }
    update = id => e => {
        e.preventDefault();
        const databody = {
            "name": this.state.updatedName,
            "comment": this.state.updatedComment,
        }
    return fetch ('/api/Comment/'+id,{
        method:'PUT',
        body: JSON.stringify(databody),
        headers : {
            'Content-Type': 'application/json'
        },

    }).then(
        res => {if (res){
            fetch('/api/Comment/')
                .then(res => res.json())
                .then(Comment => this.setState({Comment: Comment.data},()=> console.log('comment',this.state.Comment)))
          }}
    );

}
      handleSubmit(e){
        e.preventDefault();
        let databody = {
            "name":this.state.name,	
            "comment":this.state.comment
        }	

        return fetch('/api/Comment/', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(
            res => {if (res){
                fetch('/api/Comment/')
                    .then(res => res.json())
                    .then(Comment => this.setState({Comment: Comment.data},()=> console.log('comment',this.state.Comment)))
              }}
        ); 
    }
    componentDidMount(){
  
        fetch('/api/Comment/')
        .then(res => res.json())
        .then(Comment => this.setState({Comment: Comment.data},()=> console.log('comment',this.state.Comment)));
    }
    render() {
           return (
             <div>
           <h2> My Comments</h2>
       
        <form onSubmit={this.handleSubmit}>
                       <label>
                           Name
                           <input type="text" name="name" value={this.name} onChange={this.handlenameChange}/>
                       </label>
                       <label>
                           comment
                           <input type="text" name="name" value={this.comment} onChange={this.handlecommentChange}/>
                       </label>
                       <input type="submit" value="Add comment" />
             
                       </form>

{
    <ul>
        {
       this.state.Comment.map( Comment  => <li key = {Comment._id}>
                             name: {Comment.name} comment: {Comment.comment}
                             <button onClick={() => this.delete(Comment._id)}>Delete</button>
                             <form onSubmit={this.update(Comment._id)}>
                            <label key={Comment._id}>
                                Name
                                <input type="text" name="updatedName" value={this.updatedName} onChange={this.handlenameUpdateChange.bind(this)}/>
                            </label>
                            <label>
                                comment
                                <input type="text" name="updatedComment" value={this.updatedComment} onChange={this.handlecommentUpdateChange.bind(this)}/>
                            </label>
                            <input type="submit" value="Update" />
                    
                            </form>
                              </li>
                            )}
       </ul> 
   }

                       </div>
                        );
                    }




}

export default Comment;