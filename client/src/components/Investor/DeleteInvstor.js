import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';



class DeleteInvestor extends Component {

  constructor() {
        super();
        this.delete = this.delete.bind(this);
 this.state={
      investors: []
    }
    }
    delete(id){
        return fetch('/api/investors/'+id, {
          method: 'DELETE',
         // body: JSON.stringify(databody),
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => console.log(data));
      }
  
      componentDidMount(){
  
        fetch('/api/investors/')
        .then(res => res.json())
        .then(investors => this.setState({investors: investors.data},()=> console.log('the investors',this.state.investors)));
      //   var int = this.state.investors[1];
      // console.log (int)
    //  // res.json({data: this.state.investors})
    }
      render() {
        return (
          <div >
    <h2>Delete Investor</h2> 
    <ul>
          {this.state.investors.map(investor =>
            <li key = {investor._id}
            > {investor.name} <br/><Fab aria-label="Delete" onClick = {() => {this.delete(investor._id)}}>
            <DeleteIcon   />
          </Fab>
            </li>
            )}
        </ul>
    
          </div>
        );
        }
    }

export default DeleteInvestor;