import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = (props) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something!', 'light');
    } else {
      githubContext.searchUsers(text);
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
        {githubContext.users.length > 0 && (
          <button
            onClick={githubContext.clearUsers}
            className='btn btn-light btn-block'
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
