import React, { Component } from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';
//import Investor from './components/Investor/Investor';
import Admin  from './components/Admin/Admin';

class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//         investors: []
//     }
// }
// componentDidMount(){
//     fetch('/api/investors/')
//     .then(res => res.json())
//     .then(investors => this.setState({investors: investors}, console.log('theinvestors',investors)));
// }
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img scr={logo}className="App-logo" alt="logo"/>
      <p>
        Edit <code> src/App.js</code> and save to reload.
      </p>
      <a 
      className="App-link"
      href ="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer">
      learn React

      </a>


      </header>
   
     <Admin/>
      </div>
    );
  }
  
}

export default App;
