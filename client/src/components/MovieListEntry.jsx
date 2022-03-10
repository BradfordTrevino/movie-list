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

    var style = {
      backgroundColor : this.props.movie.watched ? 'green' : 'grey'
    };

    return (
      <div>
        <div>{ movie.title }
          <button style = { style } onClick = { this.handleButtonClick.bind(this) }>
            <span>Watched</span>
          </button>
        </div>
      </div>
    )
  }
};

export default MovieListEntry;