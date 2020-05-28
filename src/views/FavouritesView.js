import React, { useContext } from 'react';
import AppContext from '../context';
import PhotoItem from '../components/molecules/PhotoItem/PhotoItem';
import FavouritesTemplate from '../template/FavouritesTemplate';

const FavouritesView = () => {
  const context = useContext(AppContext);
  const { favourites } = context;

  return (
    <FavouritesTemplate>
      {favourites.length === 0 ? (
        <p>Add photos to favourites list</p>
      ) : (
        favourites.map((photo) => (
          <div>
            <PhotoItem
              image={photo.urls.regular}
              desc={photo.alt_description}
              author={photo.user.name}
              photo={photo}
            />
          </div>
        ))
      )}
    </FavouritesTemplate>
  );
};

export default FavouritesView;
