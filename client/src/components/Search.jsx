import React from 'react';

const Search = ({ submitClick }) => (
  <div className='search-bar'>
    <input id="input" className='form-control' type='text' placeholder='Search' />
    <button type='submit' onClick={e => submitClick(event, document.getElementById('input').value)}>
      <span>Go!</span>
    </button>
  </div>
);

export default Search;