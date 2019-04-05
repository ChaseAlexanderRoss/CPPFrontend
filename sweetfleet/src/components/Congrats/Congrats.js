import React, { Component } from 'react';
import CongratsImage from '../../Images/Congrats.jpg';
import GridImage from '../../Images/Grid.png';
import './Congrats.css';

class Congrats extends Component {
  render() {
    return (
      <div className='congratsBox-container'>
        <div className='congrats-image-container'>
          <div>
            <img
              className='congrats-image-flex'
              src={CongratsImage}
              alt='sweetfleet'
            />
          </div>
          <div className='congrats-text'>
            <h1>Congrats Box</h1>
            <h3>$100.00</h3>
            <div>
              <p className='congrats-p'>
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
        <div className='congrats-buttons'>
          <a className='congrats-link-build' href='./cart'>
            OR BUILD YOUR OWN
          </a>
        </div>
        <br />
        <h6 className='or'>OR</h6>
        <div className='congrats-buttons'>
          <a className='congrats-link-build' href='./cart'>
            CUSTOMIZE BOX
          </a>
        </div>
      </div>
    );
  }
}

export default Congrats;
