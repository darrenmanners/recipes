import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Recipe = (props) => {
  return (
    <div>
      Recipe Section
    </div>

  )

}


class App extends Component {
  render() {
    return (
      <div className="App">        
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Grans Grams</h2>
        </div>
        <p className="App-intro">
          <Recipe />         
        </p>
      </div>
    );
  }
}

export default App;
