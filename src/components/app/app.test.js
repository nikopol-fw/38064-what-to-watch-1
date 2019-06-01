// app.test.jsx

import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';


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


it(`App correctly renders`, () => {
  const tree = renderer
    .create(<App
      movies={mock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
