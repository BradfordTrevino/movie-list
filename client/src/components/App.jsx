import React from 'react';
import movies from '../data/exampleMovies.js'
import MovieList from './MovieList.jsx'
import MovieListEntry from './MovieListEntry.jsx'
import Search from './Search.jsx'

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      allMovies: movies,
      currentMovie: movies[0]
    }
  }

  onSubmitClick(event, input) {
    console.log('Submitted!');
    this.setState({
      allMovies: this.getMovieTitles(input)
    });
  }

  getMovieTitles(input) {
    var getMovies = [];
    for (const movie of movies) {
      if (movie.title.includes(input)) {
        getMovies.push(movie);
      }
    }
    return getMovies;
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <Search submitClick = { this.onSubmitClick.bind(this) }/>
        <MovieList movies = { this.state.allMovies }/>
      </div>
    )
  }
};

export default App;