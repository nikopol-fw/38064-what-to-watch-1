// movie-list.test.jsx

import React from 'react';
import renderer from 'react-test-renderer';

import {MovieList} from './movie-list';
import Mock from './../../mocks/films';


const mockGenre = `All genres`;
const mockActiveCard = null;

it(`MovieList correctly renders`, () => {
  const tree = renderer
    .create(<MovieList
      films={Mock}
      genre={mockGenre}
      activeCard={mockActiveCard}
      setActiveCard={() => {}}
      unsetActiveCard={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
