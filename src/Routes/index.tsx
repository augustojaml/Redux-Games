import { Route, Routes as ReactRouter } from 'react-router-dom';
import { Cart } from '../pages/Cart';
import { Home } from '../pages/Home';

export function Routes() {
  return (
    <>
      <ReactRouter>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </ReactRouter>
    </>
  );
}
