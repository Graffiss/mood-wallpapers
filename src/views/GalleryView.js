import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryTemple from '../template/GalleryTemplate';
import PhotoItem from '../components/molecules/PhotoItem/PhotoItem';
import './styles.css';

/* const GEO_ACC_KEY = 'AIzaSyD-HzdUqZa-P03-bh64fg49BmjBDcHKvHc';
const WEATHER_ACC_KEY = 'e384569e4978ee62da3ec0acf48e4473';
const UNSPLASH_ACC_KEY = 'c7FCt4V8eUBZWG7oYuMcEBh2vhIu4Ccv8W5sFWx-aik'; */

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

        console.log('Info', info);

        const photosData = await axios.get(
          `https://api.unsplash.com/search/photos?query=${newInfo.weather}+${newInfo.city}&page=1&per_page=8&client_id=${process.env.REACT_APP_UNSPLASH_ACC_KEY}`,
        );

        setPhotos(photosData.data.results);
        console.log('Photos data from API call:', photosData);
        console.log('Photos:', photos);
      } catch (err) {
        console.log(err);
      }
    };
    fetchInfo();
  }, [position]);

  console.log('Info outside axios get', info);
  console.log('photos outside axios get', photos);
  return (
    <>
      <p>
        The weather in {info.city} is {info.weather}
      </p>
      <GalleryTemple>
        {photos.length === 0 ? (
          <p>Loading data from server...</p>
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
