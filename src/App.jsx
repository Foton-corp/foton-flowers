import React from 'react';
import './style.scss';
import { Switch, Route } from 'react-router-dom';
import MenuBarContainer from './components/MenuBar/MenuBarContainer/MenuBarContainer';
import HeaderCarousel from './components/Header';
import ProductItems from './components/Products';
import Pavilions from "./components/Pavilions/Pavilions";


function App() {
  return (
    <>
      <MenuBarContainer />
      <div>
        <HeaderCarousel />
        <ProductItems />
      </div>
      <Switch>
        <Route exact path="/" component={null} />
        <Route path="/about-us" component={null} />
        <Route path="/contact" component={null} />
        <Route path="/pavilions" component={Pavilions} />
      </Switch>
    </>
  );
}

export default App;
