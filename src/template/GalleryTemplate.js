import React from 'react';
import styles from './GalleryTemplate.module.scss';

const GalleryTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default GalleryTemplate;
