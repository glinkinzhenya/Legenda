import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainRoute from './pages/MainRoute';
import { Context } from './Contex';
// import { firestore } from './firebase';
import DeleteButton from './pages/Admin/DeleteAdmin';
// import Pulse from './components/Pulse/Pulse';
import axios from 'axios';

export default function App() {
  const [cartItems2, setCartItems2] = useState([]);
  const [data2, setData] = useState(null);

  useEffect(() => {
    // firestore
    //   .collection('data')
    //   .get()
    //   .then((querySnapshot) => {
    //     const data = [];
    //     querySnapshot.forEach((doc) => {
    //       data.push(doc.data());
    //     });
    //     return data; // Вернуть значение из обработчика then()
    //   })
    //   .then((data) => setData(data))
    //   .catch((error) => {
    //     // Обработка ошибок
    //     console.log('Ошибка получения данных из Firestore:', error);
    //     throw error;
    //   });


    axios.get('https://jsonreader.onrender.com/service/db/')
      .catch(error => {
        console.log(error);

        axios.get('https://64148167e8fe5a3f3a087de9.mockapi.io/api/v1/data')
          .then(response => {
            console.log(response.data[0].yml_catalog.shop.offers.offer);
            setData(response.data[0].yml_catalog.shop.offers.offer)
          })
          .catch(error => {
            console.log(error);
          });

      })
      .finally(() => {
        setTimeout(() => {
          axios.get('https://64148167e8fe5a3f3a087de9.mockapi.io/api/v1/data')
            .then(response => {
              setData(response.data[0].yml_catalog.shop.offers.offer)
            })
            .catch(error => {
              console.log(error);
            });
        }, 3000);
      })
  }, []);

  const mainData = data2;

  const hasAuth = localStorage.getItem('auth') !== null;

  return (
    <Context.Provider value={{ mainData, cartItems2, setCartItems2 }}>
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
