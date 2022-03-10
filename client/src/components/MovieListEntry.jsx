import React from 'react';

class MovieListEntry extends React.Component {
  constructor ( props ) {
    super ( props );

    this.state = {
      watched: false
    }
  }

  handleButtonClick(e) {
    this.setState({
      watched: !this.state.watched
    })
  }

  render() {
    var style = {
      backgroundColor : this.state.watched ? 'green' : 'grey'
    };

    return (
      <div>
        <div>{ this.props.movie.title }
          <button style = { style } onClick = { this.handleButtonClick.bind(this) }>
            <span>Watched</span>
          </button>
        </div>
      </div>
    )
  }
};

export default MovieListEntry;