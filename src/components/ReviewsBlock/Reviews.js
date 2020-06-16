import React, { Component } from 'react';
import Slider from 'react-slick';

export default class Reviews extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
    };
    return (
      <div id="reviews" className="container">
        <style>{cssstyle}</style>
        <h2>Отзывы</h2>
        <Slider {...settings}>
          <img
            alt="discriptions"
            src="https://eservice.od.ua/wp-content/uploads/2017/03/8-1-576x1024.jpg"
          />
          <img
            alt="discriptions"
            src="https://eservice.od.ua/wp-content/uploads/2017/03/8-1-576x1024.jpg"
          />
          <img
            alt="discriptions"
            src="https://eservice.od.ua/wp-content/uploads/2017/03/8-1-576x1024.jpg"
          />
          <img
            alt="discriptions"
            src="https://eservice.od.ua/wp-content/uploads/2017/03/8-1-576x1024.jpg"
          />
          <img
            alt="discriptions"
            src="https://eservice.od.ua/wp-content/uploads/2017/03/8-1-576x1024.jpg"
          />
          <img
            alt="discriptions"
            src="https://eservice.od.ua/wp-content/uploads/2017/03/8-1-576x1024.jpg"
          />
          <img
            alt="discriptions"
            src="https://eservice.od.ua/wp-content/uploads/2017/03/8-1-576x1024.jpg"
          />
        </Slider>
      </div>
    );
  }
}

const cssstyle = `
  .container {
    margin: 0 auto;
    padding: 0px 40px 40px 40px;
    width: 1000px;
  }
  .slick-next:before, .slick-prev:before {
      color: #000;
  }
  `;
