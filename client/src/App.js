import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
import SSC from './components/SSC/SSC';


import './App.css';

import Lawyer from './components/Lawyer/Lawyer';

import ExternalEntities from './components/ExternalEntities/ExternalEntities';

import Contract from './components/Contract/Contract';

import Payment from './components/Payment/Payment';

import SPC from './components/SPC/SPC';
import Investor from './components/Investor/Investor';



class App extends Component {

  render() {
   return (
      <div className="App">

        <Contract/>
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


