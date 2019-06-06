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
  src: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};


it(`Active card information is correct`, () => {
  const mouseEnterHandler = jest.fn();
  const mouseLeaveHandler = jest.fn();

  const movieCard = shallow(<MovieCard
    title={mock.title}
    src={mock.src}
    preview={mock.preview}

    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
  />);

  movieCard
    .simulate(`mouseenter`);


  expect(mouseEnterHandler).toHaveBeenCalled();
});
