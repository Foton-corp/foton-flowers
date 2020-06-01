import React from 'react';
import './style.scss';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuBarContainer from './components/MenuBar/MenuBarContainer/MenuBarContainer';
import Pavilions from './components/Pavilions/Pavilions';
import Products from './components/Products';
import MainBasket from './components/Bascet';
import Footer from './components/Footer';
import FlowersAbout from './components/Products/AboutFlowers';
import { getLanguage } from './store/selectors/getLanguage';
import FullProductPage from './components/Products/FullProduct';

export const LanguageContext = React.createContext('arm');

function App() {
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

export const AppContainer = () => {
  const language = useSelector(getLanguage);

  return (
    <LanguageContext.Provider value={language}>
      <App />
    </LanguageContext.Provider>
  );
};

export default App;
