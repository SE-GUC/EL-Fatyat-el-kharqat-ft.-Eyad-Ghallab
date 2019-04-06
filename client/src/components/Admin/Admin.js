import React, {  Component} from "react";
import './Admin.css';

class Admin extends Component {
    constructor(){
        super();
        this.state={
            Admin:[]
        }
    }
    componentDidMount(){
       
       // axios.get(`http://localhost:5000/api/Admin`)
        fetch ('/api/Admin')
        .then (res =>res.json())
        .then (Admin =>this.setState({Admin:Admin.data},()=> console.log('Admin fetched..',Admin)));


    }
    render(){
        
        return(
            <div>
                <h2>My Admins</h2>
                
{
 <ul>
     {this.state.Admin.map( Ad  => <li key = {Ad._id}> Name: {Ad.name}</li>)}
    </ul> 
}
                </div>

        );
    }
    
}
export default Admin;