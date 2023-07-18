import React from 'react';
import ProductsMap from '../../../../../../../../../components/ProductsMap/ProductsMap';
import News from '../../../../../../../News/News';
import SectionCallBack from '../../../../../../../SectionCallBack/SectionCallBack';
import BanerProduct from '../../../../../../BanerProduct/BanerProduct';
import PaymentAndDelivery from '../../../../../../../PaymentAndDelivery/PaymentAndDelivery';
import HitSale from '../../../../../../../HitSale/HitSale';

export default function Oils() {
  return (
    <>
      <BanerProduct />
      <div className='productsPage'>

        <div className='productsPage-container container'>
          <h2 className='productsPage-title'>МАСЛА</h2>

          <ProductsMap category={'масла'} />

        </div>
      </div>
      <HitSale category={'масла'} popular={true} />
      <News />
      <PaymentAndDelivery />
      <SectionCallBack />
    </>
  );
}



