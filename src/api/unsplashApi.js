import axios from 'axios';

const ACC_KEY = 'c7FCt4V8eUBZWG7oYuMcEBh2vhIu4Ccv8W5sFWx-aik';
const unsplashApi = `https://api.unsplash.com/search/photos?query=warsaw&page=1&per_page=8&client_id=${ACC_KEY}`;

export const fetchData = async (dataSetter) => {
  try {
    const { data } = await axios.get(unsplashApi);
    dataSetter(data.results);
  } catch (err) {
    console.log(err);
  }
};
