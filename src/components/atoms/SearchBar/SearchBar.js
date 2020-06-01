import React, { useState } from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const search = async (e) => {
    if (e.kye === 'Enter') {
      // const data = await fetchUnsplash(query);
      // setPhotos(data)
      setQuery('');
    }
  };

  return (
    <div className="field">
      <p className="control has-icons-left">
        <input
          type="text"
          className={cx(styles.search, 'input')}
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
