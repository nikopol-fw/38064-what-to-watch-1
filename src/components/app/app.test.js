// app.test.jsx

import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';
import Mock from './../../mocks/films';


it(`App correctly renders`, () => {
  const tree = renderer
    .create(<App
      genre={`All genres`}
      films={Mock}
      onChangeGenre={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
