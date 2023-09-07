import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Grid from './GridContainer/GridContainer';
import Main from './Main/Main';
import Admin from './Admin/Admin';
import Setting from './Admin/Setting/Setting';
import NotFound from './NotFound/NotFound';
import Rospiv from './Main/Categories/CategoriesName/Rospiv/Rospiv';
import FullVials from './Main/Categories/CategoriesName/FullVials/FullVials';
import Makeup from './Main/Categories/CategoriesName/Makeup/Makeup';
import Miniatures from './Main/Categories/CategoriesName/Miniatures/Miniatures';
import News2023 from './Main/Categories/CategoriesName/News2023/News2023';
import AboutUsPage from './AboutUsPage/AboutUsPage';
import PaymentAndDeliveryPage from './PaymentAndDeliveryPage/PaymentAndDeliveryPage';
import Contacts from './Main/Contacts/Contacts';
import Pay from './../components/Pay/Pay';
import Oils from './Main/Categories/CategoriesName/Rospiv/RospivProducts/Oils';
import ShowerGels from './Main/Categories/CategoriesName/Rospiv/RospivProducts/ShowerGels';
import Perfumery from './Main/Categories/CategoriesName/Rospiv/RospivProducts/Perfumery';

export default function MainRoute() {
  return (
    <Grid>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/rospiv' element={<Rospiv />} />
        <Route path='/perfumery/*' element={<Perfumery />} />
        <Route path='/full-vials/*' element={<FullVials />} />
        <Route path='/shower-gels/*' element={<ShowerGels />} />
        <Route path='/oils/*' element={<Oils />} />
        <Route path='/miniatures/*' element={<Miniatures />} />
        <Route path='/makeup/*' element={<Makeup />} />
        <Route path='/news/*' element={<News2023 />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/payment-and-delivery' element={<PaymentAndDeliveryPage />} />
        <Route path='/pay' element={<Pay />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Grid>
  );
}
