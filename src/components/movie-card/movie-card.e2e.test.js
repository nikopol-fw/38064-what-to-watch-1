// movie-card.e2e.test.jsx

import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {MovieCard} from './movie-card';


configure({
  adapter: new Adapter()
});


const mock = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  src: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
};


it(`Active card information is correct`, () => {
  const clickHandler = jest.fn();
  const mouseEnterHandler = jest.fn();

  const movieCard = shallow(<MovieCard
    title={mock.title}
    src={mock.src}
    onClick={() => {
      clickHandler(mock);
    }}
    onMouseEnter={mouseEnterHandler}
  />);

  expect(movieCard.find(`.small-movie-card__play-btn`).length)
    .toEqual(1);

  movieCard
    .simulate(`mouseenter`)
    .find(`.small-movie-card__play-btn`)
    .simulate(`click`);


  expect(clickHandler).toHaveBeenCalledWith(mock);
});
