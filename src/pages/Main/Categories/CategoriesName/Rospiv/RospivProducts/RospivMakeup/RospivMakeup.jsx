import React from 'react';
import News from '../../../../../News/News';
import SectionCallBack from '../../../../../SectionCallBack/SectionCallBack';
import BanerProduct from '../../../../BanerProduct/BanerProduct';
import PaymentAndDelivery from '../../../../../PaymentAndDelivery/PaymentAndDelivery';
import HitSale from '../../../../../HitSale/HitSale';

export default function RospivMakeup() {
  return (
    <>
      <BanerProduct />
      <div className='rospiv'>

        <div className='rospiv-container container'>
          <h2 className='rospiv__title'>РОЗПИВ КОСМЕТИКА</h2>

          <div className='rospiv-box'>

            <a className='rospiv-box__item' href="/shower-gels">
              <div className='rospiv-box__item-picture'>
                <img className='rospiv-box__item-image' src="./img/Categories.JPG" alt="legenda-parfum" />
              </div>
              <div className='rospiv-box__item-bg'>
                <div className='rospiv-box__item-text'>ГЕЛІ ДЛЯ ДУША</div>
              </div>
            </a>

            <a className='rospiv-box__item' href="/oils">
              <div className='rospiv-box__item-picture'>
                <img className='rospiv-box__item-image' src="./img/Categories.JPG" alt="legenda-parfum" />
              </div>
              <div className='rospiv-box__item-bg'>
                <div className='rospiv-box__item-text'>МАСЛА</div>
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
