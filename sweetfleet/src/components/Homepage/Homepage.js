import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardLink,
  CardText,
  CardImgOverlay,
  Button,
} from 'reactstrap';
import Video from '../../Images/video.png';
import './Homepage.css';
import Shop from '../Shop/Shop';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Card inverse>
          <CardImg
            width='100%'
            src='https://d2i72ju5buk5xz.cloudfront.net/gsc/2TLY0R/70/a9/c5/70a9c556b10540a5bab2cd3936f3ea8b/images/home/u486.png?token=607cbcf2ce8be7abcbb4dc5692d9adc1'
            alt='Card image cap'
          />
          <CardImgOverlay>
            <div className='btns'>
              <CardText className='text-muted'>
                <h3>
                  Beautiful, customized packages <br /> full of cozy, memorable
                  presents
                </h3>
              </CardText>

              <div className='buttons'>
                <a className='link-shop' href='./shop'>
                  SHOP NOW
                </a>
              </div>
              <br />
              <div className='buttons'>
                <a className='link-build' href='./shop'>
                  OR BUILD YOUR OWN
                </a>
              </div>
              <br />
            </div>
          </CardImgOverlay>
        </Card>
        {/* shop component */}
        <div className='shop'>
          <Shop />
        </div>

        <Card inverse>
          <CardImg
            width='100%'
            src='https://d2i72ju5buk5xz.cloudfront.net/gsc/2TLY0R/70/a9/c5/70a9c556b10540a5bab2cd3936f3ea8b/images/home/u578.png?token=5b8020d1e99722e2bb7c299c04c274d7'
            alt='Card image cap'
          />
          <CardImgOverlay>
            <div className='background'>
              <h3 className='background-header'>HOW IT WORKS</h3>
            </div>
          </CardImgOverlay>
        </Card>
        <div className='video'>
          <img className='video-img' src={Video} />
        </div>
      </div>
    );
  }
}

export default Homepage;
