import React, { useEffect, useState } from 'react';
import './Pay.css';

export default function Pay() {
  const [items, setItems] = useState([]);


  useEffect(() => {

    const cartItems = localStorage.getItem('cartItems')
    setItems(JSON.parse(cartItems));

  }, []);

  // общая сумма товаров
  const calculateTotalAmount = () => {
    let total = 0;
    for (let i = 0; i < items.length; i += 1) {
      total += parseInt(items[i].price, 10);
    }
    return total;
  };



  return (
    <div className='pay'>

      <div className='pay-info'>

        <div className='pay-info__title'>LEGENDA PARFUME </div>



      </div>

      <div className='pay-basket'>
        <div className='pay-basket__container'>
          {items.map((item, index) => (
            <div key={index} className='pay-basket__item'>
              <div className='item-picture'>
                <img className='item-img' src={item.picture[0]} alt="" />
              </div>
              <div className='item-text'>
                <div className='item-text__name'>{item.name}</div>
                <div className='item-text__description'>3 ml</div>
              </div>
              <div className='item-price'>{item.price} UAH</div>
            </div>
          ))}
          <div className='pay-basket__price-container'>
            <div className='pay-basket__price-title'>Загальна сума:</div>
            <div className='pay-basket__price-number'>{calculateTotalAmount()} UAH</div>
          </div>
        </div>
      </div>

    </div>
  );
}
