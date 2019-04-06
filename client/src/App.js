import React, { Component } from 'react';


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


