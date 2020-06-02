import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MenuBarContainer from './components/MenuBar/MenuBarContainer/MenuBarContainer';
import Pavilions from './components/Pavilions/Pavilions';
import MainBasket from './components/Bascet';
import Footer from './components/Footer';
import FlowersAbout from './components/Products/AboutFlowers';
import FullProductPage from './components/Products/FullProduct';
import Products from './components/Products/index';
import { initialize } from './store/action';

export const LanguageContext = React.createContext('arm');

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  return (
    <>
      <MenuBarContainer />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/fullproductpage" component={FullProductPage} />
        <Route path="/about-us" component={null} />
        <Route path="/contact" component={null} />
        <Route path="/pavilions" component={Pavilions} />
        <Route exact path="/flavors" component={MainBasket} />
        <Route path="/flavors/:id" component={FlowersAbout} />
      </Switch>
      <Footer />
    </>
  );
}
export default App;
