// movie-card.jsx

import React from 'react';
import PropTypes from 'prop-types';


export const MovieCard = (props) => {
  const {title, onClick} = props;

  return <article className="small-movie-card catalog__movies-card">
    <button className="small-movie-card__play-btn" type="button">Play</button>
    <div className="small-movie-card__image">
      <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="{title}" width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link"
        href="movie-page.html"
        onClick={onClick}>{title}</a>
    </h3>
  </article>;
};


MovieCard.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
};
