import React, { Component } from 'react';
import Cozy from '../../Images/Cozy.jpg';
import Congrats from '../../Images/Congrats.jpg';
import './Shop.css';

class Shop extends Component {
  render() {
    return (
      <div>
        <h4 className='cozy-header'>CHOOSE A PREMADE BOX</h4>
        <div className='cozy-container'>
          <div>
            <img className='cozy-image' src={Cozy} alt='sweetfleet' />
            <h3>
              <a href='#' className='cozy-link'>
                COZY
              </a>
            </h3>
          </div>
          <div>
            <img className='congrats-image' src={Congrats} alt='sweetfleet' />
            <h3>
              <a className='congrats-link' href='#'>
                CONGRATS
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
