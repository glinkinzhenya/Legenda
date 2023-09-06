import React from 'react';
import ProductsMap from '../../../../../../components/ProductsMap/ProductsMap';
import News from '../../../../News/News';
import SectionCallBack from '../../../../SectionCallBack/SectionCallBack';
import BanerProduct from '../../../BanerProduct/BanerProduct';
import PaymentAndDelivery from '../../../../PaymentAndDelivery/PaymentAndDelivery';
import HitSale from '../../../../HitSale/HitSale';

export default function ShowerGels() {
  return (
    <>
      <BanerProduct />
      <div className='productsPage'>

        <div className='productsPage-container container'>
          <h2 className='productsPage-title'>ГЕЛІ ДЛЯ ДУША</h2>

          <ProductsMap category={'гелі для душу'} />

        </div>
      </div>
      <HitSale category={'гелі для душу'} popular={true} />
      <News />
      <PaymentAndDelivery />
      <SectionCallBack />
    </>
  );
}



