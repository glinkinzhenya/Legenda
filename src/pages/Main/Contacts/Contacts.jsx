import React from 'react';
import './Contacts.css';
// import News from '../News/News';
import PaymentAndDelivery from '../PaymentAndDelivery/PaymentAndDelivery';
import SectionCallBack from '../SectionCallBack/SectionCallBack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram, faViber, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Contacts() {
  return (
    <>
      <div className='contacts'>
        <div className='contacts-container container'>
          <h1 className='contacts__title'>КОНТАКТИ</h1>

          <div className='contacts-box'>
            <div className='contacts-box__text'>
              <a className='contacts-box__address' href="https://goo.gl/maps/RLhTv4Rwb4UdhpxBA" target="_blank" rel="noreferrer">м. Запоріжжя, бульвар Шевченка, 16</a>
              <a className='contacts-box__telephone' href="tel:+380631882116">
                <FontAwesomeIcon icon={faPhone} className='contacts-box__item-image' />
                063 188 21 16</a>

              <div className='footer-right__social'>
                <a className='contacts-box__social-link' href='https://www.instagram.com/legenda_parfum/' target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className='contacts-box__item-icon' />
                </a>

                {/* <a className='contacts-box__social-link' href='https://www.instagram.com/work.vik' target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faSquareFacebook} className='contacts-box__item-icon' />
                </a> */}

                {/* <a className='contacts-box__social-link' href='https://www.instagram.com/work.vik' target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faViber} className='contacts-box__item-icon' />
                </a> */}

                <a className='contacts-box__social-link' href='https://t.me/legenda_parfum' target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTelegram} className='contacts-box__item-icon' />
                </a>
              </div>
            </div>

            <div className='contacts-box__map'>
              {/* eslint-disable-next-line */}
              <iframe className='contacts-box__map-iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.2783654998957!2d35.11041171563884!3d47.848455479201384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc672a5b820de7%3A0x39c58247c6c3e662!2z0LHRg9C7LiDQqNC10LLRh9C10L3QutC-LCAxNiwg0JfQsNC_0L7RgNC-0LbRjNC1LCDQl9Cw0L_QvtGA0L7QttGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgNjkwMDA!5e1!3m2!1sru!2sde!4v1688814408520!5m2!1sru!2sde" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>

        </div>
      </div>
      {/* <News /> */}
      <PaymentAndDelivery />
      <SectionCallBack />
    </>
  );
}
