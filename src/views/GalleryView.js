import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './GalleryView.module.scss';
import yellowCity from '../assets/images/yellow-city.jpg';
import { fetchData } from '../api/api';

const GalleryView = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchData(setPhotos);
  }, []);

  return (
    <div className={cx(styles.view, 'tile is-ancestor container is-fluid')}>
      <div className="tile is-vertical">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <div className="tile is-child box">
              <img src={yellowCity} alt="" className={styles.image} />
            </div>
            <div className="tile is-child box">
              <img src={yellowCity} alt="" className={styles.image} />
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <img src={yellowCity} alt="" className={styles.image} />
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <img src={yellowCity} alt="" className={styles.image} />
          </div>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <img src={yellowCity} alt="" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default GalleryView;
