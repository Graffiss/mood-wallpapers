import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryTemple from '../template/GalleryTemplate';
import PhotoItem from '../components/molecules/PhotoItem/PhotoItem';
import './styles.css';
import Loader from '../components/atoms/Loader/Loader';

const GalleryView = () => {
  const [position, setPosition] = useState({ latitude: '50.049683', longitude: '19.944544' });
  const [error, setError] = useState(null);
  const [info, setInfo] = useState({ city: 'krakow', weather: 'sunny' });
  const [photos, setPhotos] = useState([]);

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
    </>
  );
};

export default GalleryView;
