import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';



class DeleteAdmin extends Component {

  constructor() {
        super();
        this.delete = this.delete.bind(this);
 this.state={
      admins: []
    }
    }
   delete(id){
        return fetch('/api/Admin/'+id, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => console.log(data));
      }
      componentDidMount(){
        fetch('/api/Admin')
        .then(res => res.json())
        .then(Admin => this.setState({admins: Admin.data}, () => console.log('Admins fetched',this.state.admins)));
      }
      render() {
        return (
          <div >
    <h2>Delete Admin</h2> 
    <ul>
          {this.state.admins.map(admin =>
            <li key = {admin._id}
            > {admin.name} <br/><Fab aria-label="Delete" onClick = {() => {this.delete(admin._id)}}>
            <DeleteIcon   />
          </Fab>
            </li>
            )}
        </ul>
    
          </div>
        );
        }
    }

export default DeleteAdmin;