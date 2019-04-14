import React, {Component} from 'react';
import './Admin.css'
class Admin extends Component{
  constructor(){
    super();
this.state={
  admins:[]
}
  }
  componentDidMount(){
    fetch('/api/Admin')
    .then(res => res.json())
    .then(Admin => this.setState({admins: Admin.data}, () => console.log('Admins fetched',this.state.admins)));
  }
  render(){
    return (
      <div>
        <h2>All Admins</h2>
        <ul>
          {this.state.admins.map(admin =>
            <li key = {admin._id}
            > {admin.name}
            </li>
            )}
        </ul>
      </div>
    )
  }
}
export default Admin;










































