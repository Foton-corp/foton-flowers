import React from 'react';
import './style.scss';
import { Switch, Route } from 'react-router-dom';
import MenuBarContainer from './components/MenuBar/MenuBarContainer/MenuBarContainer';
import Pavilions from './components/Pavilions/Pavilions';
import Products from './components/Products';
import MainBascet from './components/Bascet';
import Footer from './components/Footer';
import FloversAbout from './components/Products/FloversAbout';

function App() {
  return (
    <>
      <MenuBarContainer />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/about-us" component={null} />
        <Route path="/contact" component={null} />
        <Route path="/pavilions" component={Pavilions} />
        <Route path="/pavilions" component={null} />
        <Route exact path="/flavors" component={MainBascet} />
        <Route path="/flavors/:id" component={FloversAbout} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
