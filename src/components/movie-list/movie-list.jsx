// movie-list.jsx

import React from 'react';
import PropTypes from 'prop-types';

import {MovieCard} from '../movie-card/movie-card';


export class MovieList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.activationDuration = 1000;

    this.state = {
      activeCard: null,
      timer: null,
    };
  }

  render() {
    const {films, genre} = this.props;

    return <div className="catalog__movies-list">
      {genre === `All genres`
        ? films
          .map((item, i) => <MovieCard key={`movie-card-${i}`}
            title={item.title}
            src={item.src}
            preview={item.preview}
            isActive={i === this.state.activeCard ? true : false}
            onMouseEnter={this._setActiveCard.bind(this, i)}
            onMouseLeave={this._unsetActiveCard.bind(this)}
          />)
        : films
            .filter((film) => film.genre === genre)
            .map((item, i) => <MovieCard key={`movie-card-${i}`}
              title={item.title}
              src={item.src}
              preview={item.preview}
              isActive={i === this.state.activeCard ? true : false}
              onMouseEnter={this._setActiveCard.bind(this, i)}
              onMouseLeave={this._unsetActiveCard.bind(this)}
            />)
      }
    </div>;
  }

  _setActiveCard(card) {
    const timer = setTimeout(() => {
      this.setState({
        activeCard: card,
      });
    }, this.activationDuration);

    this.setState({timer});
  }

  _unsetActiveCard() {
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }

    this.setState({
      activeCard: null,
      timer: null,
    });
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
};
