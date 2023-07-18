import React from 'react';
// import CallBack from '../../components/CallBack/CallBack';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram, faViber, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
// import { faCode, faHighlighter, faMobilePhone } from '@fortawesome/free-solid-svg-icons';
// import { faKorvue, faYoutube, faFacebook, faFacebookF, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { useLocation } from 'react-router-dom';
// import { Link } from 'react-scroll';

export default function Footer() {
  const location = useLocation();
  return (
    <footer id="contacts" className='footer'>
      <div className='footer-primary container'>

        <div className='footer-catalog'>
          <div className='footer-info__title'>Основне</div>
          <a className='footer-catalog__item' href="/full-vials">Повні флакони</a>
          <a className='footer-catalog__item' href="/rospiv">Розпив</a>
          <a className='footer-catalog__item' href="/miniatures">Мініатюри</a>
          <a className='footer-catalog__item' href="/makeup">Косметика</a>
          <a className='footer-catalog__item' href="/news2023">Новинки 2023</a>
        </div>

        <div className='footer-info'>
          <div className='footer-info__title'>Інфо</div>
          <a className='footer-info__item' href="/">Головна</a>
          <a className='footer-info__item' href="/about-us">Про нас</a>

          {/* <a className='footer-info__item' href="/products">Оплата і доставка</a> */}
          {/* 
          {location.pathname === '/' || location.pathname === '/full-vials' || location.pathname === '/rospiv' || location.pathname === '/miniatures'
          || location.pathname === '/makeup' || location.pathname === '/news2023' || location.pathname === '/perfumery'
          || location.pathname === '/rospiv-makeup' || location.pathname === '/shower-gels' || location.pathname === '/oils' ? (
          <Link to="paymentAndDelivery" className='footer-info__item' smooth={true} duration={100} offset={100}>Оплата і доставка</Link>
        ) : (
          <a className={`footer-info__item ${location.pathname === '/payment-and-delivery' ? 'action' : ''}`} href="/payment-and-delivery">Оплата і доставка</a>
        )} */}
          <a className={`footer-info__item ${location.pathname === '/payment-and-delivery' ? 'action' : ''}`} href="/payment-and-delivery">Оплата і доставка</a>
        </div>

        <div className='footer-oferta'>
          <a className='footer-oferta__link' href="./files/public-offer-agreement.pdf" target="_blank" rel="noreferrer">Оферта</a>
        </div>

        <div className='footer-right'>
          <a className='footer-right__title' href="/contacts">Контакти</a>
          <div className='footer-right__item'>
            <a className='footer-right__item-address' href="https://goo.gl/maps/RLhTv4Rwb4UdhpxBA" target="_blank" rel="noreferrer">м. Запоріжжя, бульвар Шевченка, 16</a>
            <a className='footer-right__item-telephone' href="tel:+380676120366">
              <FontAwesomeIcon icon={faPhone} className='footer-right__item-image' />
              067 612 03 66</a>

            {/* <a className='footer-right__item-telephone' href="tel:+380676120366">
              <FontAwesomeIcon icon={faPhone} shake className='footer-right__item-image' />
              067 612 03 66</a> */}

            {/* <a className='footer-right__item-telephone' href="tel:+380676120366">
              <FontAwesomeIcon icon={faSquareInstagram} className='footer-right__item-image' />
              <FontAwesomeIcon icon={faFacebookF} className='footer-right__item-image' />
              <FontAwesomeIcon icon={faFacebook} className='footer-right__item-image' />
              <FontAwesomeIcon icon={faYoutube} className='footer-right__item-image' />
              <FontAwesomeIcon icon={faCode} className='footer-right__item-image' />
              <FontAwesomeIcon icon={faHighlighter} className='footer-right__item-image' />
              <FontAwesomeIcon icon={faMobilePhone} className='footer-right__item-image' />
              <FontAwesomeIcon icon={faKorvue} className='footer-right__item-image' />
            </a> */}
          </div>

          <div className='footer-right__social'>
            <a className='footer-right__social-link' href='https://www.instagram.com/legenda_parfum/' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} className='footer-right__item-icon' />
            </a>

            {/* <a className='footer-right__social-link' href='https://www.instagram.com/work.vik' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faSquareFacebook} className='footer-right__item-icon' />
            </a> */}

            {/* <a className='footer-right__social-link' href='https://www.instagram.com/work.vik' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faViber} className='footer-right__item-icon' />
            </a> */}

            <a className='footer-right__social-link' href='https://t.me/legenda_parfum' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTelegram} className='footer-right__item-icon' />
            </a>
          </div>

        </div>

      </div>

      <div className='footer-secondary'>

        <div className='footer-secondary__telephone'>
          {/* <CallBack
            buttonText="Ми Вам зателефонуємо"
            dialogTitle="Введіть Ваш номер телефону та коментар"
            dialogText="Ми зателефонуємо якнайшвидше та відповемо на всі ваші питання"
            confirmText="Надіслати" cancelText="Відміна" from="звідки - 'Головна сторінка'"
            fontSize="12px"
          /> */}
        </div>

        <div className='footer-secondary__info'>© 2023 Legenda Parfume</div>
      </div>
    </footer>
  );
}
