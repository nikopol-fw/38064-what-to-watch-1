// movie-card.jsx

import React from 'react';
import PropTypes from 'prop-types';

import {Video} from '../video/video';


export const MovieCard = (props) => {
  const {title, src, preview, isActive, onMouseEnter, onMouseLeave} = props;

  return <article className="small-movie-card catalog__movies-card"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
    <div className="small-movie-card__image">
      <Video
        src={src}
        preview={preview}
        isPlaying={isActive}
      />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{title}</a>
    </h3>
  </article>;
};


MovieCard.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  preview: PropTypes.string,
  isActive: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};
