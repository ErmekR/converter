import { Route, Routes } from 'react-router-dom';
import Converter from '../pages/converter';
import CurrencyTable from '../pages/currencyTable';

function MainRoutes() {

  return (
    <Routes>
      <Route path="/" element={<CurrencyTable />} />
      <Route path="/converter" element={<Converter />} />
    </Routes>
  );
}

export default MainRoutes;