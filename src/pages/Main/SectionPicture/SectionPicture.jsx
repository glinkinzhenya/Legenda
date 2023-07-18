import React from 'react';
import './SectionPicture.css';

export default function SectionPicture() {

  return (
    <div className='sectionPicture container'>
      <div className='sectionPicture-bg'>
        <img className='sectionPicture-bg__img' src="../img/sectionPicturePng.PNG" alt="" />
      </div>

      <div className='sectionPicture-text'>
        <div className='sectionPicture-text__title'>КАТАЛОГ ПАРФУМІВ</div>
        <div className='sectionPicture-description'>ШУКАЄТЕ ПРАФУМИ ЯКІ НАЙКРАЩЕ ПІДІЙДУТЬ ДЛЯ ЛІТА? ДИВІТЬСЯ НАШІ ОГЛЯДИ ТА ДІЗНАЙТЕСЬ БІЛЬШЕ.</div>

        <a className='sectionPicture-text__link' target="_blank" rel="noreferrer" href="https://www.figma.com/file/zPeY1BqusuTKasTDNL1zS3/parfumes-(Copy)?type=design&node-id=1-529&mode=design&t=oDynS4qKd15roKOV-0">
          Детальніше
        </a>

      </div>
    </div>
  );
}
