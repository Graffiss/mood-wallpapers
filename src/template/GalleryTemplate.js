import React from 'react';
import PropTypes from 'prop-types';
import styles from './GalleryTemplate.module.scss';

const GalleryTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

GalleryTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GalleryTemplate;
