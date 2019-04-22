import React, {Component} from 'react';

class upload extends Component{
  constructor(){
    super();
this.state={
  investors:[],
  name:""
}
  }
  componentDidMount(){
  
    fetch('/api/investors/')
    .then(res => res.json())
    .then(investors => this.setState({Investors: investors.data},()=> console.log('the investors',this.state.Investors)));
 
} 
  
  render(){
    return (
      <div>
        <h2>Upload</h2>
        
        <ul> 
        {this.state.investors.map(investor =>
            <li key = {investor._id}
            > {investor.name}<script type="text/javascript" charset="UTF-8" src="xyz.js"></script> 
            <form action="/uploadfile" enctype="multipart/form-data"  method="POST"> 
            <label>
            <input type="file" name="myFile" />
               <input type="submit" value="Upload a file"/>
            </label>
               
            </form>
            </li>
            )} 

        </ul>

  
      </div>
    )
  }
}
export default upload;






