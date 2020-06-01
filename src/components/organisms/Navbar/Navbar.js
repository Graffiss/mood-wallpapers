import React, { useContext, useState } from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.scss';
import AppContext from '../../../context';
import SearchBar from '../../atoms/SearchBar/SearchBar';

const Navbar = () => {
  const [toggleBurger, setToggleBurger] = useState(false);
  const context = useContext(AppContext);
  const { favourites } = context;

  const handleBurger = () => {
    setToggleBurger(!toggleBurger);
  };

  return (
    <nav className="navbar is-warning is-spaced" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item" exact to="/">
          <span className="icon">
            <FontAwesomeIcon icon={faImages} />
          </span>
          <h5 className="title is-5">Mood Wallpapers</h5>
        </NavLink>

        <a
          role="button"
          className={toggleBurger ? 'navbar-burger burger is-active' : 'navbar-burger burger'}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={handleBurger}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={toggleBurger ? 'navbar-menu is-active' : 'navbar-menu'}
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <SearchBar />
          </div>
          <NavLink to="/favourites">
            <div className="navbar-item">
              <button type="button" className={cx(styles.favButton, 'button is-success')}>
                {favourites.length > 0 && <span className={styles.badge}>{favourites.length}</span>}
                <span className="icon">
                  <FontAwesomeIcon icon={faHeart} />
                </span>

                <strong>Favourties</strong>
              </button>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
