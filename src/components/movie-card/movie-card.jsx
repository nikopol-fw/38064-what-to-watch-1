/* eslint-disable no-console */
// movie-card.jsx

import React from 'react';
import PropTypes from 'prop-types';


export const MovieCard = (props) => {
  const {title, src, onClick, onMouseEnter} = props;

  return <article className="small-movie-card catalog__movies-card" onMouseEnter={onMouseEnter}>
    <button className="small-movie-card__play-btn" type="button" onClick={onClick}>Play</button>
    <div className="small-movie-card__image">
      <img src={`img/${src}`} alt={title} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{title}</a>
    </h3>
  </article>;
};


MovieCard.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func
};
