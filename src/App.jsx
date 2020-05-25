import React from 'react';
import HeaderCarousel from './components/Header';
import ProductItems from './components/Products';

import './style.scss';

function App() {
  return (
    <div>
      <HeaderCarousel />
      <ProductItems />
    </div>
  );
}

export default App;
