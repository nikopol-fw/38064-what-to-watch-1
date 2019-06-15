// reducer.test.js

import {initialState, reducer} from './reducer';
// import {films} from './mocks/films';


// TODO - довести до ума
describe(`Reducer works correctly`, () => {

  it(`Should return initial state by default`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Should changes genre correctly`, () => {
    expect(reducer(initialState, {
      type: `CHANGE_GENRE`,
      payload: `Comedies`
    })).toEqual({
      genre: `Comedies`,
      films: initialState.films
    });
  });
});
