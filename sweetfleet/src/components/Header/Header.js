import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Logo from '../../Images/Logo.png';

class Header extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>
            <div>
              <ul>
                <Link className='header-link' to='/login'>
                  SIGN IN
                </Link>

                <Link className='header-link' to='/cart'>
                  <img
                    id='u490_img'
                    class='img '
                    src='https://d2i72ju5buk5xz.cloudfront.net/gsc/2TLY0R/70/a9/c5/70a9c556b10540a5bab2cd3936f3ea8b/images/home/u490.png?token=3d98cf7abac9233b1cd8cce24228d361'
                    alt='cart'
                    tabindex='0'
                  />
                </Link>

                <Link className='header-link' to='/boxes'>
                  MY BOXES
                </Link>

                <Link className='header-link' to='/help'>
                  HOW IT WORKS
                </Link>

                <Link className='header-link' to='/build'>
                  BUILD
                </Link>

                <Link className='header-link' to='/shop'>
                  SHOP
                </Link>
                <div className='app-logo'>
                  <img src={Logo} alt='sweetfleet' />
                </div>
              </ul>
            </div>
          </header>
        </div>
      </Router>
    );
  }
}

export default Header;
