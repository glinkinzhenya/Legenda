import React from 'react';
import News from '../../../../News/News';
import SectionCallBack from '../../../../SectionCallBack/SectionCallBack';
import ProductsMap from '../../../../../../components/ProductsMap/ProductsMap';
import PaymentAndDelivery from '../../../../PaymentAndDelivery/PaymentAndDelivery';
import HitSale from '../../../../HitSale/HitSale';
import BanerProduct from '../../../../../../components/BanerProduct/BanerProduct';

export default function Perfumery() {
  return (
    <>
      <BanerProduct />
      <div className='productsPage'>

        <div className='productsPage-container container'>
          <h2 className='productsPage-title'>РОЗПИВ ПАРФУМЕРІЯ</h2>

          <ProductsMap category={'perfumery'} />

        </div>
      </div>
      <HitSale category={'perfumery'} popular={true} />
      <News />
      <PaymentAndDelivery />
      <SectionCallBack />
    </>
  );
}



