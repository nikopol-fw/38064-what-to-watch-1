// genre-list.test.js

import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {GenreList} from './genre-list';
import Mock from './../../mocks/films';


configure({
  adapter: new Adapter()
});


const result = [`All genres`, `Detective`, `Drama`, `Fantasy`];

it(`GenreList correctly get genres from films`, () => {
  const changeGenreHandler = jest.fn();

  const genreList = shallow(<GenreList
    films={Mock}
    onChangeGenre={changeGenreHandler}
  />);

  const instance = genreList.instance();

  expect(instance._getGenres(instance.props.films)).toEqual(result);
});
