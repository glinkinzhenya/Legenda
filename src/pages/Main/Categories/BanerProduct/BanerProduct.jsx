import React, { useState } from 'react';
import './BanerProduct.css';

export default function BanerProduct() {

  const [black, setBlack] = useState(true);

  setTimeout(() => {
    setBlack(false);
  }, 400);


  return (
    <div className={`banerProduct ${black ? 'banerProduct-opacity' : ''}`}>

      <a className='banerProduct__picture' href="#">
        <img className='banerProduct__image' src="./img/moschino_banner.png" alt="legenda-parfum" />
      </a>
      <div className='banerProduct-box'>
        <div className='banerProduct-box__title'>BLEU DE CHANEL</div>
        <div className='banerProduct-box__button'>Детальніше</div>
      </div>

    </div>
  );
}
