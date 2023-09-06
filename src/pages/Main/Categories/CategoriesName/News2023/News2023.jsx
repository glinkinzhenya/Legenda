import React from 'react';
import ProductsMap from '../../../../../components/ProductsMap/ProductsMap';
import News from '../../../News/News';
import SectionCallBack from '../../../SectionCallBack/SectionCallBack';
import PaymentAndDelivery from '../../../PaymentAndDelivery/PaymentAndDelivery';
import HitSale from '../../../HitSale/HitSale';
import BanerProduct from '../../BanerProduct/BanerProduct';


export default function News2023() {
  return (
    <>
      <BanerProduct />

      <div className='productsPage'>
        <h2 className='productsPage-title'>НОВИНКИ 2023</h2>

        <div className='productsPage-container container'>

          <ProductsMap category={'новинки'} />

        </div>
      </div>
      <HitSale category={'новинки'} popular={true} />
      <News />
      <PaymentAndDelivery />
      <SectionCallBack />
    </>
  );
}



