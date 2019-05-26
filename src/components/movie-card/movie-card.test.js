// movie-card.test.jsx

import React from 'react';
import renderer from 'react-test-renderer';

import {MovieCard} from './movie-card';


it(`MovieCard correctly renders`, () => {
  const tree = renderer
    .create(<MovieCard
      title={`Test title`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
