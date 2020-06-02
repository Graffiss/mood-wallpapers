import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paragraph.module.scss';

const Paragraph = ({ children }) => {
  return <p className={styles.paragraph}>{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
