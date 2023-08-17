import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../../Contex';
import './BanerProduct.css';
import WindowProduct from '../../../../components/WindowProduct/WindowProduct';

export default function BanerProduct() {
  const { dataFireBase, setWindowOpen } = useContext(Context);
  const [black, setBlack] = useState(true);
  const [data, setData] = useState(false);

  const pathname = window.location.pathname;

  const segments = decodeURIComponent(pathname).split('/');


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
      setData(productsWithImages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (dataFireBase) {
      const filteredProducts = dataFireBase[0].product.filter((item) => item.category === segments[1])
      if (filteredProducts) {
        const arrayLength = filteredProducts.length;
        const randomIndex = Math.floor(Math.random() * arrayLength);
        // setData(filteredProducts[randomIndex]);
        loadImagesForArray([filteredProducts[randomIndex]]);
        setTimeout(() => {
          setBlack(false);
        }, 400);
      }

    }
  }, [dataFireBase]);

  const touchProduct = (item) => {
    setWindowOpen(item);
  };

  return (

    <div className={`banerProduct ${black ? 'banerProduct-opacity' : ''}`}>

      <WindowProduct />

      <div className='banerProduct__picture'>
        <img className='banerProduct__image' src={data ? data[0].picture[0].currentSrc : ''} alt="legenda-parfum" />
      </div>
      <div className='banerProduct-box'>
        <div className='banerProduct-box__title'>{data ? data[0].name : ''}</div>
        <div onClick={() => touchProduct(data[0])} className='banerProduct-box__button'>Детальніше</div>
      </div>

    </div>

  );
}
