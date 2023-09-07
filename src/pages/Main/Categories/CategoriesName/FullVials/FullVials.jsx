import React from 'react';
import News from '../../../News/News';
import SectionCallBack from '../../../SectionCallBack/SectionCallBack';
import ProductsMap from '../../../../../components/ProductsMap/ProductsMap';

import PaymentAndDelivery from '../../../PaymentAndDelivery/PaymentAndDelivery';
import HitSale from '../../../HitSale/HitSale';
// import HitSale from './HitSale/HitSale';
import '../ProductsPage.css';
import BanerProduct from '../../../../../components/BanerProduct/BanerProduct';

export default function FullVials() {
  return (
    <>
      <BanerProduct />
      <div className='productsPage'>

        <div className='productsPage-container container'>
          <h2 className='productsPage-title'>ПОВНІ ФЛАКОНИ</h2>

          <ProductsMap category={'full-vials'} />

        </div>
      </div>
      <HitSale category={'full-vials'} popular={true} />
      <News />
      <PaymentAndDelivery />
      <SectionCallBack />
    </>
  );
}



