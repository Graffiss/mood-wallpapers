import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from './template/MainTemplate';
import GalleryView from './views/GalleryView';
import FavouritesView from './views/FavouritesView';
import AppContext from './context';

const App = () => {
  const [favourites, setFavourites] = useState([]);

  const addToFav = (photo) => {
    setFavourites([...favourites, photo]);
  };

  const removeFromFav = (photo) => {
    const filteredFavs = favourites.filter((fav) => fav.id !== photo.id);
    setFavourites(filteredFavs);
  };

  const context = {
    favourites,
    addToFav,
    removeFromFav,
  };

  return (
    <BrowserRouter>
      <AppContext.Provider value={context}>
        <MainTemplate>
          <Switch>
            <Route exact path="/" component={GalleryView} />
            <Route path="/favourites" component={FavouritesView} />
          </Switch>
        </MainTemplate>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
