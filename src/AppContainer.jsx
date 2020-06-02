import { useSelector } from 'react-redux';
import React from 'react';
import { getLanguage } from './store/selectors/getLanguage';
import App, { LanguageContext } from './App';

const AppContainer = () => {
  const language = useSelector(getLanguage);
  return (
    <LanguageContext.Provider value={language}>
      <App />
    </LanguageContext.Provider>
  );
};

export default AppContainer;
