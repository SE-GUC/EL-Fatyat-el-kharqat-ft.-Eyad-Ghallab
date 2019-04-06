import React, { Component } from 'react';
import './App.css';
import SPC from './components/SPC/SPC';
import Investor from './components/Investor/Investor';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <SPC/>
     <Investor/>
      </div>
    );
  }
}

export default App;
