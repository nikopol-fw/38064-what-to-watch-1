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
    const {movies} = this.props;

    return <div className="catalog__movies-list">
      {movies.map((item, i) => <MovieCard key={i}
        title={item.title}
        src={item.src}
        preview={item.preview}
        isActive={i === this.state.activeCard ? true : false}
        onMouseEnter={() => {
          this._setActiveCard(i);
        }}
        onMouseLeave={() => {
          this._unsetActiveCard();
        }}
      />)}
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
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    src: PropTypes.string,
    preview: PropTypes.string,
  }))
};
