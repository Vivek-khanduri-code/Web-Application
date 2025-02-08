import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const ShowcaseSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Animation speed in milliseconds
    slidesToShow: 2, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 30, // Time between slides in milliseconds (3 seconds)
    responsive: [
      {
        breakpoint: 768, // Adjust settings for screens smaller than 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Adjust settings for screens smaller than 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://img.freepik.com/free-psd/gradient-fashion-design-template_23-2149729225.jpg?t=st=1738929617~exp=1738933217~hmac=ab6531785cadeb589aca3aa70e42b930c91f25a3c3ca2599a2ecb9a348d6eb10&w=1480"
          alt="Slide 1"
        />
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-psd/business-promotion-creative-facebook-cover-template_106176-340.jpg?t=st=1738929653~exp=1738933253~hmac=afa1e91a32be2d32351716e137fb7cad9a2cb5270ccceacd092f80e5e29933ca&w=996"
          alt="Slide 2"
        />
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-photo/modern-technology-trending-innovation-concept_53876-21317.jpg?t=st=1738929692~exp=1738933292~hmac=82fb8c454c13679b96129da283aaa24801669c6113f79c8370597a4743b03bc3&w=1380"
          alt="Slide 3"
        />
      </div>
    </Slider>
  );
};

export default ShowcaseSlider;