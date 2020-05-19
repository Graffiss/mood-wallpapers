import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './PhotoItem.module.scss';
import Modal from '../../organisms/Modal/Modal';
import AppContext from '../../../context';

const PhotoItem = ({ author, image, desc }) => {
  const context = useContext(AppContext);
  const { addToFav, removeFromFav } = context;
  const [favourite, setFavourite] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);

    favourite ? removeFromFav() : addToFav();
  };

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <img src={image} alt={desc} className={styles.image} />
        <div className={styles.middle}>
          <button type="button" className="button is-success" onClick={handleModal}>
            Zoom
          </button>
          <p>{author}</p>
          <button
            type="button"
            className={`button ${favourite ? 'is-danger' : 'is-white'}`}
            onClick={handleClick}
          >
            <span className="icon">
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </button>
        </div>
      </div>
      {modalOpen && (
        <Modal image={image} desc={desc} modalOpen={modalOpen} handleModal={handleModal} />
      )}
    </>
  );
};

PhotoItem.propTypes = {
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default PhotoItem;
