// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import films from './mocks/films';
import {reducer} from './reducer';
import App from './components/app/app';


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const init = (filmList) => {
  ReactDOM.render(<Provider store={store}>
    <App
      films={filmList}
    />
  </Provider>,
  document.querySelector(`#root`));
};

init(films);
