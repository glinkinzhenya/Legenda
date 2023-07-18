import React from 'react';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import './Main.css';
import Categories from './Categories/Categories';
import SectionPicture from './SectionPicture/SectionPicture';
import HitSale from './HitSale/HitSale';
import News from './News/News';
import SectionCallBack from './SectionCallBack/SectionCallBack';
import PaymentAndDelivery from './PaymentAndDelivery/PaymentAndDelivery';

export default function Main() {
  return (
    <main>
      <ImageCarousel />
      <SectionPicture />
      <Categories />
      <HitSale popular={true}/>
      <News />
      <PaymentAndDelivery />
      <SectionCallBack />
    </main>
  );
}
