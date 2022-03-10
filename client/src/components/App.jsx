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
      title: input,
      watched: false
    }
    Movies.addMovie(newMovie);
    this.setState({
      allMovies: Movies.getMovies()
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
      allMovies: getMovies
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
      allMovies: getMovies
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
    return (
      <div>
        <h1>Movie List</h1>
        <Input addClick = { this.addMovieTitles.bind(this) }/>
        <button onClick = { this.getWatchedMovies.bind(this) }>Watched</button>
        <button onClick = { this.getToWatchMovies.bind(this) }>To Watch</button>
        <Search submitClick = { this.getMovieTitles.bind(this) }/>
        <MovieList movies = { this.state.allMovies } toggleWatchedProperty = { this.toggleWatchedProperty.bind(this) }/>
      </div>
    )
  }
};

{/* <button style={buttonStyle} onClick ={(event) => {
        this.onWatchClick(event);
        this.props.onWatchedMovieClick(event,this.props.movie.title, this.state.clicked) */}


export default App;