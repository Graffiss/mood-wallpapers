import React from 'react';
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

export default Modal;
