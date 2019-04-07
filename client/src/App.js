import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import SPC from './components/SPC/SPC';
import Investor from './components/Investor/Investor';
import Admin from './components/Admin/Admin';

class App extends Component {
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

      
        <SPC/>
     <Investor/>
      </div>
    );
  }
  
}

export default App;
