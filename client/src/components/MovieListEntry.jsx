import React from 'react';
import Movies from '../data/Movies.js'

class MovieListEntry extends React.Component {
  constructor ( props ) {
    super ( props );

    this.state = {
      watched: this.props.movie.watched
    }
  }

  handleButtonClick(e) {
    this.props.toggleWatchedProperty(this.props.movie.title);
    // Movies.toggleWatched(this.props.movie.title);
    // this.props.movie.watched = !this.props.movie.watched;
  }

  render() {
    const { movie, toggleWatchedProperty } = this.props;

    var styleButton = {
      backgroundColor : this.props.movie.watched ? 'green' : 'lightgrey',
      fontSize: 12,
    };

    var styleDiv = {
      borderColor : 'black',
      borderWidth : 5
    }

    return (
      <div>
        <div className="movie-item" style = { styleDiv }>{ movie.title }
          <button className="watched-button" style = { styleButton } onClick = { this.handleButtonClick.bind(this) }>
            <span className="watched-text">Watched</span>
          </button>
        </div>
      </div>
    )
  }
};

export default MovieListEntry;