import React, { useContext, useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Context } from '../../Contex';
import './Basket.css';
import { width } from '@mui/system';

export default function Basket() {
  const [isBasketWindowActive, setIsBasketWindowActive] = useState(false);
  const [busketNumber, setBusketNumber] = useState(0);
  const [busketNumberCorrect, setBusketNumberCorrect] = useState(0);
  const { cartItems2 } = useContext(Context);

  const [busket, setBusket] = useState([]);

  // получение при перезагрузке страницы
  useEffect(() => {
    const loadCartItems = async () => {
      const cartItems = await localStorage.getItem('cartItems');
      if (cartItems) {
        setBusketNumber(JSON.parse(cartItems).length);
      }
    };
    loadCartItems();
  }, []);

  useEffect(() => {
    setBusketNumberCorrect(cartItems2.length);
    setBusketNumber(prevBusketNumber => prevBusketNumber + cartItems2.length - busketNumberCorrect);
  }, [cartItems2, busketNumber, busketNumberCorrect]);


  // удаление дубликатов
  const countDuplicates = (arr, value) => {
    let count = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].title === value) {
        count += 1;
      }
    }
    return count;
  };


  // открыть корзину
  const handleBasketClick = () => {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      const parsedCartItems = JSON.parse(cartItems);
      const uniqueItems = Array.from(new Set(parsedCartItems.map((item) => item.title)));

      const basketItems = uniqueItems.map((title) => {
        const quantity = countDuplicates(parsedCartItems, title);
        const item = parsedCartItems.find((item) => item.title === title);
        const total = item.price * quantity; // Вычисление суммы для каждого товара
        return { ...item, quantity, total };
      });

      setBusket(basketItems);
    }

    setIsBasketWindowActive(!isBasketWindowActive);
    document.body.classList.toggle('body-fixed');
  };

  const updateLocalStorage = (updatedBasket) => {
    const cartItems = updatedBasket.reduce((items, item) => {
      for (let i = 0; i < item.quantity; i += 1) {
        items.push(item);
      }
      return items;
    }, []);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const increaseQuantity = (index) => {
    const updatedBasket = [...busket];
    updatedBasket[index].quantity += 1;
    updatedBasket[index].total = updatedBasket[index].quantity * updatedBasket[index].price;
    setBusket(updatedBasket);
    updateLocalStorage(updatedBasket); // Обновляем данные в локальном хранилище
    setBusketNumber(busketNumber + 1);
  };
  // кнопка минус
  const decreaseQuantity = (index) => {
    const updatedBasket = [...busket];
    if (updatedBasket[index].quantity > 1) {
      updatedBasket[index].quantity -= 1;
      updatedBasket[index].total = updatedBasket[index].quantity * updatedBasket[index].price;
      setBusket(updatedBasket);
      updateLocalStorage(updatedBasket); // Обновляем данные в локальном хранилище
      setBusketNumber(busketNumber - 1);
    }
  };

  const removeItem = (index) => {
    const updatedBasket = [...busket];
    const item = updatedBasket[index];

    // Удаляем все копии товара из корзины
    const updatedBasketWithoutItem = updatedBasket.filter((basketItem) => basketItem.title !== item.title);
    setBusket(updatedBasketWithoutItem);

    // Удаляем все копии товара из локального хранилища
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      const parsedCartItems = JSON.parse(cartItems);
      const updatedCartItems = parsedCartItems.filter((cartItem) => cartItem.title !== item.title);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      setBusketNumber(updatedCartItems.length);
    }
  };

  const calculateTotalAmount = () => {
    let total = 0;
    for (let i = 0; i < busket.length; i += 1) {
      total += busket[i].total;
    }
    return total;
  };

  // размер иконок в корзине
  const iconSize = window.innerWidth <= 992 ? '15px' : '25px';

  return (
    <div className='basket'>
      <div onClick={handleBasketClick} className={`basket-opacity ${isBasketWindowActive ? 'basket-opacity__active' : ''}`}></div>
      {busketNumber > 0
        ? (
          <div>
            <img onClick={handleBasketClick} className='basket-image' src="./img/logo-basket.svg" alt="" />
            <div className='basket-number'>{busketNumber}</div>
          </div>
        )
        : (
          <img className='basket-image__none' src="./img/logo-basket.svg" alt="" />
        )
      }


      {isBasketWindowActive && <div className='basket-window'>
        <img onClick={handleBasketClick} className='basket-window__close' src="./img/close-window.svg" alt="" />


        <div className='basket-window__title'>ВАШ КОШИК</div>

        <div className='basket-window__AllBox'>
          <div className='basket-window__box'>
            {busket.map((item, index) => (
              <div key={index} className='basket-window__box-item'>
                <div className='basket-window__box-item-picture'>
                  <img className='basket-window__box-item-img' src={item.img[0]} alt={item.img[0]} />
                </div>

                <div className='basket-window__box-item-text__wrapper'>
                  <div className='basket-window__box-item-title'>{item.title}</div>
                  <div className='basket-window__box-item-description'>{item.description}</div>
                </div>

                <div className='basket-window__box-item-info'>3 ml</div>

                <div className='basket-window__box-item-numbers'>
                  <RemoveIcon sx={{ cursor: 'pointer', maxWidth: iconSize }} onClick={() => decreaseQuantity(index)} />
                  <div className='basket-window__box-item-number'>{item.quantity}</div>
                  <AddIcon sx={{ cursor: 'pointer', maxWidth: iconSize }} onClick={() => increaseQuantity(index)} />
                </div>

                <div className='basket-window__box-item-price'>{item.total}  UAH</div>
                <DeleteForeverIcon  className='basket-window__box-item-delete' sx={{ width: '60px', cursor: 'pointer' }} onClick={() => removeItem(index)} />
              </div>
            ))}
          </div>

          <div className='basket-window__box-item__all'>
            <div className='all-cash'>
              <div>ВСЬОГО ДО СПЛАТИ:</div>
              <div>{calculateTotalAmount()} UAH</div>
            </div>

            <div className='all-checkout'>Оформити замовлення</div>
            <div onClick={handleBasketClick} className='all-continue'>Продовжити покупки</div>

          </div>
        </div>

      </div>}

    </div>
  );
}
