import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const ShowcaseSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="slide1.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="slide2.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="slide3.jpg" alt="Slide 3" />
      </div>
    </Slider>
  );
};

export default ShowcaseSlider;