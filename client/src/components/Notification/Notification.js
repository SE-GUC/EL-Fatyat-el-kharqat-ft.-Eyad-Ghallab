import React, { Component } from 'react';

//import { connect } from 'react-redux';

//import { login, logout } from '../../globalState/actions/authActions';
//import PropTypes from 'prop-types';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Login from '../Login/Login'
//import Button from '@material-ui/core/Button';
//import Toolbar from '@material-ui/core/Toolbar';


import './Notification.css';

class Notification extends Component {
   
 
    constructor(){
    super();
    this.handleinvestor_EmailChange = this.handleinvestor_EmailChange.bind(this);
    this.handleMSGChange = this.handleMSGChange.bind(this);
    this.handlereviewer_NameChange = this.handlereviewer_NameChange.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delete=this.delete.bind(this);
    this.state = {
      Notification: [],
      investor_Email: "",
      MSG:"",
      reviewer_Name:""

    }
  }
  
  handleinvestor_EmailChange(e){
      this.setState({investor_Email: e.target.value})
  }
  
  handleMSGChange(e){
    this.setState({MSG: e.target.value})
}

handlereviewer_NameChange(e){
    this.setState({reviewer_Name: e.target.value})
}

// login = () => {
//   this.props.login();
// };

// logout = () => {
//   this.props.logout();
// };


delete(id){
    return fetch('/api/Notification/'+id, {
      method: 'DELETE',
     // body: JSON.stringify(databody),
      headers: {
          'Content-Type': 'application/json'
      },
  })
  .then(res => res.json())
  .then(data => console.log(data));
  }



handleSubmit(e){
    e.preventDefault();

    let databody = {
        "investor_Email":this.state.investor_Email,
        "MSG": this.state.MSG,
        "reviewer_Name": this.state.reviewer_Name,
    }

    return fetch('/api/Notification/', {
        method:'POST',
        body: JSON.stringify(databody),
        headers:{
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
   
    //if (this.props.isLoggedIn) {
     return (
      <div >
        <header className = "App-header">
        <h2>Notifications</h2>
        
        <form onSubmit={this.handleSubmit}>
                <label>
                investor_Email<br></br>
                    <input type="text" name="investor_Email" value={this.investor_Email} onChange={this.handleinvestor_EmailChange}/>
                </label><br></br>
                <label>
                MSG <br></br>
                    <input type="text" name="MSG" value={this.MSG} onChange={this.handleMSGChange}/>
                </label><br></br>
                <label>
                reviewer_Name<br></br>
                    <input type="text" name="reviewer_Name" value={this.reviewer_Name} onChange={this.handlereviewer_NameChange}/>
                </label><br></br>
                <input type="submit" value="Add to DB" />
            </form> 
       {
        <ul>
        {this.state.Notification.map(Notification =>
    <li key = {Notification._id}>Notification is:"<strong>{Notification.MSG}</strong>" &nbsp; <br></br>The Email is: "<strong>{Notification.investor_Email}</strong>" &nbsp; <br></br>The Reviewer is: "<strong>{Notification.reviewer_Name}</strong>" &nbsp; <button onClick= {() => {this.delete(Notification._id)}}> Delete </button> </li>)}  
        </ul>
       }
         </header>
      </div>
      
      
    );

   
  }
//   return (
//     <Router>
//     <div>
//       <h1> Please login to view Notifications </h1>
//       <Toolbar>
//     <Link to={'/Login'} > <Button color="inherit"  onClick={this.login}>Login</Button> </Link> 
//       <Button color="inherit">Register</Button>
//         </Toolbar>
//          <Switch>
//       <Route exact path='/Login' component={Login} />
//          </Switch>
//     </div>
//     </Router>
// )



//}
}
// Notification.propTypes = {
// 	login: PropTypes.func.isRequired,
// 	logout: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
// 	Notification: state.Notification.Notification,
// 	isLoggedIn: state.auth.isLoggedIn,
// 	loggedUser: state.auth.loggedUser,
// });

// export default connect(mapStateToProps,{login, logout })(Notification);
export default Notification;