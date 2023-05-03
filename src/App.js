import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState('Vancouver');

  const fetchdata = async (city, days) => {
    const params = {
      key: '1faa2f6b0fb04787bf5215247230305',
      q: city,
      days: days,
    };
    try {
      const response = await axios.get(
        'http://api.weatherapi.com/v1/forecast.json',
        { params }
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  useEffect(() => {
    fetchdata('Vancouver', '5');
  }, [city]);

  console.log(data);
  return <div className='App'></div>;
}

export default App;
