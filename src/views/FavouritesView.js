import React, { useContext } from 'react';
import AppContext from '../context';
import PhotoItem from '../components/molecules/PhotoItem/PhotoItem';

const FavouritesView = () => {
  const context = useContext(AppContext);
  const { favourites } = context;

  return (
    <div className="container">
      {favourites.length === 0 ? (
        <p>Add photos to favourites list</p>
      ) : (
        favourites.map((photo) => (
          <div>
            <PhotoItem
              image={photo.urls.regular}
              desc={photo.alt_description}
              author={photo.user.name}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default FavouritesView;
