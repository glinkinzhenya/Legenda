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
  const [arrayProductPopularOne, setArrayProductPopularOne] = useState('');
  const [arrayProductPopularTwo, setArrayProductPopularTwo] = useState('');
  const [arrayProductPopularThree, setArrayProductPopularThree] = useState('');
  const { mainData, cartItems2, setCartItems2 } = useContext(Context);

  const [mainImg, setMainImg] = useState('');

  // скачивание изображений
  const loadImage = (src) => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = (error) => reject(error);
    image.src = src;
  });


  const loadImagesForArray = async (array) => {
    try {
      const imagePromises = array.map((item) => {
        if (Array.isArray(item.picture)) {
          return Promise.all(item.picture.map((src) => loadImage(src)));
        } else if (typeof item.picture === "string") {
          return loadImage(item.picture).then((image) => [image]);
        } else {
          return Promise.resolve([]); // Возвращаем разрешенный промис с пустым массивом для некорректных значений
        }
      });

      const loadedImagesArrays = await Promise.all(imagePromises);

      const productsWithImages = array.map((item, index) => ({
        ...item,
        picture: loadedImagesArrays[index],
      }));
      console.log(productsWithImages);
      setArrayProduct(productsWithImages);
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {

    if (mainData) {
      if (category) {
        let filteredProducts = mainData.filter(
          (item) => item.categoryId === category
        );

        if (popular) {
          filteredProducts = filteredProducts.filter(
            (item) => item.keywords
          );
        }
        loadImagesForArray(filteredProducts);
        // setArrayProduct(filteredProducts)
        console.log(filteredProducts);

      } else if (popular) {
        let filteredProducts = mainData.filter(
          (item) => item.keywords
        );
        loadImagesForArray(filteredProducts);
        // setArrayProduct(filteredProducts)
      } else {
        // loadImagesForArray(mainData);
        setArrayProduct(mainData);
      }

    }

  }, [mainData, category, popular]);


  const [productWindow, setProductWindow] = useState(false);
  const [product, setProduct] = useState([]);

  const touchProduct = (item) => {
    setProduct(item);
    setMainImg(item.picture[0])
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

    // // Получение текущих элементов в корзине из локального хранилища
    // const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // const updatedCartItems = [...cartItems, itemToSave];

    // // Сохранение обновленных элементов в локальное хранилище
    // localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    // // Обновление состояния компонента
    // setCartItems2(updatedCartItems);
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
          <img className='products-map-box__item-image' src={item.picture[0] ? item.picture[0].currentSrc : './img/no-image.jpeg'} alt='' />
        </div>
        <div className='products-map-box__item-text'>
          <div className='products-map-box__item-title'>{item.name}</div>
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
                {arrayProductPopularOne && <div onClick={() => touchProduct(arrayProductPopularOne)} className={`products-map-box__item-popular ${fadeOutOne ? 'fade-out__opacity' : ''}`}>
                  <div className={`${popular ? 'products-map-box__item-picture-popular' : 'products-map-box__item-picture'}`}>
                    <img className='products-map-box__item-image' src={arrayProductPopularOne.picture[0] ? arrayProductPopularOne.picture[0].currentSrc : './img/no-image.jpeg'} alt='' />
                  </div>
                  <div className='products-map-box__item-text'>
                    <div className='products-map-box__item-title'>{arrayProductPopularOne.title}</div>
                    <div className='products-map-box__item-description'>{arrayProductPopularOne.description}</div>
                    <div className='products-map-box__item-price'>{arrayProductPopularOne.price} <span>грн.</span></div>
                  </div>
                </div>}

                {arrayProductPopularTwo && <div onClick={() => touchProduct(arrayProductPopularTwo)} className={`products-map-box__item-popular ${fadeOutTwo ? 'fade-out__opacity' : ''}`}>
                  <div className={`${popular ? 'products-map-box__item-picture-popular' : 'products-map-box__item-picture'}`}>
                    <img className='products-map-box__item-image' src={arrayProductPopularTwo.picture[0] ? arrayProductPopularTwo.picture[0].currentSrc : './img/no-image.jpeg'} alt='' />
                  </div>
                  <div className='products-map-box__item-text'>
                    <div className='products-map-box__item-title'>{arrayProductPopularTwo.title}</div>
                    <div className='products-map-box__item-description'>{arrayProductPopularTwo.description}</div>
                    <div className='products-map-box__item-price'>{arrayProductPopularTwo.price} <span>грн.</span></div>
                  </div>
                </div>}

                {arrayProductPopularThree && <div onClick={() => touchProduct(arrayProductPopularThree)} className={`products-map-box__item-popular ${fadeOutThree ? 'fade-out__opacity' : ''}`}>
                  <div className={`${popular ? 'products-map-box__item-picture-popular' : 'products-map-box__item-picture'}`}>
                    <img className='products-map-box__item-image' src={arrayProductPopularThree.picture[0] ? arrayProductPopularThree.picture[0].currentSrc : './img/no-image.jpeg'} alt='' />
                  </div>
                  <div className='products-map-box__item-text'>
                    <div className='products-map-box__item-title'>{arrayProductPopularThree.title}</div>
                    <div className='products-map-box__item-description'>{arrayProductPopularThree.description}</div>
                    <div className='products-map-box__item-price'>{arrayProductPopularThree.price} <span>грн.</span></div>
                  </div>
                </div>}
              </>
            )}



          {productWindow && <div className='product-window'>
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
