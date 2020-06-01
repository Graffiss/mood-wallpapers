import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from './context';

const GlobalState = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const [position, setPosition] = useState({ latitude: '50.049683', longitude: '19.944544' });
  const [error, setError] = useState(null);
  const [info, setInfo] = useState({ city: 'krakow', weather: 'sunny' });
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');

  const search = async (e) => {
    if (e.key === 'Enter') {
      const photosData = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&page=1&per_page=8&client_id=${process.env.REACT_APP_UNSPLASH_ACC_KEY}`,
      );
      console.log(photosData.data.results);
      setPhotos(photosData.data.results);
      setQuery('');
    }
  };

  const onChange = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };
  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = window.navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }
    const watcher = geo.getCurrentPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const [cityInfo, weatherInfo] = await Promise.all([
          axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.latitude},${position.longitude}&language=en&result_type=locality&key=${process.env.REACT_APP_GEO_ACC_KEY}`,
          ),
          axios.get(
            `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_WEATHER_ACC_KEY}/${position.latitude},${position.longitude}?exclude=hourly,daily,alerts,flags`,
          ),
        ]);

        const newInfo = {
          city: cityInfo.data.results[0].address_components[0].short_name,
          weather: weatherInfo.data.currently.summary.toLowerCase(),
        };
        setInfo(newInfo);

        const photosData = await axios.get(
          `https://api.unsplash.com/search/photos?query=${newInfo.weather}+${newInfo.city}&page=1&per_page=8&client_id=${process.env.REACT_APP_UNSPLASH_ACC_KEY}`,
        );

        setPhotos(photosData.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchInfo();
  }, [position]);

  const addToFav = (photo) => {
    setFavourites([...favourites, photo]);
  };

  const removeFromFav = (id) => {
    const filteredFavs = favourites.filter((fav) => fav.id !== id);
    setFavourites(filteredFavs);
  };

  const context = {
    favourites,
    addToFav,
    removeFromFav,
    photos,
    info,
    query,
    setQuery,
    search,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default GlobalState;
