import React from 'react';

class Input extends React.Component {
  constructor ( props ) {
    super ( props );

    this.state = {
      input: ''
    }
  }

  handleButtonClick(e) {
    this.props.addClick(document.getElementById('add-input').value);
    this.setState({
      input: document.getElementById('add-input')
    });
    document.getElementById('add-input').value = ''
  }

  render() {
    return (
      <div className='add-movie'>
        <input id='add-input' className='form-control' type='text' placeholder='Add movie title here'/>
        <button type='submit' onClick={this.handleButtonClick.bind(this)}>
          <span>Add</span>
        </button>
      </div>
    )
  }
}

export default Input;