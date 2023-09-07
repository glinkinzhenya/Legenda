import React from 'react';
import './Header.css';
import Basket from '../../components/Basket/Basket';
import { useLocation } from 'react-router-dom';
import Burger from './Burger/Burger';

export default function Header() {
  const location = useLocation();

  return (
    <>
      <div className='header container'>

        <a className='header-logo__picture' href="/">
          <img className='header-logo__image' src="/img/logo-header.svg" alt="legenda-parfum-logo" />
        </a>

        <nav className='header-category'>
          <a className={`header-category__item ${location.pathname === '/full-vials' ? 'action' : ''}`} href="/full-vials">ПОВНІ ФЛАКОНИ</a>

          <a className={`header-category__item ${location.pathname === '/rospiv' ? 'action' : ''}`} href="/rospiv">РОЗПИВ</a>

          <a className={`header-category__item ${location.pathname === '/miniatures' ? 'action' : ''}`} href="/miniatures">МІНІАТЮРИ</a>

          <a className={`header-category__item ${location.pathname === '/makeup' ? 'action' : ''}`} href="/makeup">КОСМЕТИКА</a>

          {/* {location.pathname === '/' ? (
          <Link to="catalog" className='header-category__item' smooth={true} duration={100} offset={100}>КАТАЛОГ</Link>
        ) : (
          <a className={`header-category__item ${location.pathname === '/catalog' ? 'action' : ''}`} href="/catalog">КАТАЛОГ</a>
        )} */}

          <a className={`header-category__item ${location.pathname === '/news' ? 'action' : ''}`} href="/news">НОВИНКИ 2023</a>

          {/* <a className='header-category__item' href="/">ОПЛАТА І ДОСТАВКА</a> */}
          {/* <Link to="paymentAndDelivery" className='header-category__item' smooth={true} duration={100} offset={100}>ОПЛАТА І ДОСТАВКА</Link> */}

          {/* {location.pathname === '/' || location.pathname === '/full-vials' || location.pathname === '/rospiv' || location.pathname === '/miniatures'
            || location.pathname === '/makeup' || location.pathname === '/news2023' || location.pathname === '/perfumery'
            || location.pathname === '/rospiv-makeup' || location.pathname === '/shower-gels' || location.pathname === '/oils' ? (
            <Link to="paymentAndDelivery" className='header-category__item' smooth={true} duration={100} offset={100}>ОПЛАТА І ДОСТАВКА</Link>
          ) : (
            <a className={`header-category__item ${location.pathname === '/payment-and-delivery' ? 'action' : ''}`} href="/payment-and-delivery">ОПЛАТА І ДОСТАВКА</a>
          )} */}


          <a className={`header-category__item ${location.pathname === '/about-us' ? 'action' : ''}`} href="/about-us">ПРО НАС</a>

          <a className='header-category__item' href="/contacts">КОНТАКТИ</a>

        </nav>

        <Basket />
        <Burger />

      </div >
    </>
  );
}
