import React from 'react';
import './HitSale.css';
import ProductsMap from '../../../components/ProductsMap/ProductsMap';

export default function HitSale({ category, popular }) {
  return (
    <div className='hitSale'>
      <div className='hitSale-container container'>

        <h2 className='hitSale__title'>ХІТИ ПРОДАЖ</h2>
        <ProductsMap category={category} popular={popular} />
      </div>
    </div>
  );
}
