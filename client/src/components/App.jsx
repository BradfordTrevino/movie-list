import React from 'react';
import Movies from '../data/Movies.js'
import MovieList from './MovieList.jsx'
import MovieListEntry from './MovieListEntry.jsx'
import Search from './Search.jsx'
import Input from './Input.jsx'

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      allMovies: Movies.getMovies(),
    }
  }

  getMovieTitles(input) {
    var getMovies = [];
    for (const movie of Movies.getMovies()) {
      if (movie.title.toLowerCase().includes(input.toLowerCase())) {
        getMovies.push(movie);
      }
    }
    this.setState({
      allMovies: getMovies
    });
  }

  addMovieTitles(input) {
    let newMovie = {
      title: input
    }
    Movies.addMovie(newMovie);
    this.setState({
      allMovies: Movies.getMovies()
    });
  }

  getWatchedMovies(input) {
    var getMovies = [];
    for (const movie of Movies.getMovies()) {
      console.log(movie);
      if (movie.state.watched === true) {
        getMovies.push(movie);
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <Input addClick = { this.addMovieTitles.bind(this) }/>
        <button onClick = { this.getWatchedMovies.bind(this) }>Watched</button>
        <button>To Watch</button>
        <Search submitClick = { this.getMovieTitles.bind(this) }/>
        <MovieList movies = { this.state.allMovies }/>
      </div>
    )
  }
};

export default App;