import React from 'react';
import styles from './PhotoItem.module.scss';

const PhotoItem = ({ author, image, desc }) => {
  return (
    <>
      <div className={styles.container}>
        <img src={image} alt={desc} className={styles.image} />
        <div className={styles.middle}>
          <button type="button" className="button is-success">
            Zoom
          </button>
        </div>
      </div>
    </>
  );
};

export default PhotoItem;
