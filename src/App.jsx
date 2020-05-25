import React from 'react';
import './style.scss';
import { Switch, Route } from 'react-router-dom';
import MenuBarContainer from './components/MenuBar/MenuBarContainer/MenuBarContainer';


function App() {
  return (
    <>
      <MenuBarContainer />
      <Switch>
        <Route exact path="/" component={null} />
        <Route path="/about-us" component={null} />
        <Route path="/contact" component={null} />
        <Route path="/pavilions" component={null} />
      </Switch>
    </>
  );
}

export default App;
