import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from './template/MainTemplate';
import GalleryView from './views/GalleryView';
import FavouritesView from './views/FavouritesView';

const App = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={GalleryView} />
        <Route path="/favourites" component={FavouritesView} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default App;
