import React from 'react';
import './Rospiv.css';
import News from '../../../News/News';
import SectionCallBack from '../../../SectionCallBack/SectionCallBack';
import BanerProduct from '../../BanerProduct/BanerProduct';
import PaymentAndDelivery from '../../../PaymentAndDelivery/PaymentAndDelivery';
import HitSale from '../../../HitSale/HitSale';

export default function Rospiv() {
  return (
    <>
      <BanerProduct />
      <div className='rospiv'>

        <div className='rospiv-container container'>
          <h2 className='rospiv__title'>РОЗПИВ</h2>

          <div className='rospiv-box'>

            <a className='rospiv-box__item' href="/perfumery">
              <div className='rospiv-box__item-picture'>
                <img className='rospiv-box__item-image' src="./img/perfumery.png" alt="legenda-parfum" />
              </div>

              <div className='rospiv-box__item-text'>ПАРФУМЕРІЯ</div>
            </a>

            <a className='rospiv-box__item' href="/rospiv-makeup">
              <div className='rospiv-box__item-picture'>
                <img className='rospiv-box__item-image' src="./img/rospiv-makeup.png" alt="legenda-parfum" />
              </div>
              <div className='rospiv-box__item-bg'>
                <div className='rospiv-box__item-text'>КОСМЕТИКА</div>
              </div>
            </a>

          </div>
        </div>
      </div>
      <HitSale popular={true} />
      <News />
      <PaymentAndDelivery />
      <SectionCallBack />
    </>
  );
}
