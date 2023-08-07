import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Contex';
import './WindowProduct.css';
import { Alert, Button, Snackbar } from '@mui/material';

export default function WindowProduct() {
  const { cartItems2, setCartItems2, windowOpen, setWindowOpen } = useContext(Context);

  const [open, setOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [activeSize, setActiveSize] = useState('3 ml');
  const [mainImg, setMainImg] = useState('');
  const [product, setProduct] = useState(false);

  useEffect(() => {
    if (windowOpen) {
      setMainImg(windowOpen.picture[0])
      setProduct(windowOpen);
    }
  }, [windowOpen]);


  const handleImageClick = (imageGallery) => {
    setFadeOut(true)
    setTimeout(() => {
      setFadeOut(false);
      setMainImg(imageGallery)
    }, 300);
  };

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  const touchProductClose = () => {
    setWindowOpen(false);
    setProduct(false);
    document.body.classList.remove('body-fixed');
  };

  const handleClick = async (item) => {
    setOpen(true);
    setWindowOpen(false);
    document.body.classList.remove('body-fixed');

    // Преобразование объекта item перед сохранением в локальное хранилище
    const itemToSave = {
      ...item,
      picture: item.picture.map((pic) => pic.src), // Преобразуем элементы типа DOM в массив строк с путями к картинкам
    };

    const cartItems = await localStorage.getItem('cartItems');
    if (cartItems) {
      const cartItemsPars = JSON.parse(cartItems);
      localStorage.setItem('cartItems', JSON.stringify([...cartItemsPars, itemToSave]));
    } else {
      localStorage.setItem('cartItems', JSON.stringify([itemToSave]));
    }
    setCartItems2([...cartItems2, itemToSave]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={touchProductClose} className={`product-window__blur ${windowOpen ? 'product-window__blur__active' : ''}`}></div>
      {windowOpen && <div className='product-window'>
        <img onClick={touchProductClose} className='product-window__close-product' src="./img/close-window.svg" alt="" />

        <div className='product-window__photo'>

          <div className='product-window__gallary'>
            {product.picture && product.picture.map((item, index) => (
              <div onClick={() => handleImageClick(item)} key={index} className='product-window__gallary-picture'>
                <img className='product-window__gallary-img' src={item.currentSrc} alt='' />
              </div>
            ))}
          </div>

          <div className={`product-window__gallary-main ${fadeOut ? 'fade-out' : ''}`}>
            {mainImg && <img className='product-window__gallary-main-img' src={mainImg.currentSrc} alt="" />}
          </div>

        </div>
        <div className='product-window__info'>
          <h2 className='product-window__info-title'>{product.name}</h2>

          <div className='product-window__info-size'>Розмір</div>
          <div className='product-window__info-size-box'>
            <div
              className={`product-window__info-size-item ${activeSize === '3 ml' ? 'product-window__info-size-item_active' : ''}`}
              onClick={() => handleSizeClick('3 ml')}
            >
              3 ml
            </div>
            <div
              className={`product-window__info-size-item ${activeSize === '35 ml' ? 'product-window__info-size-item_active' : ''}`}
              onClick={() => handleSizeClick('35 ml')}
            >
              35 ml
            </div>
            <div
              className={`product-window__info-size-item ${activeSize === '50 ml' ? 'product-window__info-size-item_active' : ''}`}
              onClick={() => handleSizeClick('50 ml')}
            >
              50 ml
            </div>
          </div>

          <div className='product-window__info-size'>Опис</div>

          <div className='product-window__info-description'>{product.description}</div>

          <div className='product-window__info-size'>Ціна</div>

          <div className='product-window__info-price'>{product.price} €</div>

          <div className='product-window__info-true'>
            <div className='product-window__info-true-cirle__main'>
              <div className='product-window__info-true-cirle__second'></div>
            </div>
            <div className='product-window__info-true-title'>в наявності</div>
          </div>

          <h2 className='product-window__info-article'>Артикул: {product.article}</h2>

          <Button className='accordion-item__button' onClick={() => handleClick(product)} sx={{
            backgroundColor: 'black',
            '&:hover': { backgroundColor: 'black', color: 'white !important' },
            fontSize: '14px',
            fontFamily: 'Nunito !important',
            fontWeight: '700',
            width: '100%',
            borderRadius: 'none !important',
          }} variant="contained">Додати до кошику</Button>

        </div>
      </div>}
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%', fontSize: '13px', height: '50px' }}>
          Товар додано до кошику
        </Alert>
      </Snackbar>
    </div>
  )
}
