import React, { Component } from 'react';

import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

class DeleteNotification extends Component {

  constructor() {
        super();
        this.delete = this.delete.bind(this);
 this.state={
      notifications: []
    }
    }
   delete(id){
        return fetch('/api/Notification/'+id, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => console.log(data));
      }
      componentDidMount(){
        fetch('/api/Notification')
        .then(res => res.json()) 
        .then(Notification => this.setState({Notification: Notification.data}, ()=> console.log('Notifications Fetched..',
        Notification)));
     }
      render() {
        return (
          <div >
    <h2>Delete Notification</h2> 
    <ul>
          {this.state.notifications.map(notification =>
            <li key = {notification._id}
            > {notification.MSG} <br/><Fab aria-label="Delete" onClick = {() => {this.delete(notification._id)}}>
            <DeleteIcon   />
          </Fab> 
            </li>
            )}
        </ul>
    
          </div>
        );
        }
    }

export default DeleteNotification;