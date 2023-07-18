import React, { useState } from 'react';
import './Pulse.css';

export default function Pulse() {
  const [isPulseButtonActive, setIsPulseButtonActive] = useState(false);

  const handlePulseButtonClick = () => {
    setIsPulseButtonActive(!isPulseButtonActive);
    document.body.classList.toggle('body-fixed');
  };

  return (
    <div>
      <div onClick={handlePulseButtonClick} className={`pulse-opacity ${isPulseButtonActive ? 'pulse-opacity__active' : ''}`}></div>
      <div onClick={handlePulseButtonClick} className="pulse-button">
        <img className={`pulse-button-image ${isPulseButtonActive ? 'rotate opacity-image' : ''}`} src="./img/chat.png" alt="" />
        <img className={`pulse-button-image2 ${isPulseButtonActive ? '' : 'opacity-image rotate '}`} src="./img/image-icon.png" alt="" />

        <span className="pulse-button__rings"></span>
        <span className="pulse-button__rings"></span>
        <span className="pulse-button__rings"></span>
      </div>

      <div className={`pulse-button-icon ${isPulseButtonActive ? '' : 'pulse-button-icon_bottom opacity-image'}`}>
        <a className="pulse-button-icon_link" href="https://www.instagram.com/work.vik" target="_blank" rel="noreferrer">
          <img className="pulse-button-icon_image" src="./img/instagram-color.png" alt="" />
        </a>
        <a className="pulse-button-icon_link" href="https://www.instagram.com/work.vik" target="_blank" rel="noreferrer">
          <img className="pulse-button-icon_image" src="./img/telegram-color.svg" alt="" />
        </a>
        <a className="pulse-button-icon_link" href="https://www.instagram.com/work.vik" target="_blank" rel="noreferrer">
          <img className="pulse-button-icon_image" src="./img/viber-color.svg" alt="" />
        </a>
      </div>
    </div>
  );
}
