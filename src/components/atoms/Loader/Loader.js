import React from 'react';
import styles from './Loader.module.scss';
import spinner from '../../../assets/images/ring-1s-200px.svg';

const Loader = () => (
  <div className={styles.pageloader}>
    <img src={spinner} alt="spinner" />
  </div>
);

export default Loader;
