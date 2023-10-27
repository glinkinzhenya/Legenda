import React, { useEffect, useState } from 'react';
import './News.css';

export default function News() {

  const news1 = [
    {
      // title: 'НОВИНКА',
      // description: 'ТУТ ВИ ЗНАЙДЕТЕ НАЙСВІЖІШІ АРОМАТИ',
      img: 'https://aromas.ru/pictures/carousel/67052.jpg',
    },
    // {
    //   // title: 'АРОМАТ МІСЯЦЯ',
    //   // description: 'ТУТ ВИ ЗНАЙДЕТЕ АРОМАТ МІСЯЦЯ ЗА ВЕРСІЄЮ LEGENDA PARFUME',
    //   img: 'https://images.prom.ua/1948357353_w640_h640_chernaya-pyatnitsa-na.jpg',
    // },
  ];

  const news2 = [
    {
      // title: 'НОВИvfvfvfНКА',
      // description: 'ТУТfvfvfvf ВИ ЗНАЙДЕТЕ НАЙСВІЖІШІ АРОМАТИ',
      img: 'https://cdn.pokupon.ua/uploaded/merchant_page_images/277662/data/main720x340/%D0%BF%D0%B0%D1%80%D1%84%D1%8E%D0%BC2.jpg',
    },
    // {
    //   // title: 'АРОМАТ МІСЯЦЯ',
    //   // description: 'ТУvfvfvfvТ ВИ ЗНАЙДЕТЕ АРОМАТ МІСЯЦЯ ЗА ВЕРСІЄЮ LEGENDA PARFUME',
    //   img: 'https://images.prom.ua/2880155221_w600_h300_2880155221.jpg',
    // },
  ];

  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeOut2, setFadeOut2] = useState(false);

  // useEffect(() => {
  //   const interval1 = setInterval(() => {
  //     setFadeOut(true);
  //     setTimeout(() => {
  //       setIndex(prevIndex => (prevIndex + 1) % news1.length);
  //       setFadeOut(false);
  //     }, 500);
  //   }, 5000);

  //   const timeout = setTimeout(() => {
  //     const interval2 = setInterval(() => {
  //       setFadeOut2(true);
  //       setTimeout(() => {
  //         setIndex2(prevIndex => (prevIndex + 1) % news2.length);
  //         setFadeOut2(false);
  //       }, 500);
  //     }, 5000);

  //     return () => {
  //       clearInterval(interval2);
  //     };
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval1);
  //     clearTimeout(timeout);
  //   };
  // }, []);

  // const { title, description, img } = news1[index];
  const { img } = news1[index];
  // const { title: title2, description: description2, img: img2 } = news2[index2];
  const { img: img2 } = news2[index2];

  const [isBasketWindowActive, setIsBasketWindowActive] = useState(false);
  const [windowImg, setWindowImg] = useState('');

  // const handleWindowClick = (img) => {
  //   setWindowImg(img)
  //   setIsBasketWindowActive(!isBasketWindowActive);
  //   document.body.classList.toggle('body-fixed');

  // }

  return (
    <div className='news'>
      <div className={`basket-opacity ${isBasketWindowActive ? 'basket-opacity__active' : ''}`}></div>
      <div className='news-box'>

        <div className={`news-box__item ${fadeOut ? 'fade-out' : ''}`}>
          <div className='news-box__item-picture'>
            <img className='news-box__item-image' src='./img/news1.jpg' alt='news' />
          </div>
          {/* <div className='news-box__item-text'>
            <div className='news-box__item-title'>{title}</div>
            <div className='news-box__item-description'>{description}</div>
            <div onClick={() => handleWindowClick(img)} className='news-box__item-link'>Детальніше</div>
          </div> */}
        </div>
        <div className={`news-box__item ${fadeOut2 ? 'fade-out' : ''}`}>
          <div className='news-box__item-picture'>
            <img className='news-box__item-image' src='./img/news2.jpg' alt='news' />
          </div>
          {/* <div className='news-box__item-text'>
            <div className='news-box__item-title'>{title2}</div>
            <div className='news-box__item-description'>{description2}</div>
            <a className='news-box__item-link' href=''>Детальніше</a>
          </div> */}
        </div>
      </div>

      {isBasketWindowActive && <div className='news-window'>
        <img className='basket-window__close' src="/img/close-window.svg" alt="" />
        <img className='news-window__img' src={windowImg} alt="" />
      </div>}

    </div>
  );
}
