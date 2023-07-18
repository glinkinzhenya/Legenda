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
                  1. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className='product-window__info-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus leo sed eros congue, a rhoncus mi condimentum. Vivamus vel est condimentum, interdum dui nec, suscipit leo. In id facilisis sem, ut posuere nibh. Sed placerat sapien sit amet faucibus finibus. Aliquam erat volutpat. Phasellus vitae tellus dictum, facilisis ipsum quis, sollicitudin ligula. Maecenas semper ullamcorper augue, nec malesuada mi dignissim vitae. Etiam blandit elementum quam id dignissim. Quisque elementum euismod diam, in pretium quam sodales luctus. Morbi pharetra mattis enim eu porttitor. Integer euismod odio eget maximus tempor. Nam placerat tristique rhoncus. Nam mattis sem risus, nec malesuada velit tristique a.</div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus nisi at ipsum egestas varius?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className='product-window__info-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus leo sed eros congue, a rhoncus mi condimentum. Vivamus vel est condimentum, interdum dui nec, suscipit leo. In id facilisis sem, ut posuere nibh. Sed placerat sapien sit amet faucibus finibus. Aliquam erat volutpat. Phasellus vitae tellus dictum, facilisis ipsum quis, sollicitudin ligula. Maecenas semper ullamcorper augue, nec malesuada mi dignissim vitae. Etiam blandit elementum quam id dignissim. Quisque elementum euismod diam, in pretium quam sodales luctus. Morbi pharetra mattis enim eu porttitor. Integer euismod odio eget maximus tempor. Nam placerat tristique rhoncus. Nam mattis sem risus, nec malesuada velit tristique a.</div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">
                  3. Suspendisse ornare, neque eu iaculis semper, diam velit efficitur?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className='product-window__info-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus leo sed eros congue, a rhoncus mi condimentum. Vivamus vel est condimentum, interdum dui nec, suscipit leo. In id facilisis sem, ut posuere nibh. Sed placerat sapien sit amet faucibus finibus. Aliquam erat volutpat. Phasellus vitae tellus dictum, facilisis ipsum quis, sollicitudin ligula. Maecenas semper ullamcorper augue, nec malesuada mi dignissim vitae. Etiam blandit elementum quam id dignissim. Quisque elementum euismod diam, in pretium quam sodales luctus. Morbi pharetra mattis enim eu porttitor. Integer euismod odio eget maximus tempor. Nam placerat tristique rhoncus. Nam mattis sem risus, nec malesuada velit tristique a.</div>
                </div>
              </div>
            </div>
          </div>





        </div>
      </div>


    </div>
  );
}
