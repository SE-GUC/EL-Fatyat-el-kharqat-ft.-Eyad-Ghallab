import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Investor from './components/Investor/Investor';

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
     <Investor/>
      </div>
    );
  }
}

export default App;
