import React from 'react';

class Search extends React.Component {
  constructor ( props ) {
    super ( props );

    this.state = {
      input: ''
    }
  }

  onSubmitClick(event, input) {
    this.props.submitClick(document.getElementById('search-input').value)
    this.setState({
      input: document.getElementById('search-input')
    });
  }


  render() {
    return (
      <div className='search-bar'>
        <input id='search-input' className='form-control' type='text' placeholder='Search' value={this.state.value}/>
        <button type='submit' onClick={this.onSubmitClick.bind(this)}>
          <span>Go!</span>
        </button>
      </div>
    )
  }
};

export default Search;