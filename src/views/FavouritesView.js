import React, { useContext } from 'react';
import AppContext from '../context/context';
import PhotoItem from '../components/molecules/PhotoItem/PhotoItem';
import FavouritesTemplate from '../template/FavouritesTemplate';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

const FavouritesView = () => {
  const context = useContext(AppContext);
  const { favourites } = context;

  return (
    <FavouritesTemplate>
      {favourites.length === 0 ? (
        <Paragraph>Add photos to favourites list</Paragraph>
      ) : (
        favourites.map((photo) => (
          <div key={photo.id}>
            <PhotoItem
              image={photo.urls.regular}
              desc={photo.alt_description}
              author={photo.user.name}
              photo={photo}
              keywords={photo.keywords}
            />
          </div>
        ))
      )}
    </FavouritesTemplate>
  );
};

export default FavouritesView;
