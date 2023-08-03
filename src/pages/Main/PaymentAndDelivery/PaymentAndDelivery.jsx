import React from 'react';
import './PaymentAndDelivery.css';

export default function PaymentAndDelivery() {

  return (
    <div id='paymentAndDelivery' className='paymentAndDelivery'>
      <div className='paymentAndDelivery-container'>
        <h2 className='paymentAndDelivery__title'>ОПЛАТА І ДОСТАВКА</h2>

        <div className='paymentAndDelivery-box'>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  1.
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className='product-window__info-description'>Повна оплата на розрахунковий рахунок або післяплату за передоплатою 200 грн.
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  2.
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className='product-window__info-description'>Відправка щодня, за умови оплати замовлення до 17:30
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">
                  3.
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className='product-window__info-description'>Посилки на пошті перевіряти ОБОВ'ЯЗКОВО. У кожної посилки вказано оцінну вартість, яку служба доставки відшкодовує у разі пошкодження.
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">
                  4.
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className='product-window__info-description'>Повернення товару у нашому магазині немає.
                  </div>
                </div>
              </div>
            </div>
          </div>





        </div>
      </div>


    </div>
  );
}
