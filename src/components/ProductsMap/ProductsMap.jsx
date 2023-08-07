import React, { useContext, useEffect, useState } from 'react';
import {
  IconButton,
} from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Context } from '../../Contex';
import Filter from '../Filter/Filter';
import './ProductsMap.css';
import Pagination from './Pagination/Pagination';
import WindowProduct from '../WindowProduct/WindowProduct';

export default function ProductsMap({ category, popular }) {
  const [arrayProduct, setArrayProduct] = useState([]);
  const [arrayProductPopularOne, setArrayProductPopularOne] = useState('');
  const [arrayProductPopularTwo, setArrayProductPopularTwo] = useState('');
  const [arrayProductPopularThree, setArrayProductPopularThree] = useState('');
  const { mainData, setWindowOpen } = useContext(Context);

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

  const touchProduct = (item) => {
    setWindowOpen(item);
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

      <WindowProduct />

      <div className={`${popular ? 'products-map-popular' : 'products-map'}`}>

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
