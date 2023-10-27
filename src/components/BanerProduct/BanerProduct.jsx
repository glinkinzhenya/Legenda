import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Contex';
import './BanerProduct.css';
import WindowProduct from '../WindowProduct/WindowProduct';

export default function BanerProduct() {
  const { dataFireBase, setWindowOpen } = useContext(Context);
  const [black, setBlack] = useState(true);
  const [data, setData] = useState(false);

  const categoryArray = {
    // 0: { link: '/full-vials?id=1' },
    0: { link: '/full-vials?id=2' },
    1: { link: '/oils?id=47' },
    // 3: { link: '/full-vials?id=1' },
    2: { link: '/full-vials?id=39' },
    3: { link: '/miniatures?id=22' },
    // 6: { link: '/full-vials?id=1' },
    // 7: { link: '/full-vials?id=1' },
    // 8: { link: '/full-vials?id=1' },
    4: { link: '/perfumery?id=28' },
    // 10: { link: '/full-vials?id=1' },
    5: { link: '/miniatures?id=21' },
    // 12: { link: '/full-vials?id=1' },
    // 13: { link: '/full-vials?id=1' },
    6: { link: '/miniatures?id=20' },
    // 15: { link: '/full-vials?id=1' },
    // 16: { link: '/full-vials?id=1' },
    // 17: { link: '/full-vials?id=1' },
    // 18: { link: '/full-vials?id=1' },
    7: { link: '/perfumery?id=38' },
};

  const [randomIndex, setrandomIndex] = useState(false);
  useEffect(() => {
    setrandomIndex(Math.floor(Math.random() * 8));

    setTimeout(() => {
      setBlack(false);
    }, 400);
  }, []);

  const touchProduct = () => {
    const url = `${categoryArray[randomIndex].link}`;
    window.history.pushState({}, '', url);
    setWindowOpen(true);
  };
  return (

    <div className={`banerProduct ${black ? 'banerProduct-opacity' : ''}`}>

      {/* <WindowProduct /> */}

      <div className='banerProduct__picture'>
        {randomIndex && <img className='banerProduct__image' src={`./img/tinified/${randomIndex}.png`} alt="legenda-parfum" />}
      </div>
      <div className='banerProduct-box'>
        {/* <div className='banerProduct-box__title'>{'олтлллтлтлотлтлотлгргшршгр'}</div> */}
        <div onClick={() => touchProduct()} className='banerProduct-box__button'>Детальніше</div>
      </div>

    </div>

  );
}
