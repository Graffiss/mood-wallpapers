import React, { useState, useEffect } from 'react';
import { fetchData } from '../api/unsplashApi';
import GalleryTemple from '../template/GalleryTemplate';
import PhotoItem from '../components/molecules/PhotoItem/PhotoItem';
import './styles.css';

const GalleryView = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchData(setPhotos);
  }, []);

  return (
    <GalleryTemple>
      {photos.length === 0 ? (
        <p>Loading data from server...</p>
      ) : (
        photos.map((photo) => (
          <div className={`div${photos.indexOf(photo)}`}>
            <PhotoItem
              photo={photo}
              image={photo.urls.regular}
              desc={photo.alt_description}
              author={photo.user.name}
            />
          </div>
        ))
      )}
    </GalleryTemple>
  );
};

export default GalleryView;
