import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <section>
          <div class='footerContainer'>
            <div class='aboutfleet'>
              <h4>About Sweet Fleet</h4>
              <p className='paragraph-footer'>
                Sweet fleet provides beautiful, customized packages <br />
                full of cozy memorable presents to bring friends
                <br />
                together across distances.
              </p>
            </div>
            <div class='connect'>
              <h4>Connect</h4>
              <ul>
                <li>
                  <a
                    target='_blank'
                    title='follow me on instagram'
                    href='https://www.instagram.com/PLACEHOLDER'>
                    <img
                      alt='follow me on instagram'
                      src='https://c866088.ssl.cf3.rackcdn.com/assets/instagram30x30.png'
                      border='0'
                    />
                    {/* <span style="color:white">Instagram</span> */}
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    title='follow me on pinterest'
                    href='https://www.pinterest.com/PLACEHOLDER'>
                    <img
                      alt='follow me on pinterest'
                      src='https://c866088.ssl.cf3.rackcdn.com/assets/pinterest30x30.png'
                      border='0'
                    />
                  </a>
                  Pintrest
                </li>
              </ul>
            </div>
            <div>
              <h4>Stay in touch</h4>
              <ul>
                <li>Contact Us</li>
                <li>Subscribe to mailing list</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
