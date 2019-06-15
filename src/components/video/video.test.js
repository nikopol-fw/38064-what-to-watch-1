// video.test.js

import React from 'react';
import renderer from 'react-test-renderer';

import {Video} from './video';
import Mock from './../../mocks/films';


const mock = Mock[0];


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
