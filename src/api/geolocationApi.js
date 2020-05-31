import axios from 'axios';

const ACC_KEY = 'AIzaSyD-HzdUqZa-P03-bh64fg49BmjBDcHKvHc';
const geolocationApi = `https://maps.googleapis.com/maps/api/geocode/json?latlng=52.2296756,21.012228699&language=en&result_type=locality&key=${ACC_KEY}`;

export const fetchGeolocation = async (dataSetter) => {
  try {
    const { data } = await axios.get(geolocationApi);
    dataSetter(data.results[0].address_components[0].short_name);
  } catch (err) {
    console.log(err);
  }
};
