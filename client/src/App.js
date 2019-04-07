import React, { Component } from 'react';
import './App.css';

import logo from './logo.svg';
import SPC from './components/SPC/SPC';
import Investor from './components/Investor/Investor';
import Admin from './components/Admin/Admin';


import SSC from './components/SSC/SSC';
import Reviewer from './components/Reviewer/Reviewer';
import Lawyer from './components/Lawyer/Lawyer';
import ExternalEntities from './components/ExternalEntities/ExternalEntities';
import Contract from './components/Contract/Contract';
import Payment from './components/Payment/Payment';
import SPC from './components/SPC/SPC';
import Investor from './components/Investor/Investor';
import Comment from './components/Comment/Comment';

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
      <Reviewer />
        <Comment/>
        <Investor/>
        <SSC/>

        <Lawyer />
      

        <ExternalEntities/>

        <Payment/>


      
        <SPC/>
        <Admin/>


        <Contract/>



      </header>
   
     

       


      </div>
    );
  }
  
}

export default App;

