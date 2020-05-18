import axios from 'axios';

const ACC_KEY = 'c7FCt4V8eUBZWG7oYuMcEBh2vhIu4Ccv8W5sFWx-aik';
const api = `https://api.unsplash.com/search/photos?query=warsaw&page=1&per_page=5&client_id=${ACC_KEY}`;

export const fetchData = async () => {
  try {
    const { data } = await axios.get(api);

    console.log(data.results[0].urls.regular);
  } catch (err) {
    console.log(err);
  }
};
