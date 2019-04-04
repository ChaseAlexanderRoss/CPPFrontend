import React, { Component } from 'react';
import './App.css';
import '../Header/Header.css';
import Homepage from '../Homepage/Homepage';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className='Home'>
        <Homepage />
        <Header />
      </div>
    );
  }
}

export default App;
