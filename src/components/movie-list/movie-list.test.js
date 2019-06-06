// movie-list.test.jsx

import React from 'react';
import renderer from 'react-test-renderer';

import {MovieList} from './movie-list';


const mock = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }, {
    title: `Bohemian Rhapsody`,
    src: `bohemian-rhapsody.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }, {
    title: `Macbeth`,
    src: `macbeth.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }, {
    title: `Aviator`,
    src: `aviator.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }, {
    title: `We need to talk about Kevin`,
    src: `we-need-to-talk-about-kevin.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }
];


it(`MovieList correctly renders`, () => {
  const tree = renderer
    .create(<MovieList
      movies={mock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
