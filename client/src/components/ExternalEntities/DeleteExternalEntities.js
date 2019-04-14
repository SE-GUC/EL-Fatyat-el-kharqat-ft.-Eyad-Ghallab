import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';


class DeleteExternalEntities extends Component {

  constructor() {
        super();
        this.delete = this.delete.bind(this);
 this.state={
      externalentities: []
    }
    }
    delete(id){
        return fetch('/api/ExternalEntities/'+id, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => console.log(data));
      }
      
      componentDidMount(){
  
        fetch('/api/ExternalEntities/')
        .then(res => res.json())
        .then(ExternalEntities => this.setState({externalentities: ExternalEntities.data},()=> console.log('the External Entities',this.state.externalentities)));
 
    }
      render() {
        return (
          <div >
    <h2>Delete External</h2> 
    <ul>
          {this.state.externalentities.map(externalentity =>
            <li key = {externalentity._id}
            > {externalentity.name} <br/><Fab aria-label="Delete" onClick = {() => {this.delete(externalentity._id)}}>
            <DeleteIcon   />
          </Fab>
            </li>
            )}
        </ul>
    
          </div>
        );
        }
    }
{/* <button onClick = {() => {this.delete(externalentity._id)}}> Delete</button>  */}
export default DeleteExternalEntities;