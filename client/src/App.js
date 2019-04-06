import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
import SSC from './components/SSC/SSC';


import './App.css';

import Lawyer from './components/Lawyer/Lawyer';

import ExternalEntities from './components/ExternalEntities/ExternalEntities';



import Payment from './components/Payment/Payment';

import SPC from './components/SPC/SPC';
import Investor from './components/Investor/Investor';



class App extends Component {

  render() {
   return (
      <div className="App">

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
          </a> */}
        </header>
        <SSC/>
        <Investor/>

        <Lawyer />
      

        <ExternalEntities/>

    <Payment/>

      
        <SPC/>




      </div>
    );
  }
}

export default App;


