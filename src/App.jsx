import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainRoute from './pages/MainRoute';
import { Context } from './Contex';
import { firestore } from './firebase';
import DeleteButton from './pages/Admin/DeleteAdmin';
// import Pulse from './components/Pulse/Pulse';

export default function App() {
  const [cartItems2, setCartItems2] = useState([]);
  const [fireBase, setFireBase] = useState(null);
  const [windowOpen, setWindowOpen] = useState(false);


  // скачивание изображений
  // const loadImage = (src) => new Promise((resolve, reject) => {
  //   const image = new Image();
  //   image.onload = () => resolve(image);
  //   image.onerror = (error) => reject(error);
  //   image.src = src;
  // });


  // const loadImagesForArray = async (array) => {
  //   try {
  //     const imagePromises = array.map((item) => {
  //       if (Array.isArray(item.picture)) {
  //         return Promise.all(item.picture.map((src) => loadImage(src)));
  //       } else if (typeof item.picture === "string") {
  //         return loadImage(item.picture).then((image) => [image]);
  //       } else {
  //         return Promise.resolve([]); // Возвращаем разрешенный промис с пустым массивом для некорректных значений
  //       }
  //     });

  //     const loadedImagesArrays = await Promise.all(imagePromises);

  //     const productsWithImages = array.map((item, index) => ({
  //       ...item,
  //       picture: loadedImagesArrays[index],
  //     }));
  //     // setData(productsWithImages)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    firestore
      .collection('data')
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        return data; // Вернуть значение из обработчика then()
      })
      .then((data) => setFireBase(data[0]))
      .catch((error) => {
        console.log('Ошибка получения данных из Firestore:', error);
        throw error;
      });
  }, []);

  const dataFireBase = fireBase;

  if (dataFireBase) {
    console.log(dataFireBase);
  }


  const hasAuth = localStorage.getItem('auth') !== null;

  return (
    <Context.Provider value={{ dataFireBase, cartItems2, setCartItems2, windowOpen, setWindowOpen }}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<MainRoute />} />
        </Routes>
        {hasAuth && <DeleteButton />}
        {/* <Pulse/> */}
      </BrowserRouter>
    </Context.Provider>
  );
}
