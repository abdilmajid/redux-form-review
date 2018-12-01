import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <h2>#20</h2>
        <div>
          <button>Increase</button>
          <button>Decrease</button>
        </div>
      </div>
    );
  }
}




export default App;
