import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something!', 'light');
    } else {
      this.props.searchUsers(this.state.text);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-block btn-dark'
          />
          {this.props.showClear && (
            <button
              onClick={this.props.clearUsers}
              className='btn btn-light btn-block'
            >
              Clear
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default Search;
