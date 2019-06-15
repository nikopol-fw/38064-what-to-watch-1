// movie-card.e2e.test.jsx

import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {MovieCard} from './movie-card';
import Mock from './../../mocks/films';


configure({
  adapter: new Adapter()
});


const mock = Mock[0];


it(`Active card information is correct`, () => {
  const mouseEnterHandler = jest.fn();
  const mouseLeaveHandler = jest.fn();

  const movieCard = shallow(<MovieCard
    title={mock.title}
    src={mock.src}
    preview={mock.preview}
    isActive={false}
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
  />);

  movieCard
    .simulate(`mouseenter`);


  expect(mouseEnterHandler).toHaveBeenCalled();
});
