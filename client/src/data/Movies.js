var Movies = {

  _data: [],

  addMovie: (movieTitle) => {
    Movies._data.push(movieTitle);
  },

  getMovies: () => {
    return Movies._data;
  },
}

export default Movies;