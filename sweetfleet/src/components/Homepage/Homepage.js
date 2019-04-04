import React, { Component } from 'react';
import { Card, CardImg, CardLink, CardText, CardBody } from 'reactstrap';
import Birthday from '../../Images/Birthday.jpg';
import Cozy from '../../Images/Cozy.jpg';
import Congrats from '../../Images/Congrats.jpg';
import Flower from '../../Images/Flower.png';

class Homepage extends Component {
  render() {
    return (
      <div className='container'>
        <Card>
          <CardImg className='birthday' src={Birthday} alt='Card image cap' />
          <CardBody>
            <CardText>
              Beautiful, customized packages full of cozy, memorable presents
            </CardText>
            <CardLink className='link' href='./shop'>
              SHOP NOW
            </CardLink>
            <br />
            <CardLink href='/build'>BUILD YOUR OWN</CardLink>
          </CardBody>
        </Card>
        <div>
          <Card className='box'>
            <CardBody>
              <CardImg className='premade' src={Cozy} alt='Card image cap' />
            </CardBody>
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <CardLink href='#'>Card Link</CardLink>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className='box'>
            <CardBody>
              <CardImg className='premade' src={Congrats} alt='Congrats' />
            </CardBody>
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <CardLink href='#'>Card Link</CardLink>
              <CardLink href='#'>Another Link</CardLink>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className='box'>
            <CardBody>
              <CardImg className='flower' src={Flower} alt='Flower' />
            </CardBody>
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <CardLink href='#'>Card Link</CardLink>
              <CardLink href='#'>Another Link</CardLink>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Homepage;
