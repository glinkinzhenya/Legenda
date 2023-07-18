import React from 'react';
import './Categories.css';

export default function Categories() {
  return (
    <div id="catalog" className='categories'>

      <div className='categories-container container'>
        <h2 className='categories__title'>КАТАЛОГ</h2>
        <div className='categories-box'>

          <a className='categories-box__item' href="/full-vials">
            <div className='categories-box__item-picture'>
              <img className='categories-box__item-image' src="./img/full-vials.png" alt="legenda-parfum" />
            </div>
            <div className='categories-box__item-text'>ПОВНІ ФЛАКОНИ</div>
          </a>

          <a className='categories-box__item' href="/rospiv">
            <div className='categories-box__item-picture'>
              <img className='categories-box__item-image' src="./img/rospiv.jpg" alt="legenda-parfum" />
            </div>
            <div className='categories-box__item-text'>РОЗПИВ</div>
          </a>

          <a className='categories-box__item' href="/miniatures">
            <div className='categories-box__item-picture'>
              <img className='categories-box__item-image' src="./img/miniatures.jpg" alt="legenda-parfum" />
            </div>
            <div className='categories-box__item-text'>МІНІАТЮРИ</div>
          </a>

          <a className='categories-box__item' href="/makeup">
            <div className='categories-box__item-picture'>
              <img className='categories-box__item-image' src="./img/makeup.png" alt="legenda-parfum" />
            </div>
            <div className='categories-box__item-text'>КОСМЕТИКА</div>
          </a>

        </div>
      </div>
    </div>
  );
}
