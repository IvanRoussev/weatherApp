import axios from 'axios';

//http://api.weatherapi.com/v1/forecast.json?key=1faa2f6b0fb04787bf5215247230305&q=Vancouver&days=5

const fetchdata = async (city, days) => {
  const params = {
    key: '1faa2f6b0fb04787bf5215247230305',
    q: city,
    days: days,
  };
  const response = await axios.get(
    'http://api.weatherapi.com/v1/forecast.json',
    { params }
  );
  return response.data;
};

export default fetchdata;
