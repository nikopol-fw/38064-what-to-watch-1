// movie-card.e2e.test.jsx

import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {MovieCard} from './movie-card';


configure({
  adapter: new Adapter()
});

it(`Click on the card title is correct`, () => {
  const clickHandler = jest.fn();
  const movieCard = shallow(<MovieCard
    title={`Test title`}
    onClick={clickHandler}
  />);

  expect(movieCard.find(`.small-movie-card__link`))
    .toEqual({});

  movieCard
    .find(`.small-movie-card__link`)
    .simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
