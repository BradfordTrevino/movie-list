import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = ({ movies, toggleWatchedProperty }) => (
  <div className="movie-list">
    { movies.map( movie =>
      <MovieListEntry movie = { movie } toggleWatchedProperty = { toggleWatchedProperty }/>
    )}
  </div>
);

export default MovieList;