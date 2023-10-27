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

          <div className='aboutUsPage__descriptionMain'>
            <p>Магазин нішевої парфумерії "Legenda Parfume" - це справжнє пристановище для цінителів унікальних ароматів і високого рівня обслуговування. Наші клієнти опиняються в світі розкішних і вишуканих парфумів, які відрізняються від масових ароматів своєю неповторністю, індивідуальністю і якістю. Тому "Legenda Parfume" призначені надати їм унікальний досвід вибору та використання парфуму.</p>
            <p className='aboutUsPage__descriptionMain-big'>Асортимент:</p>
            <p>У нашому магазині представлений величезний вибір нішевих парфумів від світових брендів, які виготовляють аромати в обмежених кількостях. Ми ретельно підбираємо кожен аромат в нашому асортименті, приділяючи увагу винятковим історіям, натуральним інгредієнтам та мистецькій цінності кожного аромату. Тут ви знайдете як класичні, так і абсолютно унікальні аромати, які рідко зустрічаються в інших магазинах.</p>
            <p className='aboutUsPage__descriptionMain-big'>Високий рівень обслуговування:</p>
            <p>Ми прагнемо надати нашим клієнтам найвищий рівень обслуговування. Наші продавці-консультанти - це експерти в світі нішевої парфумерії, готові поділитися своїми знаннями та допомогти вам знайти ідеальний аромат. Ми надаємо індивідуальний підхід до кожного клієнта, враховуючи їхні уподобання, стиль життя і настрій. Ми також надаємо можливість спробувати аромати, щоб переконатися, що вони підходять саме вам.</p>

            <p className='aboutUsPage__descriptionMain-big'> Унікальний відбір аромату:</p>
            <p> Наша мета - не просто продавати парфум, а допомагати кожному клієнту знайти аромат, який відображає його індивідуальність і підкреслює його унікальний стиль. Ми пропонуємо послугу унікального підбору парфуму, під час якої наші консультанти допоможуть вам визначитися з ароматом, який найкраще відповідає вашим уподобанням і характеру. Цей персональний підхід робить "Legenda Parfume" унікальним місцем для пошуку та придбання парфуму.</p>
            <p> Магазин нішевої парфумерії "Legenda Parfume" - це місце, де ви знайдете аромати, здатні створити унікальне враження та подарувати вам задоволення від кожного моменту. Наша пристрасть до нішевої парфумерії та найвищий рівень обслуговування допоможуть вам відкрити новий світ ароматів, які підкреслять вашу індивідуальність і стиль.</p>
          </div>


          <h2 className='aboutUsPage__titlePrimary'>НАША ЗАСНОВНИЦЯ</h2>
          <div className='aboutUsPage__picture'>
            <img className='aboutUsPage__image' src="./img/aboutUsPage-foto-png.PNG" alt="" />
          </div>

          <h2 className='aboutUsPage__titleSecondary'>„Жінка, яка змінює гру правил: історія нашої засновниці”</h2>
          <div className='aboutUsPage__descriptionSecondary'>Наша засновниця - це Ольга Ворона, що втілює в собі справжній дух творчості та підприємництва. Вона - жінка, яка завжди мала візію та вірити у свої ідеї. Її рішучість та енергія відзначаються всіма, хто знайомиться з нею.

           Це не лише успішна бізнесвумен, але й природжена лідерка, яка завжди стоїть на чолі ініціатив та проектів. Вона не боїться викликів та завжди готова віддати все з себе для досягнення поставлених цілей.

            Її вплив на наше підприємство надзвичайно важливий. Вона завжди надихає нас на досягнення великих вершин, надаючи приклад рішучості, креативності та відданості своїй справі.

            Ми пишаємося та завжди готові підтримувати її в великому та захопливому підприємницькому подорожі з Legenda Parfume.</div>

        </div>
      </div>
      {/* <News /> */}
      <PaymentAndDelivery />
      <SectionCallBack />
    </>
  );
}
