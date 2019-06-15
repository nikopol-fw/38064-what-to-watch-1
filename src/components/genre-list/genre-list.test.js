// genre-list.test.js

import React from 'react';
import renderer from 'react-test-renderer';

import {GenreList} from './genre-list';
import Mock from './../../mocks/films';


it(`GenreList correctly renders`, () => {
  const tree = renderer
    .create(<GenreList
      films={Mock}
      onChangeGenre={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
