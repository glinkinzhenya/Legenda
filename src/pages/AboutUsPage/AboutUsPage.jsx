import React from 'react';
import './AboutUsPage.css';
// import News from '../Main/News/News';
import SectionCallBack from '../Main/SectionCallBack/SectionCallBack';
import PaymentAndDelivery from '../Main/PaymentAndDelivery/PaymentAndDelivery';

export default function AboutUsPage() {
  return (
    <>
      <div className='aboutUsPage'>
        <div className='aboutUsPage-container container'>
          <h1 className='aboutUsPage__titleMain'>ПРО НАС</h1>

          <div className='aboutUsPage-box'>
            <div className='aboutUsPage-box__item'>
              <img className='aboutUsPage-box__image' src="./img/aboutUsPage1.JPG" alt="" />
            </div>

            <div className='aboutUsPage-box__item'>
              <img className='aboutUsPage-box__image' src="./img/aboutUsPage2.JPG" alt="" />
            </div>

            <div className='aboutUsPage-box__item'>
              <img className='aboutUsPage-box__image' src="./img/aboutUsPage3.JPG" alt="" />
            </div>

            <div className='aboutUsPage-box__item'>
              <img className='aboutUsPage-box__image' src="./img/aboutUsPage4.JPG" alt="" />
            </div>
          </div>

          <div className='aboutUsPage__descriptionMain'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus leo sed eros congue, a rhoncus mi condimentum. Vivamus vel est condimentum, interdum dui nec, suscipit leo. In id facilisis sem, ut posuere nibh. Sed placerat sapien sit amet faucibus finibus. Aliquam erat volutpat. Phasellus vitae tellus dictum, facilisis ipsum quis, sollicitudin ligula. Maecenas semper ullamcorper augue, nec malesuada mi dignissim vitae. Etiam blandit elementum quam id dignissim. Quisque elementum euismod diam, in pretium quam sodales luctus. Morbi pharetra mattis enim eu porttitor. Integer euismod odio eget maximus tempor. Nam placerat tristique rhoncus. Nam mattis sem risus, nec malesuada velit tristique a.</div>

          <h2 className='aboutUsPage__titlePrimary'>НАША ЗАСНОВНИЦЯ</h2>
          <div className='aboutUsPage__picture'>
            <img className='aboutUsPage__image' src="./img/aboutUsPage-foto-png.PNG" alt="" />
          </div>

          <h2 className='aboutUsPage__titleSecondary'>„Lorem ipsum dolor sit amet, consectetur adipiscing elit!”</h2>
          <div className='aboutUsPage__descriptionSecondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus leo sed eros congue, a rhoncus mi condimentum. Vivamus vel est condimentum, interdum dui nec, suscipit leo. In id facilisis sem, ut posuere nibh. Sed placerat sapien sit amet faucibus finibus. Aliquam erat volutpat. Phasellus vitae tellus dictum, facilisis ipsum quis, sollicitudin ligula. Maecenas semper ullamcorper augue, nec malesuada mi dignissim vitae. Etiam blandit elementum quam id dignissim. Quisque elementum euismod diam, in pretium quam sodales luctus. Morbi pharetra mattis enim eu porttitor. Integer euismod odio eget maximus tempor. Nam placerat tristique rhoncus. Nam mattis sem risus, nec malesuada velit tristique a.</div>

        </div>
      </div>
      {/* <News /> */}
      <PaymentAndDelivery />
      <SectionCallBack />
    </>
  );
}
