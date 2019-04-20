import React, {Component} from 'react';
import './Admin.css'
class upload extends Component{
  constructor(){
    super();
this.state={
  admins:[],
  name:""
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
        <h2>Upload</h2>
        
        <ul> 
        {this.state.admins.map(admin =>
            <li key = {admin._id}
            > {admin.name}<script type="text/javascript" charset="UTF-8" src="xyz.js"></script> 
            <form action="/uploadfile" enctype="multipart/form-data"  method="POST"> 
            <label>
            <input type="file" name="myFile" />
               <input type="submit" value="Upload a file"/>
            </label>
               
            </form>
            </li>
            )} 

        </ul>

        {/* <ul>
{
this.state.admins.map( admin  => <li key = {admin._id}> Name: {admin.name}  
<script type="text/javascript" charset="UTF-8" src="xyz.js"></script> 
<form action="/uploadfile" enctype="multipart/form-data" method="POST"> 
<label>
<input type="file" name="myFile" />
   <input type="submit" value="Upload a file"/>
</label>
   
</form>

            
            </li>)}
     </ul> */}
      </div>
    )
  }
}
export default upload;






