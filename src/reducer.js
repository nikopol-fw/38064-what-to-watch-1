// reducer.js

import films from './mocks/films';


/** Начальное состояние приложения */
const initialState = {
  genre: `All genres`,
  films
};


const ActionCreators = {
  'CHANGE_GENRE': (genre) => {

    return {
      type: `CHANGE_GENRE`,
      payload: genre,
    };
  }
};


const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case `CHANGE_GENRE`:
      newState.genre = action.payload;
      break;

    default:
      break;
  }

  return newState;
};


export {initialState, ActionCreators, reducer};
