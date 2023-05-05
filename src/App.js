import './App.css';
import { useState } from 'react';
import axios from 'axios';
import SearchCity from './components/SearchCity';
import ShowCityinfo from './components/ShowCityInfo';
import ShowWeather from './components/ShowWeather';
import FiveDayForecastList from './components/FiveDayForecastList';

function App() {
  const [data, setData] = useState([]);
  const [showFivedayForecast, setShowFivedayForecast] = useState(false);

  const fetchdata = async (city, days) => {
    const params = {
      key: '19eb19c1cff64d1abed55246230505',
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
      // console.log(error);
      return null;
    }
  };

  function handleClick() {
    setShowFivedayForecast(true);
  }

  return (
    <>
      <div className='App'>
        {/* <Header /> */}
        <SearchCity fetchdata={fetchdata} />
        <ShowCityinfo cityData={data['location'] || ''} />
        <ShowWeather currentWeatherData={data['current']} />
      </div>
      <div className='more-forecast-div'>
        <button className='more-forecast-button' onClick={handleClick}>
          5 Day Forecast
        </button>
      </div>
      {showFivedayForecast && (
        <FiveDayForecastList forecast={data['forecast']} />
      )}
    </>
  );
}

export default App;
