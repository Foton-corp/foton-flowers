/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import store from './store';
import './style.scss';

const AppContainer = React.lazy(() => import('./AppContainer.jsx'));

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Suspense
        fallback={(
          <BounceLoader
            size={100}
            color="violet"
            css={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}
          />
)}
      >
        <AppContainer />
      </Suspense>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
