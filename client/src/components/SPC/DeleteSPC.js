import React, { Component } from 'react';
import './DeleteSPC.css'
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';



class DeleteSPC extends Component {

  constructor() {
        super();
        this.delete = this.delete.bind(this);
 this.state={
      spcs: []
    }
    }
   delete(id){
        return fetch('/api/SPC/all'+id, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => console.log(data));
      }
      componentDidMount(){
        fetch('/api/SPC/all')
        .then(res => res.json())
        .then(SPC => this.setState({spcs: SPC.data}, () => console.log('SPC fetched',this.state.spcs)));
      }
      render() {
        return (
          <div >
    <h2>SPC Forms</h2> 
    <ul>
          {this.state.spcs.map(spc =>
            <li key = {spc._id}
            > {spc.Facility_name} <br/><Fab aria-label="Delete" onClick = {() => {this.delete(spc._id)}}>
            <DeleteIcon   />
          </Fab>
            </li>
            )}
        </ul>
    
          </div>
        );
        }
    }

export default DeleteSPC;