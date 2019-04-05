import React, { Component } from 'react';
import './App.css';
import '../Header/Header.css';
import Footer from '../Footer/Footer';
import Homepage from '../Homepage/Homepage';
import Cozy from '../Cozy/Cozy';
import Congrats from '../Congrats/Congrats';
import { Link, Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className='Home'>
        <Header />
        <Route path='/congrats' component={Congrats} />
        <Route path='/cozy' component={Cozy} />
        <Route exact path='/' component={Homepage} />
        <Footer />
      </div>
    );
  }
}

export default App;
