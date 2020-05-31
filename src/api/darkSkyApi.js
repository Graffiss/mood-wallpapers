import axios from 'axios';

const ACC_KEY = 'e384569e4978ee62da3ec0acf48e4473';
const darkSkyApi = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${ACC_KEY}/52.2296756,21.012228699?exclude=hourly,daily,alerts,flags`;

export const fetchWeather = async (dataSetter) => {
  try {
    const { data } = await axios.get(darkSkyApi);
    dataSetter(data.currently.summary.toLowerCase());
  } catch (err) {
    console.log(err);
  }
};
