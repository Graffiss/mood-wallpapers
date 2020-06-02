import React from 'react';
import PropTypes from 'prop-types';
import styles from './FavouritesTemplate.module.scss';

const FavouritesTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

FavouritesTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FavouritesTemplate;
