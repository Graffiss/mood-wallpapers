import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AppContext from '../../../context/context';

const SearchBar = () => {
  const context = useContext(AppContext);
  const { query, search, setQuery } = context;

  return (
    <div className="field">
      <p className="control has-icons-left">
        <input
          type="text"
          className="input"
          placeholder="Search for wallpapers"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </p>
    </div>
  );
};

export default SearchBar;
