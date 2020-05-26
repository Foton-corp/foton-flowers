import React from 'react';
import './style.scss';
import { Switch, Route } from 'react-router-dom';
import MenuBarContainer from './components/MenuBar/MenuBarContainer/MenuBarContainer';
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
        <Route path="/pavilions" component={null} />
        <Route path="/flavors" component={MainBascet} />
        <Route path="/:id" component={FloversAbout} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
