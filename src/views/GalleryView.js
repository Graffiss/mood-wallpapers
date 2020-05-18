import React from 'react';
import cx from 'classnames';
import styles from './GalleryView.module.scss';
import yellowCity from '../assets/images/yellow-city.jpg';

const GalleryView = () => {
  return (
    <div className={cx(styles.view, 'tile is-ancestor')}>
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
