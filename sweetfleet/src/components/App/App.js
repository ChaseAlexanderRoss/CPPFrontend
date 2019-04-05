import React, { Component } from 'react';
import './App.css';
import '../Header/Header.css';
import Footer from '../Footer/Footer';

// import '../Homepage/Homepage.css';
// import Homepage from '../Homepage/Homepage';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className='Home'>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
