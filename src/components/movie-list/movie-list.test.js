// movie-list.test.jsx

import React from 'react';
import renderer from 'react-test-renderer';

import {MovieList} from './movie-list';


const mock = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  src: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
}, {
  title: `Bohemian Rhapsody`,
  src: `bohemian-rhapsody.jpg`
}, {
  title: `Macbeth`,
  src: `macbeth.jpg`
}, {
  title: `Aviator`,
  src: `aviator.jpg`
}, {
  title: `We need to talk about Kevin`,
  src: `we-need-to-talk-about-kevin.jpg`
}];


it(`MovieCard correctly renders`, () => {
  const tree = renderer
    .create(<MovieList
      movies={mock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
