import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Contex';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './ImageCarousel.css';

export default function ImageCarousel() {
  const { mainData } = useContext(Context);
  const [mainData2, setMainData] = useState([]);
  const [black, setBlack] = useState(true);

  useEffect(() => {
    if (mainData) {
      setMainData(mainData[0].carousel);
      setTimeout(() => {
        setBlack(false);
      }, 800);
    }
  }, [mainData]);


  return (
    <div className={`imageCarousel ${black ? 'imageCarousel-opacity' : ''}`}>

      <Carousel interval={4000} fade slide indicators={false} controls={false} >
        {mainData2.map((item, index) => (
          <Carousel.Item key={index}>
            <div key={index} className="image-carousel__picture">
              <img src={item} className="d-block w-100 image-carousel__img" alt={`Slide ${index}`} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <a className='imageCarousel-link' target="_blank" rel="noreferrer" href="https://www.instagram.com/legenda_parfum/">
        Переглянути наш Instagram
      </a>

    </div>
  );
}
