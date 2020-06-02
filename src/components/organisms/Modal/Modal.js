import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Modal.module.scss';

const Modal = ({ image, desc, modalOpen, handleModal }) => {
  return (
    <div className={`modal ${modalOpen && 'is-active'}`}>
      <div className="modal-background" />
      <div className="modal-content">
        <div className={cx(styles.wrapper, 'container')}>
          <img src={image} alt={desc} className={styles.image} />
        </div>
      </div>
      <button
        type="button"
        className="modal-close is-large"
        aria-label="close"
        onClick={handleModal}
      />
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  desc: PropTypes.string,
  modalOpen: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  desc: '',
};
export default Modal;
