import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Contex';
import './WindowProduct.css';
import { Alert, Button, CircularProgress, Snackbar } from '@mui/material';

export default function WindowProduct() {
  const { cartItems2, setCartItems2, windowOpen, setWindowOpen, dataFireBase } = useContext(Context);

  const [open, setOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [activeSize, setActiveSize] = useState('3 ml');
  const [mainImg, setMainImg] = useState('');
  const [product, setProduct] = useState(false);

  const { pathname, search } = window.location;

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(search);
    const idParam = urlSearchParams.get('id');

    if (idParam && dataFireBase) {
      let filteredProducts = dataFireBase.product.filter((item) => item.id === idParam);
      setProduct(filteredProducts[0]);
      setWindowOpen(true);
      setMainImg(filteredProducts[0].picture[0])
    }
  }, [search, dataFireBase]);

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

  const touchProductClose = async () => {
    const url = `${product.category}`;
    await window.history.pushState({}, '', url);
    setWindowOpen(false);
    setProduct(false);
    setMainImg('');
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
    const url = `${product.category}`;
    window.history.pushState({}, '', url);
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
            {/* <img className='window__gallary-main-img' src={mainImg && mainImg} alt="" /> */}

            {mainImg ? (
              <img
                className="window__gallary-main-img"
                src={mainImg}
                alt=""
              />
            ) : (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '40%' }}>
                <CircularProgress />
              </div>
            )}
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

          <div className='window__info-price'>{product.price} UAH</div>

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
