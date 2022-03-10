var Movies = {

  _data: [
    {title: 'The Fast and the Furious', watched: false},
    {title: '2 Fast 2 Furious', watched: false},
    {title: 'The Fast and the Furious: Tokyo Drift', watched: false},
    {title: 'Fast & Furious', watched: false},
    {title: 'Fast Five', watched: false},
    {title: 'Fast & Furious 6', watched: false},
    {title: 'Furious 7', watched: false},
    {title: 'The Fate of the Furious', watched: false},
    {title: 'F9', watched: false},
  ],

  addMovie: (movieTitle) => {
    Movies._data.push(movieTitle);
  },

  getMovies: () => {
    return Movies._data.slice();
  },

  toggleWatched: (title) => {
    console.log(title);
    for (const movie of Movies._data) {
      if (movie.title === title) {
        console.log(movie.watched);
        movie.watched = !movie.watched;
      }
    }
    console.log(Movies._data);
  }
}

export default Movies;