import React, { Component } from 'react';
import './App.css';

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

        <Contract/>


        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */
          <Reviewer />
          }
        </header>
        <Comment/>
        <Investor/>
        <SSC/>

        <Lawyer />
      

        <ExternalEntities/>

        <Payment/>

      
        <SPC/>



      </div>
    );
  }
}

export default App;

