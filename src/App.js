import './App.css';
import { useState } from 'react';
import axios from 'axios';
import SearchCity from './components/SearchCity';
import ShowCityinfo from './components/ShowCityInfo';
// import Header from './components/Header';

function App() {
  const [data, setData] = useState([]);

  console.log(data);

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
      // console.log(error);
      return null;
    }
  };

  // useEffect(() => {
  //   fetchdata('vancouver', '1');
  // }, []);

  // function renderCity() {
  //   if (data.length === 0) {
  //     return <ShowCityinfo cityData={data['location'] || ''} />;
  //   } else {
  //     return;
  //   }
  // }

  // console.log(data);
  return (
    <div className='App'>
      {/* <Header /> */}
      <SearchCity fetchdata={fetchdata} />
      <ShowCityinfo cityData={data['location'] || ''} />
    </div>
  );
}

export default App;
