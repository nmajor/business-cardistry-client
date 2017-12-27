import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import CardBuildContainer from '../CardBuildContainer/CardBuildContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardBuildContainer />
      </div>
    );
  }
}

export default App;
