import React, { useEffect, useState } from 'react';

const Geolocation = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

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
  return (
    <div>
      <p>
        It seems it's {'sunny'} in Latitude: {position.latitude} and Longitude: {position.longitude}
      </p>
    </div>
  );
};

export default Geolocation;
