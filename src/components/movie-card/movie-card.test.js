// movie-card.test.jsx

import React from 'react';
import renderer from 'react-test-renderer';

import {MovieCard} from './movie-card';


const mock = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  src: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
};


it(`MovieCard correctly renders`, () => {
  const tree = renderer
    .create(<MovieCard
      title={mock.title}
      src={mock.src}
      onClick={() => {}}
      onMouseEnter={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
