import { useState, useEffect } from 'react';

const colors = {
  darkBlue: '#023047',
  blue: '#219EBC',
  lighBlue: '#8ECAE6',
  evenlighterBlue: '#caf0f8',
  orange: '#FB8500',
  lightRed: '#d00000',
  red: '#9d0208',
  darkRed: '#6a040f',
};

function updateColor(temp) {
  if (temp <= -20) {
    return colors.darkBlue;
  } else if (-20 < temp && temp <= -10) {
    return colors.blue;
  } else if (-10 < temp && temp <= 0) {
    return colors.lighBlue;
  } else if (0 < temp && temp <= 10) {
    return colors.evenlighterBlue;
  } else if (10 < temp && temp <= 20) {
    return colors.orange;
  } else if (20 < temp && temp <= 30) {
    return colors.lightRed;
  } else if (30 < temp && temp <= 40) {
    return colors.red;
  } else if (40 < temp && temp <= 50) {
    return colors.darkRed;
  }
}

// const weather = {
//   cloudy =
// }

function ShowWeather({ currentWeatherData }) {
  const [color, setColor] = useState('');
  console.log(currentWeatherData);
  useEffect(() => {
    if (currentWeatherData === undefined) {
      return;
    } else {
      const temp = currentWeatherData['temp_c'];
      setColor(updateColor(temp));
    }
  }, [currentWeatherData]);

  if (currentWeatherData === undefined) {
    return null;
  } else {
    const feelLikeTemp = currentWeatherData['feelslike_c'];
    const temp = currentWeatherData['temp_c'];
    const weatherCondition = currentWeatherData['condition']['text'];
    const weatherConditionIcon = currentWeatherData['condition']['icon'];
    const windKPH = currentWeatherData['wind_kph'];
    const windGustKPH = currentWeatherData['gust_kph'];
    const windDirection = currentWeatherData['wind_dir'];
    const uv = currentWeatherData['uv'];
    const precipitation = currentWeatherData['precip_mm'];

    return (
      <div className='current-weather-container'>
        <div className='weather-condition'>
          <h3>{weatherCondition}</h3>
        </div>
        <div className='box-containers'>
          <div className='temps-container' style={{ backgroundColor: color }}>
            <img src={weatherConditionIcon} />
            <div className='temp-item'>{temp}°C</div>
            <div className='feelslike-item'>Feels Like {feelLikeTemp}°C</div>
          </div>
          <div className='grid-container'>
            <div className='precip-item'>Precip {precipitation}mm</div>
            <div className='wind-item'>
              {windKPH} km/h {windDirection}
            </div>
            <div className='uv-item'>UV {uv}</div>
            <div className='wind-gust-item'>Wind Gust {windGustKPH} km/h</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowWeather;
