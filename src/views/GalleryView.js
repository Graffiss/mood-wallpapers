import React, { useContext } from 'react';
import GalleryTemple from '../template/GalleryTemplate';
import PhotoItem from '../components/molecules/PhotoItem/PhotoItem';
import './styles.css';
import Loader from '../components/atoms/Loader/Loader';
import AppContext from '../context/context';

const GalleryView = () => {
  const context = useContext(AppContext);
  const { photos, info } = context;

  return (
    <>
      <p>
        The weather in {info.city} is {info.weather}
      </p>
      <GalleryTemple>
        {photos.length === 0 ? (
          <Loader />
        ) : (
          photos.map((photo) => (
            <div key={photo.id} className={`div${photos.indexOf(photo)}`}>
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
    </>
  );
};

export default GalleryView;
