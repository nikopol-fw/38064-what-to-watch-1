// movie-list.jsx

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {MovieCard} from '../movie-card/movie-card';


export class MovieList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      films,
      genre,
      activeCard,
      setActiveCard,
      unsetActiveCard,
    } = this.props;

    return <div className="catalog__movies-list">
      {genre === `All genres`
        ? films
          .map((item, i) => <MovieCard key={`movie-card-${i}`}
            title={item.title}
            src={item.src}
            preview={item.preview}
            isActive={i === activeCard ? true : false}
            onMouseEnter={() => {
              setActiveCard(i);
            }}
            onMouseLeave={unsetActiveCard}
          />)
        : films
          .filter((film) => film.genre === genre)
          .map((item, i) => <MovieCard key={`movie-card-${i}`}
            title={item.title}
            src={item.src}
            preview={item.preview}
            isActive={i === activeCard ? true : false}
            onMouseEnter={() => {
              setActiveCard(i);
            }}
            onMouseLeave={unsetActiveCard}
          />)
      }
    </div>;
  }
}


MovieList.propTypes = {
  genre: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })),
  activeCard: PropTypes.number,
  setActiveCard: PropTypes.func.isRequired,
  unsetActiveCard: PropTypes.func.isRequired,
};
