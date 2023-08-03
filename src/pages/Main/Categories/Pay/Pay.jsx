import React, { useEffect, useState } from 'react';
import './Pay.css';

export default function Pay() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems');
    const data = JSON.parse(cartItems);

    if (data) {
      const uniqueItems = removeDuplicates(data, 'name');
      setItems(uniqueItems);
    }
  }, []);

  const removeDuplicates = (arr, propertyName) => {
    const uniqueNames = new Set();
    const uniqueItems = [];
    arr.forEach((item) => {
      if (!uniqueNames.has(item[propertyName])) {
        uniqueNames.add(item[propertyName]);
        uniqueItems.push(item);
      }
    });
    return uniqueItems;
  };

  const calculateTotalAmount = () => {
    return items.reduce((total, item) => total + parseInt(item.total, 10), 0);
  };

  return (
    <div className='pay'>
      <div className='pay-info'>

        <div className='pay-info__title'>Спосіб оплати</div>

        <div className='pay-info__method'>

          <div className='pay-info__method-item'>
            <div className='pay-info__method-item-picture'>
              <img className='pay-info__method-item-img' src="./img/apple-pay.jpeg" alt="" />
            </div>
          </div>

          <div className='pay-info__method-item google'>
            <div className='pay-info__method-item-picture google-picture'>
              <img className='pay-info__method-item-img' src="./img/gpay.svg" alt="" />
            </div>
          </div>

        </div>

        <div className='pay-info__line'>
          <div className='pay-info__line-left'></div>
          <div className='pay-info__line-title'>Ваші дані</div>
          <div className='pay-info__line-right'></div>
        </div>

      </div>
      <div className='pay-basket'>
        <div className='pay-basket__container'>
          {items.map((item, index) => {
            const { quantity, picture, name, total, price } = item;
            return (
              <div key={index} className='pay-basket__item-container'>
                <div className='pay-basket__item'>
                  <div className='item-picture'>
                    {quantity > 1 && <div className='item-number'>{quantity}</div>}
                    <img className='item-img' src={picture[0]} alt='' />
                  </div>
                  <div className='item-text'>
                    <div className='item-text__name'>{name}</div>
                    <div className='item-text__description'>3 мл</div>
                  </div>
                  <div className='item-price'>{price} грн</div>

                </div>

                {quantity > 1 && <div className='item-price__container'>
                  <div className='item-price__title'>Проміжний підсумок:</div>
                  <div className='item-price__number'>{total} грн</div>
                </div>}

              </div>
            );
          })}
          <div className='pay-basket__price-container'>
            <div className='pay-basket__price-title'>Загальна сума:</div>
            <div className='pay-basket__price-number'>{calculateTotalAmount()} грн</div>
          </div>
        </div>
      </div>
    </div>
  );
}
