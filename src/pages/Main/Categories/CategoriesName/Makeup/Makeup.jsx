import React from 'react';
import ProductsMap from '../../../../../components/ProductsMap/ProductsMap';
import News from '../../../News/News';
import SectionCallBack from '../../../SectionCallBack/SectionCallBack';
import PaymentAndDelivery from '../../../PaymentAndDelivery/PaymentAndDelivery';
import HitSale from '../../../HitSale/HitSale';
import BanerProduct from '../../../../../components/BanerProduct/BanerProduct';

export default function Makeup() {
  return (
    <>
      <BanerProduct />
      <div className='productsPage'>

        <div className='productsPage-container container'>
          <h2 className='productsPage-title'>КОСМЕТИКА</h2>

          <ProductsMap category={'makeup'} />

        </div>
      </div>
      <HitSale category={'makeup'} popular={true} />
      <News />
      <PaymentAndDelivery />
      <SectionCallBack />
    </>
  );
}



