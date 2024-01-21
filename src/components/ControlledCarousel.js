import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import c1 from '../assets/caurosals/c1.png';
import c2 from '../assets/caurosals/c2.png';
import c3 from '../assets/caurosals/c3.png';
import 'bootstrap/dist/css/bootstrap.min.css';


function ControlledCarousel() {
  return (
    <Carousel className='w-[100%]'>
      <Carousel.Item>
        <img src={c1} alt="First slide" />
       
      </Carousel.Item>
      <Carousel.Item>
        <img src={c2} alt="Second slide" />
       
      </Carousel.Item>
      <Carousel.Item>
        <img src={c3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
