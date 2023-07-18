import React from 'react';
import './SectionCallBack.css';
// import CallBack from '../../../components/CallBack/CallBack';

export default function SectionCallBack() {
  return (
    <div className='sectionCallBack'>
      <div className='sectionCallBack-container container'>

        <a className='sectionCallBack-link' href="https://www.instagram.com/legenda_parfum/" target="_blank" rel="noreferrer">Підписатися на наш Instagram</a>

        {/* <a className='sectionCallBack-picture' href="https://www.instagram.com/legenda_parfum/" target="_blank" rel="noreferrer">
          <img className='sectionCallBack-image' src="./img/logo-header.svg" alt="legenda-parfum-logo" />
        </a> */}

        {/* <CallBack
          buttonText="Ми Вам зателефонуємо"
          dialogTitle="Введіть Ваш номер телефону та коментар"
          dialogText="Ми зателефонуємо якнайшвидше та відповемо на всі ваші питання"
          confirmText="Надіслати" cancelText="Відміна" from="звідки - 'Головна сторінка'"
          fontSize="12px"
        /> */}
      </div>
    </div>
  );
}
