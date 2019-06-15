// movie-list.test.jsx

import React from 'react';
import renderer from 'react-test-renderer';

import {MovieList} from './movie-list';
import Mock from './../../mocks/films';


const mockGenre = `All genres`;

it(`MovieList correctly renders`, () => {
  const tree = renderer
    .create(<MovieList
      films={Mock}
      genre={mockGenre}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
