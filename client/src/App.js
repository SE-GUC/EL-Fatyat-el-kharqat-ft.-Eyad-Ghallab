import React, { Component } from 'react';


import './App.css';



import './App.css';

import Notification from './components/Notification/Notification';
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
       
        <Notification />
        <Contract/>
        <Reviewer /> 
        <Comment/>
        <Investor/>
        <SSC/>
        <Lawyer />
        <ExternalEntities/>
        <Payment/>      
        <SPC/>
        </header>

      </div>
    );
  }
}

export default App;

