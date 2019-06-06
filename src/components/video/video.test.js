// video.test.js

import React from 'react';
import renderer from 'react-test-renderer';

import {Video} from './video';


const mock = {
  src: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};


it(`Video correctly renders`, () => {
  const isActive = true;

  const tree = renderer
    .create(<Video
      src={mock.preview}
      preview={mock.src}
      isPlaying={isActive}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
