import React from 'react';
import styles from './FavouritesTemplate.module.scss';

const FavouritesTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default FavouritesTemplate;
