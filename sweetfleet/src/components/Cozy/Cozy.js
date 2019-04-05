import React, { Component } from 'react';
import CozyImage from '../../Images/Cozy.jpg';
import GridImage from '../../Images/Grid.png';
import './Cozy.css';

class Cozy extends Component {
  render() {
    return (
      <div className='cozyBox-container'>
        <div className='cozy-image-container'>
          <div>
            <img className='cozy-image-flex' src={CozyImage} alt='sweetfleet' />
          </div>
          <div className='cozy-text'>
            <h1>Cozy Box</h1>
            <h3>$100.00</h3>
            <div>
              <p className='cozy-p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar sic
                tempor. Sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Nam fermentum, nulla luctus
                pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin
                sapien nunc accuan eget.
              </p>
              <h5>Add a personal message:</h5>
              <textarea rows='3' cols='60' />
            </div>
          </div>
        </div>
        <div className='flex-container'>
          <div>
            <img className='grid-image' src={GridImage} alt='sweetfleet' />
          </div>
          <div>
            <img className='grid-image' src={GridImage} alt='sweetfleet' />
          </div>
          <div>
            <img className='grid-image' src={GridImage} alt='sweetfleet' />
          </div>
        </div>
        <div className='cozy-buttons'>
          <a className='cozy-link-build' href='./cart'>
            OR BUILD YOUR OWN
          </a>
        </div>
        <br />
        <h6 className='or'>OR</h6>
        <div className='cozy-buttons'>
          <a className='cozy-link-build' href='./cart'>
            CUSTOMIZE BOX
          </a>
        </div>
      </div>
    );
  }
}

export default Cozy;
