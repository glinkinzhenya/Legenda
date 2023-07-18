import React from 'react';
import News from '../../../../../News/News';
import SectionCallBack from '../../../../../SectionCallBack/SectionCallBack';
import ProductsMap from '../../../../../../../components/ProductsMap/ProductsMap';
import BanerProduct from '../../../../BanerProduct/BanerProduct';
import PaymentAndDelivery from '../../../../../PaymentAndDelivery/PaymentAndDelivery';
import HitSale from '../../../../../HitSale/HitSale';

export default function RospivPerfumery() {
  return (
    <>
      <BanerProduct />
      <div className='productsPage'>

        <div className='productsPage-container container'>
          <h2 className='productsPage-title'>РОЗПИВ ПАРФУМЕРІЯ</h2>

          <ProductsMap category={'парфумерія'} />

        </div>
      </div>
      <HitSale category={'парфумерія'} popular={true} />
      <News />
      <PaymentAndDelivery />
      <SectionCallBack />
    </>
  );
}



