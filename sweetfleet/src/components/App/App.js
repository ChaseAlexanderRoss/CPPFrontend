import React, { Component } from 'react';
import './App.css';
import '../Header/Header.css';
import Footer from '../Footer/Footer';
import Homepage from '../Homepage/Homepage';
import { Link, Route, Switch } from 'react-router-dom';

// import '../Homepage/Homepage.css';
// import Homepage from '../Homepage/Homepage';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className='Home'>
        <Header />
        <Route exact path='/' component={Homepage} />
        <Footer />
      </div>
    );
  }
}

export default App;
