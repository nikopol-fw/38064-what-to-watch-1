// movie-card.test.jsx

import React from 'react';
import renderer from 'react-test-renderer';

import {MovieCard} from './movie-card';
import Mock from './../../mocks/films';


const mock = Mock[0];

it(`MovieCard correctly renders`, () => {
  const tree = renderer
    .create(<MovieCard
      title={mock.title}
      src={mock.src}
      preview={mock.preview}
      isActive={false}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
