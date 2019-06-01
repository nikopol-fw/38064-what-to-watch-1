// movie-list.jsx

import React from 'react';
import PropTypes from 'prop-types';

import {MovieCard} from '../movie-card/movie-card';


export class MovieList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };
  }

  render() {
    const {movies} = this.props;

    return <div className="catalog__movies-list">
      {movies.map((item, i) => <MovieCard key={i}
        title={item.title}
        src={item.src}
        onClick={this._getActiveCard(item)}
        onMouseEnter={() => {
          this.setState({
            activeCard: item
          });
        }}
      />)}
    </div>;
  }

  _getActiveCard(card) {
    return () => {
      // eslint-disable-next-line no-console
      console.log(card);
    };
  }
}


MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    src: PropTypes.string
  }))
};
