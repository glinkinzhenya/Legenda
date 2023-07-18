import React, { useState } from 'react';
import './Burger.css';

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpacityOne, setIsOpacityOne] = useState(false);
  const [isOpacityTwo, setIsOpacityTwo] = useState(false);
  const [isOpacityThree, setIsOpacityThree] = useState(false);
  const [isOpacityFour, setIsOpacityFour] = useState(false);
  const [isOpacityFive, setIsOpacityFive] = useState(false);
  const [isOpacitySix, setIsOpacitySix] = useState(false);
  const [isOpacitySeven, setIsOpacitySeven] = useState(false);
  const [isOpacityEight, setIsOpacityEight] = useState(false);

  const title = [
    { title: 'ГОЛОВНА', href: '/', active: isOpacityOne },
    { title: 'ПОВНІ ФЛАКОНИ', href: '/full-vials', active: isOpacityTwo },
    { title: 'РОЗПИВ', href: '/rospiv', active: isOpacityTwo },
    { title: 'МІНІАТЮРИ', href: '/miniatures', active: isOpacityThree },
    { title: 'КОСМЕТИКА', href: '/makeup', active: isOpacityFour },
    { title: 'НОВИНКИ 2023', href: '/news2023', active: isOpacityFive },
    { title: 'ОПЛАТА І ДОСТАВКА', href: '/payment-and-delivery', active: isOpacitySix },
    { title: 'ПРО НАС', href: '/about-us', active: isOpacitySeven },
    { title: 'КОНТАКТИ', href: '/contacts', active: isOpacityEight }
  ];

  const handleClick = () => {
    document.body.classList.toggle('body-fixed');
    setIsOpen(!isOpen);
    setIsOpacityOne(false);
    setIsOpacityTwo(false);
    setIsOpacityThree(false);
    setIsOpacityFour(false);
    setIsOpacityFive(false);
    setIsOpacitySix(false);
    setIsOpacitySeven(false);
    setIsOpacityEight(false);

    setTimeout(() => {
      setIsOpacityOne(true);
    }, 100);

    setTimeout(() => {
      setIsOpacityTwo(true);
    }, 200);

    setTimeout(() => {
      setIsOpacityThree(true);
    }, 300);

    setTimeout(() => {
      setIsOpacityFour(true);
    }, 400);

    setTimeout(() => {
      setIsOpacityFive(true);
    }, 500);

    setTimeout(() => {
      setIsOpacitySix(true);
    }, 600);

    setTimeout(() => {
      setIsOpacitySeven(true);
    }, 700);

    setTimeout(() => {
      setIsOpacityEight(true);
    }, 800);

  };

  return (
    <>
      <div className={`burger__btn ${isOpen ? 'open' : ''}`} onClick={handleClick}>
        <span className="burger__btn-row"></span>
        <span className="burger__btn-row"></span>
        <span className="burger__btn-row"></span>
      </div>
      {isOpen && (

        <div className="burger-category">
          {title.map((item, index) => (
            <a key={index} className={`burger-category__item ${item.active ? 'burger-category__active' : ''}`} href={item.href}>{item.title}</a>
          ))}
        </div>
      )}
    </>
  );
}
