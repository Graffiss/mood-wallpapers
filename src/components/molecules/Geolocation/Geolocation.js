import React, { useEffect, useState } from 'react';
import { fetchData } from '../../../api/geolocationApi';
import { fetchWeather } from '../../../api/darkSkyApi';

const Geolocation = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);
  const [city, setCity] = useState([]);
  const [weather, setWeather] = useState([]);

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
    fetchData(setCity);
  }, []);

  useEffect(() => {
    fetchWeather(setWeather);
  }, []);

  return (
    <div>
      <p>
        We have a {weather} weather in {city}
      </p>
    </div>
  );
};

export default Geolocation;
