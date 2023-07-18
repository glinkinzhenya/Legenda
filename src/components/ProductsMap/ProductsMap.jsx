import React, { useContext, useEffect, useState } from 'react';
import {
  Alert,
  Button,
  IconButton,
  Snackbar,
} from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Context } from '../../Contex';
import Filter from '../Filter/Filter';
import './ProductsMap.css';
import Pagination from './Pagination/Pagination';

export default function ProductsMap({ category, popular }) {
  const [arrayProduct, setArrayProduct] = useState([]);
  const [arrayProductPopularOne, setArrayProductPopularOne] = useState([]);
  const [arrayProductPopularTwo, setArrayProductPopularTwo] = useState([]);
  const [arrayProductPopularThree, setArrayProductPopularThree] = useState([]);
  const { mainData, cartItems2, setCartItems2 } = useContext(Context);

  const [mainImg, setMainImg] = useState('');
  useEffect(() => {
    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error('Failed to load image'));
      });
    };

    const loadImagesForArray = async (array) => {
      try {
        const imagePromises = array.map((item) => loadImage(item.img));
        const loadedImages = await Promise.all(imagePromises);
        const productsWithImages = array.map((item, index) => ({
          ...item,
          image: loadedImages[index],
        }));
        setArrayProduct(productsWithImages);
      } catch (error) {
        console.error(error);
      }
    };

    // if (mainData) {
    //   if (popular) {
    //     let filteredProducts = mainData[0].product.filter(
    //       (item) => item.popular === true,
    //     );
    //     loadImagesForArray(filteredProducts);
    //   } else {
    //     let filteredProducts = mainData[0].product.filter(
    //       (item) => item.category === category,
    //     );
    //     loadImagesForArray(filteredProducts);
    //   }
    // }

    if (mainData) {
      if (category) {
        let filteredProducts = mainData[0].product.filter(
          (item) => item.category === category
        );

        if (popular) {
          filteredProducts = filteredProducts.filter(
            (item) => item.popular
          );
        }
        loadImagesForArray(filteredProducts);

      } else if (popular) {
        let filteredProducts = mainData[0].product.filter(
          (item) => item.popular
        );
        loadImagesForArray(filteredProducts);
      } else {
        loadImagesForArray(mainData[0].product);
      }

    }

  }, [mainData, category, popular]);


  const [productWindow, setProductWindow] = useState(false);
  const [product, setProduct] = useState([]);

  const touchProduct = (item) => {
    setProduct(item);
    setMainImg(item.img[0])
    setProductWindow(true);
    document.body.classList.add('body-fixed');
  };
  const touchProductClose = () => {
    setProductWindow(false);
    document.body.classList.remove('body-fixed');
  };

  const [open, setOpen] = useState(false);

  const handleClick = async (item) => {
    setOpen(true);
    setProductWindow(false);
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

  const [activeSize, setActiveSize] = useState('3 ml');

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  const [fadeOut, setFadeOut] = useState(false);


  const handleImageClick = (imageGallery) => {
    setFadeOut(true)
    setTimeout(() => {
      setFadeOut(false);
      setMainImg(imageGallery)
    }, 300);
  };

  // популярные стрелочки
  const [startIndexOne, setStartIndexOne] = useState(0);
  const [startIndexTwo, setStartIndexTwo] = useState(1);
  const [startIndexThree, setStartIndexThree] = useState(2);

  const [fadeOutOne, setFadeOutOne] = useState(false);
  const [fadeOutTwo, setFadeOutTwo] = useState(false);
  const [fadeOutThree, setFadeOutThree] = useState(false);

  const [leftDisabled, setleftDisabled] = useState(false);
  const [rightDisabled, setRightDisabled] = useState(false);

  useEffect(() => {
    if (arrayProduct[startIndexOne]) {
      setArrayProductPopularOne(arrayProduct[startIndexOne]);
    }
    if (arrayProduct[startIndexTwo]) {
      setArrayProductPopularTwo(arrayProduct[startIndexTwo]);
    }
    if (arrayProduct[startIndexThree]) {
      setArrayProductPopularThree(arrayProduct[startIndexThree]);
    }

    if (startIndexOne === 0) {
      setleftDisabled(true)
    } else {
      setleftDisabled(false)
    }

    if (startIndexOne === arrayProduct.length - 1 || startIndexTwo === arrayProduct.length - 1 || startIndexThree === arrayProduct.length - 1) {
      setRightDisabled(true)
    } else {
      setRightDisabled(false)
    }


  }, [startIndexOne, startIndexTwo, startIndexThree, arrayProduct]);

  const touchPopularLeft = () => {
    setTimeout(() => {
      setFadeOutOne(true);

      setTimeout(() => {
        if ((startIndexOne - 3) <= 0) {
          setStartIndexOne(0);
        } else {
          setStartIndexOne(startIndexOne - 3);
        }
      }, 300);

      setTimeout(() => {
        setFadeOutOne(false);
      }, 1000);

    }, 600);

    // второе
    setTimeout(() => {
      setFadeOutTwo(true);

      setTimeout(() => {
        if ((startIndexTwo - 3) <= 0) {
          setStartIndexTwo(1);
        } else {
          setStartIndexTwo(startIndexTwo - 3);
        }
      }, 300);

      setTimeout(() => {
        setFadeOutTwo(false);
      }, 1000);

    }, 300);

    // третье

    setFadeOutThree(true);

    setTimeout(() => {
      if ((startIndexThree - 3) <= 0) {
        setStartIndexThree(2);
      } else {
        setStartIndexThree(startIndexThree - 3);
      }
    }, 300);

    setTimeout(() => {
      setFadeOutThree(false);
    }, 1000);

  };


  // право
  const touchPopularRight = () => {
    // первое
    setFadeOutOne(true);

    setTimeout(() => {
      if (arrayProduct.length < startIndexOne + 3) {
        // Действия при достижении конца списка
        setRightDisabled(true)

      } else {
        setStartIndexOne(startIndexOne + 3);
      }
    }, 300);

    setTimeout(() => {
      setFadeOutOne(false);
    }, 1000);

    // второе
    setTimeout(() => {
      setFadeOutTwo(true);

      setTimeout(() => {
        if (arrayProduct.length <= startIndexTwo + 3) {
          // Действия при достижении конца списка
          setArrayProductPopularTwo('')
          setStartIndexTwo(startIndexTwo + 3);
        } else {
          setStartIndexTwo(startIndexTwo + 3);
        }
      }, 300);

      setTimeout(() => {
        setFadeOutTwo(false);
      }, 1000);

    }, 300);

    // третье
    setTimeout(() => {
      setFadeOutThree(true);

      setTimeout(() => {
        if (arrayProduct.length <= startIndexThree + 3) {
          // Действия при достижении конца списка
          setArrayProductPopularThree('')
          setStartIndexThree(startIndexThree + 3);
        } else {
          setStartIndexThree(startIndexThree + 3);
        }
      }, 300);

      setTimeout(() => {
        setFadeOutThree(false);
      }, 1000);

    }, 600);

  };

  const handleFilter = (filteredProducts) => {
    // Принимаем отфильтрованные товары и сохраняем их в состоянии
    setArrayProduct(filteredProducts);
  };

  // колличество товаров на странице и мобильная версия
  const itemsPerPage = window.innerWidth <= 768 ? 6 : 12;

  // сраница
  const [currentPage, setCurrentPage] = useState(1);

  // Вычисляем общее количество страниц на основе количества товаров и количества товаров на странице
  const totalPages = Math.ceil(arrayProduct.length / itemsPerPage);

  // Функция для отображения товаров на текущей странице
  const renderProducts = () => {
    // Определяем индекс первого и последнего товаров на текущей странице
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    // Получаем подмассив товаров, соответствующих текущей странице
    const displayedProducts = arrayProduct.slice(startIndex, endIndex);
    // Возвращаем отображение товаров
    return displayedProducts.map((item, index) => (
      <div onClick={() => touchProduct(item)} className='products-map-box__item' key={index}>
        <div className='products-map-box__item-picture'>
          <img className='products-map-box__item-image' src={item.img[0]} alt='' />
        </div>
        <div className='products-map-box__item-text'>
          <div className='products-map-box__item-title'>{item.title}</div>
          <div className='products-map-box__item-description'>{item.description}</div>
          <div className='products-map-box__item-price'>{item.price} <span>грн.</span></div>
        </div>
      </div>
    ));
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='products-map__pagination'>
      {/* <div className={`products-map ${popular ? 'products-map-popular' : ''}`}> */}
      <div className={`${popular ? 'products-map-popular' : 'products-map'}`}>
        <div onClick={touchProductClose} className={`product-window__blur ${productWindow ? 'product-window__blur__active' : ''}`}></div>

        {!popular && <Filter category={category} onFilter={handleFilter} />}

        {popular && <IconButton
          onClick={touchPopularLeft}
          disabled={leftDisabled}
        >
          <ArrowBackIosNewOutlinedIcon sx={{
            cursor: 'pointer',
          }} />
        </IconButton>}

        <div className={`${popular ? 'products-map-box__popular' : 'products-map-box'}`}>
          {!popular ?
            (renderProducts()
            ) : (
              <>
                <div onClick={() => touchProduct(arrayProductPopularOne)} className={`products-map-box__item-popular ${fadeOutOne ? 'fade-out__opacity' : ''}`}>
                  <div className={`${popular ? 'products-map-box__item-picture-popular' : 'products-map-box__item-picture'}`}>
                    <img className='products-map-box__item-image' src={arrayProductPopularOne.img} alt='' />
                  </div>
                  <div className='products-map-box__item-text'>
                    <div className='products-map-box__item-title'>{arrayProductPopularOne.title}</div>
                    <div className='products-map-box__item-description'>{arrayProductPopularOne.description}</div>
                    <div className='products-map-box__item-price'>{arrayProductPopularOne.price} <span>грн.</span></div>
                  </div>
                </div>

                {arrayProductPopularTwo !== '' ? <div onClick={() => touchProduct(arrayProductPopularTwo)} className={`products-map-box__item-popular ${fadeOutTwo ? 'fade-out__opacity' : ''}`}>
                  <div className={`${popular ? 'products-map-box__item-picture-popular' : 'products-map-box__item-picture'}`}>
                    <img className='products-map-box__item-image' src={arrayProductPopularTwo.img} alt='' />
                  </div>
                  <div className='products-map-box__item-text'>
                    <div className='products-map-box__item-title'>{arrayProductPopularTwo.title}</div>
                    <div className='products-map-box__item-description'>{arrayProductPopularTwo.description}</div>
                    <div className='products-map-box__item-price'>{arrayProductPopularTwo.price} <span>грн.</span></div>
                  </div>
                </div> : ''}

                {arrayProductPopularThree !== '' ? <div onClick={() => touchProduct(arrayProductPopularThree)} className={`products-map-box__item-popular ${fadeOutThree ? 'fade-out__opacity' : ''}`}>
                  <div className={`${popular ? 'products-map-box__item-picture-popular' : 'products-map-box__item-picture'}`}>
                    <img className='products-map-box__item-image' src={arrayProductPopularThree.img} alt='' />
                  </div>
                  <div className='products-map-box__item-text'>
                    <div className='products-map-box__item-title'>{arrayProductPopularThree.title}</div>
                    <div className='products-map-box__item-description'>{arrayProductPopularThree.description}</div>
                    <div className='products-map-box__item-price'>{arrayProductPopularThree.price} <span>грн.</span></div>
                  </div>
                </div> : ''}
              </>
            )}



          {productWindow && <div className='product-window'>
            <img onClick={touchProductClose} className='product-window__close-product' src="./img/close-window.svg" alt="" />

            <div className='product-window__photo'>

              <div className='product-window__gallary'>
                {product.img.map((item, index) => (
                  <div onClick={() => handleImageClick(item)} key={index} className='product-window__gallary-picture'>
                    <img className='product-window__gallary-img' src={item} alt='' />
                  </div>
                ))}
              </div>

              <div className={`product-window__gallary-main ${fadeOut ? 'fade-out' : ''}`}>
                <img className='product-window__gallary-main-img' src={mainImg} alt="" />
              </div>

            </div>
            <div className='product-window__info'>
              <h2 className='product-window__info-title'>{product.title}</h2>

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



        {popular && <IconButton
          onClick={touchPopularRight}
          disabled={rightDisabled}
        >
          <ArrowForwardIosOutlinedIcon sx={{ cursor: 'pointer' }} />
        </IconButton>}

      </div>
      {!popular && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />}
    </div>
  );
}
