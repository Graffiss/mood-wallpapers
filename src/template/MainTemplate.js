import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/organisms/Navbar/Navbar';

const MainTemplate = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
