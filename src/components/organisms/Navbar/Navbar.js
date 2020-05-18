import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faHeart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar is-warning is-spaced" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item" exact to="/">
          <h5 className="title is-5">Mood Wallpapers</h5>
        </NavLink>

        <button
          type="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink className="navbar-item" exact to="/">
            <span className="icon">
              <FontAwesomeIcon icon={faImages} />
            </span>
            Gallery
          </NavLink>

          <NavLink className="navbar-item" to="/favourites">
            <span className="icon">
              <FontAwesomeIcon icon={faHeart} />
            </span>
            Favourites
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
