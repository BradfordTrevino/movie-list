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
      watched: false,
      toWatch: false
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
      allMovies: getMovies,
      watched: false,
      toWatch: false
    });
  }

  addMovieTitles(input) {
    let newMovie = {
      title: input,
      watched: false
    }
    Movies.addMovie(newMovie);
    this.setState({
      allMovies: Movies.getMovies(),
      watched: false,
      toWatch: false
    });
  }

  getWatchedMovies(event, title, state) {
    var getMovies = [];
    for (const movie of Movies.getMovies()) {
      if (movie.watched === true) {
        getMovies.push(movie);
      }
    }
    this.setState({
      allMovies: getMovies,
      watched: true,
      toWatch: false
    })
  }

  getToWatchMovies(event, title, state) {
    var getMovies = [];
    for (const movie of Movies.getMovies()) {
      if (movie.watched === false) {
        getMovies.push(movie);
      }
    }
    this.setState({
      allMovies: getMovies,
      watched: false,
      toWatch: true
    })
  }

  toggleWatchedProperty(title) {
    var allMoviesCopy = [...this.state.allMovies];
    for (const movie of allMoviesCopy) {
      if (movie.title === title) {
        movie.watched = !movie.watched;
      }
    }
    this.setState({
      allMovies: allMoviesCopy
    })
  }

  render() {
    var styleWatched = {
      backgroundColor : this.state.watched ? 'green' : 'lightgrey',
    }

    var styleToWatch = {
      backgroundColor : this.state.toWatch ? 'green' : 'lightgrey'
    }

    return (
      <div>
        <h1>Movie List</h1>
        <Input addClick = { this.addMovieTitles.bind(this) }/>
        <Search submitClick = { this.getMovieTitles.bind(this) }/>
        <button className='watched-movies' style = { styleWatched } onClick = { this.getWatchedMovies.bind(this) }>Watched</button>
        <button className='towatch-movies' style = { styleToWatch }onClick = { this.getToWatchMovies.bind(this) }>To Watch</button>
        <MovieList movies = { this.state.allMovies } toggleWatchedProperty = { this.toggleWatchedProperty.bind(this) }/>
      </div>
    )
  }
};


export default App;