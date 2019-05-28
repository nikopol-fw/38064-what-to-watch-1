// app.test.jsx

import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';


it(`MovieCard correctly renders`, () => {
  const tree = renderer
    .create(<App
      movies={[`Test movie 1`, `Test movie 2`, `Test movie 3`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
