// genre-list.jsx

import React from 'react';
import PropTypes from 'prop-types';


export class GenreList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const genres = this._getGenres(this.props.films);
    const onChangeGenre = this.props.onChangeGenre;

    return <ul className="catalog__genres-list">
      {genres.map((genre, ind) => (
        <li className="catalog__genres-item" key={`filter-item-${ind}`}>
          <a href="#" className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onChangeGenre(genre);
            }}
          >{genre}</a>
        </li>
      ))}
    </ul>;
  }

  _getGenres(films) {
    let genres = [];
    for (let film of films) {
      if (!genres.find((genre) => genre === film.genre)) {
        genres.push(film.genre);
      }
    }
    genres.sort();
    genres.unshift(`All genres`);

    return genres;
  }
}


GenreList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })),
  onChangeGenre: PropTypes.func.isRequired,
};
