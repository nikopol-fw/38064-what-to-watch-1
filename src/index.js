// index.js

import React from 'react';
import ReactDOM from 'react-dom';

import films from './mocks/films';
import {App} from './components/app/app';


const init = (filmList) => {
  ReactDOM.render(
      <App movies={filmList} />,
      document.querySelector(`#root`)
  );
};

init(films);
