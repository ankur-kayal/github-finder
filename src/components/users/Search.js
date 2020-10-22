import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      props.showAlert('Please enter something!', 'light');
    } else {
      props.searchUsers(text);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-block btn-dark'
        />
        {props.showClear && (
          <button
            onClick={props.clearUsers}
            className='btn btn-light btn-block'
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
