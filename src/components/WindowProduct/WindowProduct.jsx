import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Contex';
import './WindowProduct.css';
import { Alert, Button, Snackbar } from '@mui/material';

export default function WindowProduct() {
  const { cartItems2, setCartItems2, windowOpen, setWindowOpen, dataFireBase } = useContext(Context);

  const [open, setOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [activeSize, setActiveSize] = useState('3 ml');
  const [mainImg, setMainImg] = useState('');
  const [product, setProduct] = useState(false);
  const [flag, setFlag] = useState(false);
  const [linkSwitch, setlinkSwitch] = useState(false);
  const [mainPass, setMainPass] = useState(false);

  const pathname = window.location.pathname;

  useEffect(() => {
    const segments = decodeURIComponent(pathname).split('/');
    if (segments[1] === '') {
      setlinkSwitch(true);
    } else {
      setMainPass(segments)
    }
    if (dataFireBase && !flag) {
      let filteredProducts = dataFireBase.product.filter((item) => item.article === segments[2]);

      if (filteredProducts.length > 0) {
        setWindowOpen(filteredProducts[0]);
      }
    }
  }, [pathname, dataFireBase]);

  useEffect(() => {
    if (windowOpen) {
      document.body.classList.add('body-fixed');

      setMainImg(windowOpen.picture[0]);
      setProduct(windowOpen);

      let newPath = "/";
      const categoryPaths = {
        'full-vials': '/full-vials',
        'oils': '/oils',
        'perfumery': '/perfumery',
        'shower-gels': '/shower-gels',
        'miniatures': '/miniatures',
        'makeup': '/makeup',
        'news': '/news'
      };

      if (categoryPaths[windowOpen.category]) {
        newPath = `${categoryPaths[windowOpen.category]}/${windowOpen.article}`;
      }

      window.history.pushState(null, null, newPath);
      setFlag(true);
    } else if (mainPass && flag) {
      const newPath = linkSwitch ? '/' : `/${mainPass[1]}`;
      window.history.pushState(null, null, newPath);
    }
  }, [windowOpen, mainPass, flag]);



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

    const cartItems = await localStorage.getItem('cartItems');
    if (cartItems) {
      const cartItemsPars = JSON.parse(cartItems);
      localStorage.setItem('cartItems', JSON.stringify([...cartItemsPars, item]));
    } else {
      localStorage.setItem('cartItems', JSON.stringify([item]));
    }
    setCartItems2([...cartItems2, item]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={touchProductClose} className={`window__blur ${windowOpen ? 'window__blur__active' : ''}`}></div>
      {windowOpen && <div className='window'>
        <img onClick={touchProductClose} className='window__close-product' src="/img/close-window.svg" alt="" />

        <div className='window__photo'>

          <div className='window__gallary'>
            {product.picture ? product.picture.map((item, index) => (
              <div onClick={() => handleImageClick(item)} key={index} className='window__gallary-picture'>
                <img className='window__gallary-img' src={item} alt='' />
              </div>
            )) : <div className='window__gallary-picture'></div>}
          </div>

          <div className={`window__gallary-main ${fadeOut ? 'fade-out' : ''}`}>
            <img className='window__gallary-main-img' src={mainImg && mainImg} alt="" />
          </div>

        </div>
        <div className='window__info'>
          <h2 className='window__info-title'>{product.name}</h2>

          <div className='window__info-size'>Розмір</div>
          <div className='window__info-size-box'>
            <div
              className={`window__info-size-item ${activeSize === '3 ml' ? 'window__info-size-item_active' : ''}`}
              onClick={() => handleSizeClick('3 ml')}
            >
              3 ml
            </div>
            <div
              className={`window__info-size-item ${activeSize === '35 ml' ? 'window__info-size-item_active' : ''}`}
              onClick={() => handleSizeClick('35 ml')}
            >
              35 ml
            </div>
            <div
              className={`window__info-size-item ${activeSize === '50 ml' ? 'window__info-size-item_active' : ''}`}
              onClick={() => handleSizeClick('50 ml')}
            >
              50 ml
            </div>
          </div>

          <div className='window__info-size'>Опис</div>

          <div className='window__info-description'>{product.description}</div>

          <div className='window__info-size'>Ціна</div>

          <div className='window__info-price'>{product.price} €</div>

          <div className='window__info-true'>
            <div className='window__info-true-cirle__main'>
              <div className='window__info-true-cirle__second'></div>
            </div>
            <div className='window__info-true-title'>в наявності</div>
          </div>

          <h2 className='window__info-article'>Артикул: {product.article}</h2>

          <Button onClick={() => handleClick(product)} sx={{
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
