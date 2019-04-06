import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Create from './components/create.component';

import SSC from './components/SSC/SSC';
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

