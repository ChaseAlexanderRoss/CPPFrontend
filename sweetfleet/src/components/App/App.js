import React, { Component } from 'react';
import './App.css';
import '../Header/Header.css';
import '../Homepage/Homepage.css';
import Homepage from '../Homepage/Homepage';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className='Home'>
        <Header />
        <Homepage />
      </div>
    );
  }
}

export default App;
